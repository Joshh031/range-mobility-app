// Videos are selected by the user. Never guess third-party video IDs.
function parseYouTubeURL(value) {
  let url;
  try {
    url = new URL(value.trim());
  } catch {
    throw Error("Paste a full YouTube video link.");
  }
  if (url.protocol !== "https:" || url.username || url.password || url.port)
    throw Error("Use a secure https:// YouTube link.");
  const host = url.hostname.toLowerCase();
  let id;
  if (host === "youtu.be") id = url.pathname.split("/")[1];
  else if (
    [
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "youtube-nocookie.com",
      "www.youtube-nocookie.com",
    ].includes(host)
  ) {
    const parts = url.pathname.split("/").filter(Boolean);
    id =
      parts[0] === "watch"
        ? url.searchParams.get("v")
        : ["shorts", "embed", "live"].includes(parts[0])
          ? parts[1]
          : null;
  }
  if (!/^[A-Za-z0-9_-]{11}$/.test(id || ""))
    throw Error(
      "Use a link to one YouTube video, not a channel or search page.",
    );
  const raw =
    url.searchParams.get("start") ||
    url.searchParams.get("t") ||
    url.hash.match(/^#t=(.+)$/)?.[1] ||
    "0";
  let start;
  if (/^\d+$/.test(raw)) start = Number(raw);
  else {
    const match = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
    if (!match || !match.slice(1).some(Boolean))
      throw Error("The video timestamp is invalid.");
    start =
      Number(match[1] || 0) * 3600 +
      Number(match[2] || 0) * 60 +
      Number(match[3] || 0);
  }
  if (!Number.isSafeInteger(start) || start < 0 || start > 86400)
    throw Error("Choose a timestamp within 24 hours.");
  return { id, start };
}
function instructionMedia(id) {
  const exercise = ex(id),
    video = state.videos[id];
  const search =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(
      exercise.name + " physical therapist exercise demonstration",
    );
  const watch = video
    ? `https://www.youtube.com/watch?v=${video.id}&t=${video.start}s`
    : "";
  return `<section class="video-guide" id="video-guide-${id}" aria-label="Video guide for ${esc(exercise.name)}">
    <div class="video-stage" id="video-frame-${id}">
      <div class="video-intro"><span class="video-kicker">LEARN THE MOVEMENT</span><h3>${video ? "Watch your instructor." : "See it. Then feel it."}</h3><p>${video ? "Your saved YouTube demonstration, right here." : "Find a real instructor demonstrating this stretch, then save the video you like."}</p>
      ${video ? `<button class="video-play" onclick="watchVideo('${id}')">${uiIcon("play")} Watch demonstration</button>` : `<a class="video-play" href="${esc(search)}" target="_blank" rel="noopener noreferrer" onclick="pauseForVideo()">${uiIcon("play")} Find an instructor on YouTube</a>`}
      </div>
    </div>
    <div class="video-toolbar">${video ? `<a href="${watch}" target="_blank" rel="noopener noreferrer" onclick="pauseForVideo()">Open on YouTube ↗</a>` : "<span>No video saved yet</span>"}<span>Internet required</span></div>
    <details class="video-edit" ${video ? "" : "open"}><summary>${video ? "Change or remove this video" : "Save a demonstration for this stretch"}</summary>
      <p>Copy a YouTube video's link and paste it below. Choose a clear demonstration that matches the movement instructions.</p>
      <label for="video-url-${id}">YouTube video link</label><input id="video-url-${id}" type="url" inputmode="url" placeholder="https://www.youtube.com/watch?v=…" autocomplete="off" value="${video ? watch : ""}">
      <div class="control"><button class="btn" onclick="saveExerciseVideo('${id}')">Save video</button>${video ? `<button class="outline" onclick="removeExerciseVideo('${id}')">Remove video</button>` : ""}<a class="tiny-link" href="${esc(search)}" target="_blank" rel="noopener noreferrer" onclick="pauseForVideo()">Find another instructor ↗</a></div>
    </details>
    <p class="video-note">${video ? "YouTube loads only when you press Watch. If an embed is unavailable, use Open on YouTube." : "YouTube search opens in a new tab; videos are not preselected or vetted."} Your practice timer pauses while you open a guide.</p>
  </section>`;
}
function pauseForVideo() {
  if (!current?.running) return;
  syncTimer();
  current.running = false;
  stopTick();
  releaseWake();
  // Keep the clicked link alive so the browser can open its new tab normally.
  const primary = document.querySelector("#session-overlay .controls .primary");
  if (primary)
    primary.textContent = current.remaining === 0 ? "Done" : "Resume";
}
function watchVideo(id) {
  const video = state.videos[id];
  if (!video) return;
  pauseForVideo();
  document
    .querySelectorAll(".video-guide iframe")
    .forEach((frame) => frame.remove());
  const stage = document.getElementById(`video-frame-${id}`);
  if (!stage) return;
  stage.innerHTML = "";
  const frame = document.createElement("iframe");
  frame.title = `${ex(id).name} — YouTube demonstration`;
  frame.src = `https://www.youtube-nocookie.com/embed/${video.id}?start=${video.start}&playsinline=1&rel=0&autoplay=1`;
  frame.allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  stage.append(frame);
}
function refreshVideoCard(id) {
  const card = document.getElementById(`video-guide-${id}`);
  if (card) card.outerHTML = instructionMedia(id);
}
function saveExerciseVideo(id) {
  try {
    const video = parseYouTubeURL(
      document.getElementById(`video-url-${id}`).value,
    );
    state.videos[id] = video;
    save();
    refreshVideoCard(id);
    toast("Video saved for this movement");
  } catch (error) {
    toast(error.message);
  }
}
function removeExerciseVideo(id) {
  delete state.videos[id];
  save();
  refreshVideoCard(id);
  toast("Video removed");
}
