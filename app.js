const seed = [
  {
    id: "hip90",
    name: "90/90 Hip Switches",
    area: "Hips",
    icon: "🧘",
    seconds: 90,
    side: false,
    kind: "Dynamic mobility",
    how: "Sit with both knees bent around 90 degrees. Rotate both knees slowly from one side to the other. Use your hands behind you for support.",
    feel: "Gentle work around the outside and inside of both hips.",
    avoid: "Do not force a painful hip position.",
    alts: ["seatedrot", "figure4", "supported90"],
  },
  {
    id: "hipflex",
    name: "Half-Kneeling Hip Flexor",
    area: "Quads",
    icon: "🦵",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Kneel with one knee down and the other foot forward. Tuck your pelvis slightly, tighten the glute on the kneeling side, and gently shift forward.",
    feel: "Front of the hip on the kneeling side.",
    avoid: "Avoid arching the low back.",
    alts: ["couch", "standingquad"],
  },
  {
    id: "hamstrap",
    name: "Supine Hamstring Stretch",
    area: "Hamstrings",
    icon: "🌿",
    seconds: 120,
    side: true,
    kind: "Static stretch",
    how: "Lie on your back. Loop a strap or towel around one foot and lift that leg toward the ceiling, keeping your back relaxed and knee softly bent if needed.",
    feel: "Back of your raised thigh.",
    avoid: "Do not pull into sharp pain or tingling.",
    alts: ["doorham", "seatedham"],
  },
  {
    id: "anklewall",
    name: "Knee-to-Wall Ankle Mobilization",
    area: "Calves",
    icon: "→️",
    seconds: 90,
    side: true,
    kind: "Dynamic mobility",
    how: "Face a wall in a split stance. Keeping your front heel planted, move that knee toward the wall over your toes, then ease back.",
    feel: "Ankle moving forward with a light calf stretch.",
    avoid: "Do not let the heel lift.",
    alts: ["bentcalf", "calfstraight"],
  },
  {
    id: "calfstraight",
    name: "Straight-Knee Calf Stretch",
    area: "Calves",
    icon: "👣",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Place hands on a wall. Step one leg back, straighten its knee and press that heel toward the floor.",
    feel: "Upper calf of the back leg.",
    avoid: "Keep back foot pointed forward.",
    alts: ["bentcalf", "anklewall"],
  },
  {
    id: "quadside",
    name: "Side-Lying Quad Stretch",
    area: "Quads",
    icon: "☀️",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Lie on one side, bend the top knee and hold that ankle or use a strap. Keep knees close and pelvis steady.",
    feel: "Front of the thigh.",
    avoid: "Avoid pulling the knee into discomfort.",
    alts: ["standingquad", "couch"],
  },
  {
    id: "adductor",
    name: "Adductor Rockbacks",
    area: "Hips",
    icon: "↔️",
    seconds: 60,
    side: true,
    kind: "Dynamic mobility",
    how: "Start on hands and knees, extend one leg out to the side, and rock hips gently backward and forward. Switch sides halfway.",
    feel: "Inner thigh of the extended leg.",
    avoid: "Keep within a comfortable range.",
    alts: ["butterfly", "frog"],
  },
  {
    id: "squat",
    name: "Supported Deep Squat Hold",
    area: "Hips",
    icon: "🌱",
    seconds: 90,
    side: false,
    kind: "Mobility hold",
    how: "Hold a sturdy support and lower into your most comfortable squat depth. Keep feet planted or elevate heels slightly if needed.",
    feel: "Gentle opening through hips and ankles.",
    avoid: "Do not force depth or allow pinching pain.",
    alts: ["butterfly", "seatedrot"],
  },
  {
    id: "seatedrot",
    name: "Seated Hip Rotation",
    area: "Hips",
    icon: "🔄",
    seconds: 90,
    side: true,
    kind: "Dynamic mobility",
    how: "Sit upright with one knee bent and slowly rotate your lower leg outward and inward while keeping the thigh mostly still.",
    feel: "Deep hip muscles working through comfortable rotation.",
    avoid: "Do not force the knee.",
  },
  {
    id: "figure4",
    name: "Supine Figure-Four",
    area: "Hips",
    icon: "🔷",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Lie on your back, cross one ankle over the opposite thigh and gently draw both legs toward you.",
    feel: "Glute and outer hip of crossed leg.",
    avoid: "Keep knees comfortable.",
  },
  {
    id: "supported90",
    name: "Supported 90/90 Hold",
    area: "Hips",
    icon: "🪑",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Sit in a 90/90 hip position and use yoga blocks, cushions or hands to support your weight. Breathe slowly.",
    feel: "Gentle stretch around the hips.",
    avoid: "Do not force either knee down.",
  },
  {
    id: "couch",
    name: "Couch Stretch",
    area: "Quads",
    icon: "🛋️",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Kneel facing away from a wall or sofa with one shin against it and the opposite foot forward. Stay upright only as comfortable.",
    feel: "Front thigh and hip of the kneeling leg.",
    avoid: "Skip if it irritates the knee.",
  },
  {
    id: "standingquad",
    name: "Standing Quad Stretch",
    area: "Quads",
    icon: "🧍",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Hold a support, bend one knee, and bring the heel gently toward your glute with pelvis level.",
    feel: "Front of the thigh.",
    avoid: "Avoid arching the back.",
  },
  {
    id: "doorham",
    name: "Doorway Hamstring Stretch",
    area: "Hamstrings",
    icon: "🚪",
    seconds: 120,
    side: true,
    kind: "Static stretch",
    how: "Lie near a doorway with one leg supported up the door frame and the other leg through the opening.",
    feel: "Back of elevated thigh.",
    avoid: "Bend knee if needed.",
  },
  {
    id: "seatedham",
    name: "Seated Hamstring Hinge",
    area: "Hamstrings",
    icon: "🌾",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Sit upright with one leg extended, hinge forward gently at hips without rounding aggressively.",
    feel: "Back of extended thigh.",
    avoid: "Do not bounce.",
  },
  {
    id: "bentcalf",
    name: "Bent-Knee Calf Stretch",
    area: "Calves",
    icon: "🦶",
    seconds: 90,
    side: true,
    kind: "Static stretch",
    how: "Face a wall in a staggered stance, slightly bend the back knee while keeping the heel down.",
    feel: "Lower calf and Achilles region.",
    avoid: "Stay pain-free.",
  },
  {
    id: "butterfly",
    name: "Supported Butterfly",
    area: "Hips",
    icon: "🦋",
    seconds: 90,
    side: false,
    kind: "Static stretch",
    how: "Sit tall with soles of feet together and knees comfortably wide. Place cushions under knees if needed.",
    feel: "Inner thighs.",
    avoid: "Do not press knees down.",
  },
  {
    id: "frog",
    name: "Gentle Frog Rockbacks",
    area: "Hips",
    icon: "🐸",
    seconds: 60,
    side: false,
    kind: "Dynamic mobility",
    how: "On hands and knees, move knees slightly apart and gently rock back within a comfortable range.",
    feel: "Inner hips and thighs.",
    avoid: "Use a mat and avoid knee discomfort.",
  },
];
seed.push(
  ...[
    {
      id: "lunge",
      name: "Supported Low Lunge",
      area: "Hips",
      side: true,
      kind: "Static stretch",
      how: "Step one foot forward and lower the back knee onto a cushion. Keep your ribs over your pelvis and gently shift forward. Use a chair for balance.",
      feel: "Front of the hip on the kneeling side.",
      avoid: "Keep the front knee comfortable; avoid arching your back.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "piriformis",
      name: "Seated Figure-Four",
      area: "Hips",
      side: true,
      kind: "Static stretch",
      how: "Sit on a sturdy chair. Cross one ankle over the opposite thigh. Keep your back long and hinge forward a little.",
      feel: "Outer hip of the crossed leg.",
      avoid: "Do not press down on the crossed knee.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "hipcircle",
      name: "Supported Hip Circles",
      area: "Hips",
      side: true,
      kind: "Dynamic mobility",
      how: "Hold a sturdy support. Lift one knee and slowly draw a small circle from the hip, then reverse direction.",
      feel: "Gentle work around your hip.",
      avoid: "Keep your pelvis steady; make the circle smaller if you pinch.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "hamstand",
      name: "Standing Hamstring Hinge",
      area: "Hamstrings",
      side: true,
      kind: "Static stretch",
      how: "Place one heel on a low, stable step. Soften that knee and hinge forward from your hips with a long back.",
      feel: "Back of the elevated thigh.",
      avoid: "Use a low step and avoid rounding or locking your knee.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "hamfloss",
      name: "Supine Hamstring Floss",
      area: "Hamstrings",
      side: true,
      kind: "Dynamic mobility",
      how: "Lie on your back and support one thigh with your hands. Slowly straighten and bend that knee, keeping the thigh still.",
      feel: "Gentle tension at the back of the thigh as the knee straightens.",
      avoid: "Stop before tingling; never force the knee straight.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "halfsplit",
      name: "Supported Half Split",
      area: "Hamstrings",
      side: true,
      kind: "Static stretch",
      how: "From a padded half-kneeling position, shift your hips back and straighten the front leg softly. Place hands on blocks and hinge forward.",
      feel: "Back of the front thigh.",
      avoid: "Keep a small bend in the knee and avoid forcing depth.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "heelraise",
      name: "Supported Heel Raises",
      area: "Calves",
      side: false,
      kind: "Dynamic mobility",
      how: "Hold a wall or sturdy chair. Rise slowly onto the balls of both feet, pause, then lower both heels to the floor with control.",
      feel: "Calf muscles working rather than a passive stretch.",
      avoid:
        "Keep weight over the first and second toes. Stop if the Achilles hurts.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "ankleroll",
      name: "Seated Ankle Circles",
      area: "Ankles",
      side: true,
      kind: "Dynamic mobility",
      how: "Sit on a stable chair and lift one foot. Slowly circle the ankle in both directions while keeping the knee still.",
      feel: "Gentle ankle movement.",
      avoid: "Make a smaller circle if you feel pinching.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "soleusseat",
      name: "Seated Heel-Down Ankle Rock",
      area: "Ankles",
      side: true,
      kind: "Dynamic mobility",
      how: "Sit on a stable chair with feet flat. Bring one foot a little back, then gently move that knee forward over the toes with heel planted.",
      feel: "Lower calf and a gentle forward glide at the ankle.",
      avoid: "Do not force the knee forward or lift the heel.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "pronequad",
      name: "Prone Quad Stretch",
      area: "Quads",
      side: true,
      kind: "Static stretch",
      how: "Lie face down on a mat. Bend one knee and hold the ankle with a hand or strap. Gently bring the heel toward your glute.",
      feel: "Front of the bent thigh.",
      avoid: "Keep hips on the mat. Skip if your knee or back hurts.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "quadrock",
      name: "Tall-Kneeling Lean",
      area: "Quads",
      side: false,
      kind: "Dynamic mobility",
      how: "Kneel tall on a padded mat with knees hip-width apart. Keep hips extended and lean your whole body back only a little, then return.",
      feel: "A light effort and stretch in the front thighs.",
      avoid:
        "This can load the knees. Use a very small range and skip with knee discomfort.",
      seconds: 90,
      icon: "\u2726",
    },
    {
      id: "lateral",
      name: "Supported Lateral Lunge",
      area: "Hips",
      side: true,
      kind: "Dynamic mobility",
      how: "Hold a sturdy support in a wide stance. Bend one knee and shift hips toward that side, keeping the other leg long. Return slowly.",
      feel: "Inner thigh of the straighter leg.",
      avoid: "Stay shallow and keep the bent knee tracking over your foot.",
      seconds: 90,
      icon: "\u2726",
    },
  ],
);
seed.find((e) => e.id === "anklewall").area = "Ankles";
const storeKey = "range-v1";
const initial = {
  routine: seed.slice(0, 8).map((x) => x.id),
  custom: [],
  durations: {},
  feedback: {},
  history: [],
  focus: "Balanced",
  sound: false,
  routines: [],
  assessments: [],
};
let state;
try {
  state = validateData({
    ...structuredClone(initial),
    ...JSON.parse(localStorage.getItem(storeKey) || "{}"),
  });
} catch {
  state = structuredClone(initial);
}
let tab = "today",
  current = null,
  tick = null,
  modal = null;
const $ = (x) => document.querySelector(x);
const db = () => [...seed, ...state.custom];
const ex = (id) => db().find((x) => x.id === id);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const save = () => {
  try {
    localStorage.setItem(storeKey, JSON.stringify(state));
  } catch {
    toast(
      "Storage is unavailable or full. Export a backup to keep your changes.",
    );
  }
};
const secs = (id) => state.durations[id] ?? ex(id)?.seconds ?? 60;
const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const minutes = () =>
  Math.round(state.routine.reduce((a, id) => a + secs(id), 0) / 60);
const datestr = (d) =>
  new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric" });
const toast = (s) => {
  document.querySelectorAll(".toast").forEach((t) => t.remove());
  let e = document.createElement("div");
  e.className = "toast";
  e.setAttribute("role", "status");
  e.textContent = s;
  document.body.append(e);
  setTimeout(() => e.remove(), 2500);
};
const listItem = (id, edit = false) => {
  const e = ex(id);
  if (!e) return "";
  return `<div class="exercise"><div class="mini-icon">${movementGuide(id, true)}</div><div class="ex-info"><strong>${esc(e.name)}</strong><small>${esc(e.area)} · ${esc(e.kind)}</small></div><div class="ex-actions"><span class="duration">${fmt(secs(id))}</span><button class="round-btn" aria-label="Details for ${esc(e.name)}" onclick="showDetail('${id}')">${edit ? "✎" : "›"}</button></div></div>`;
};
function render() {
  document.title = "Range — Your Mobility Practice";
  $("#app").innerHTML =
    `<div class="shell"><header class="top"><div class="logo"><div class="logo-mark">R</div> range<span style="color:#96bd6a">.</span></div><button class="avatar" onclick="navigate('settings')" aria-label="Settings">${uiIcon("settings")}</button></header>
<section id="today" class="pane ${tab === "today" ? "active" : ""}"><div class="eyebrow">${new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</div><h1 class="hello">A little space.<br>A better you.</h1><p class="sub">Your daily moment to move, breathe, and find your range.</p><div class="hero"><div class="eyebrow">YOUR DAILY PRACTICE</div><h2>Lower body.<br>Lighter feeling.</h2><div class="hero-art">${movementGuide("hip90")}</div><p>Unwind tight hips. Find length.<br>Make movement feel good again.</p><div class="chips"><span class="chip">◷ ${minutes()} min</span><span class="chip">◈ ${state.routine.length} movements</span><span class="chip">✦ ${esc(state.focus)}</span></div><button class="cta" onclick="startSession()"><span>Begin session</span><span aria-hidden="true">→</span></button></div><div class="section-head"><h3>Your focus areas</h3><button class="tiny-link" onclick="navigate('settings')">Customize →</button></div><div class="focus-grid">${[
      ["Hips", "◉"],
      ["Hamstrings", "⌁"],
      ["Calves", "→"],
      ["Ankles", "◎"],
      ["Quads", "◇"],
    ]
      .map(
        ([a, i]) =>
          `<button class="focus-card ${state.focus === a ? "active" : ""}" onclick="setFocus('${a}')"><div class="symbol">${i}</div><span>${a}</span><small>${state.focus === a ? "Priority" : "Mobility"}</small></button>`,
      )
      .join(
        "",
      )}</div>${discoveryCard()}<div class="section-head"><h3>Today's sequence</h3><button class="tiny-link" onclick="navigate('routine')">Edit routine →</button></div><div class="routine-list">${state.routine.map((id) => listItem(id)).join("") || '<div class="empty">Add stretches in Routine Builder</div>'}</div><p class="footer-note">Go gently. A stretch should never cause sharp pain.</p></section>
<section id="routine" class="pane ${tab === "routine" ? "active" : ""}"><div class="eyebrow">PERSONAL PROGRAM</div><h1 class="hello">Your routine.</h1><p class="sub">Swap, reorder, or customize any movement at any time.</p><div class="panel"><div class="row"><strong>${state.routine.length} exercises · ${minutes()} min</strong><button class="tiny-link" onclick="resetRoutine()">Reset starter</button></div><div class="routine-list" style="margin-top:15px">${state.routine.map((id, i) => `<div class="exercise"><button class="round-btn" aria-label="Move ${esc(ex(id)?.name)} up" onclick="move(${i},-1)" ${i === 0 ? "disabled" : ""}>↑</button><div class="ex-info"><strong>${esc(ex(id)?.name || id)}</strong><small>${esc(ex(id)?.area || "")} · ${fmt(secs(id))}</small></div><button class="round-btn" aria-label="Edit ${esc(ex(id)?.name)}" onclick="showDetail('${id}')">Edit</button><button class="round-btn" aria-label="Remove" onclick="removeEx('${id}')">×</button><button class="round-btn" aria-label="Move ${esc(ex(id)?.name)} down" onclick="move(${i},1)" ${i === state.routine.length - 1 ? "disabled" : ""}>↓</button></div>`).join("")}</div><button style="margin-top:16px;width:100%" class="btn" onclick="navigate('library')">+ Add a stretch</button></div><button class="cta wide" onclick="startSession()">Start this routine</button>${savedRoutinesUI()}</section>
<section id="library" class="pane ${tab === "library" ? "active" : ""}"><div class="eyebrow">EXPLORE & DISCOVER</div><h1 class="hello">Find your feel-good.</h1><p class="sub">30 movements. Many ways to feel better. Explore a guide, give it a try, and keep what works.</p><input id="search" aria-label="Search movements" value="${esc(window.libQuery || "")}" placeholder="Search movements or body areas…" oninput="window.libQuery=this.value;filterLibrary()" autocomplete="off"><div class="control" id="filters" style="margin:13px 0">${["All", "Hips", "Hamstrings", "Calves", "Ankles", "Quads"].map((a) => `<button class="pill ${window.libFilter === a || (!window.libFilter && a === "All") ? "selected" : ""}" onclick="libraryFilter('${a}')">${a}</button>`).join("")}</div><div id="library-items" class="routine-list">${db()
      .map((x) => listItem(x.id))
      .join(
        "",
      )}</div><button class="btn" style="width:100%;margin-top:15px" onclick="customForm()">+ Create a custom stretch</button></section>
<section id="progress" class="pane ${tab === "progress" ? "active" : ""}"><div class="eyebrow">CONSISTENCY & LEARNING</div><h1 class="hello">Your progress.</h1><p class="sub">You improve the routine by noticing what helps, not by chasing a streak.</p><div class="stat-grid"><div class="stat"><b>${state.history.length}</b><small>Sessions</small></div><div class="stat"><b>${state.history.reduce((a, h) => a + Math.round(h.seconds / 60), 0)}</b><small>Total minutes</small></div><div class="stat"><b>${new Set(state.history.map((h) => new Date(h.date).toDateString())).size}</b><small>Active days</small></div></div>${assessmentUI()}<div class="section-head"><h3>Recent sessions</h3></div>${
      state.history.length
        ? state.history
            .slice(-10)
            .reverse()
            .map(
              (h) =>
                `<div class="exercise"><div class="mini-icon">✓</div><div class="ex-info"><strong>${datestr(h.date)}</strong><small>${h.count} movements completed${h.skipped ? " · " + h.skipped + " skipped" : ""}</small></div><span class="tag">${fmt(h.seconds)}${h.partial ? " · partial" : ""}</span></div>`,
            )
            .join("")
        : '<div class="empty">Your first completed session will appear here.</div>'
    }<div class="section-head"><h3>Movement feedback</h3></div>${
      Object.entries(state.feedback).length
        ? Object.entries(state.feedback)
            .map(([id, v]) =>
              ex(id)
                ? `<div class="exercise"><div class="ex-info"><strong>${esc(ex(id).name)}</strong><small>${esc(v)} · last feedback</small></div><button class="round-btn" onclick="showDetail('${id}')">→</button></div>`
                : "",
            )
            .join("")
        : '<div class="empty">After a movement, tell Range whether it helped or needs replacing.</div>'
    }</section>
<section id="settings" class="pane ${tab === "settings" ? "active" : ""}"><div class="eyebrow">MAKE IT YOURS</div><h1 class="hello">Your preferences.</h1><div class="panel"><h3>Primary focus</h3><div class="control">${["Balanced", "Hips", "Hamstrings", "Calves", "Ankles", "Quads"].map((a) => `<button class="pill ${state.focus === a ? "selected" : ""}" onclick="setFocus('${a}')">${a}</button>`).join("")}</div><p class="muted">Your focus guides the 12-minute suggestions. Helpful movements are favored; uncomfortable ones are excluded. Your routine only changes when you choose to apply a suggestion.</p></div><div class="panel"><h3>Session cues</h3><label class="switch-row"><input type="checkbox" ${state.sound ? "checked" : ""} onchange="state.sound=this.checked;save()"> Gentle sound at the side switch and finish</label><p class="muted">Keep Range open during your session. Screen wake is requested where supported; background audio is not guaranteed.</p></div><div class="panel"><h3>Privacy & data</h3><p class="muted">All your choices and history are saved in this browser on this device. No account or server is required.</p><button class="btn" onclick="exportData()">↓ Export my data</button> <button class="outline" onclick="$('#import-file').click()">↑ Import</button><input type="file" id="import-file" accept="application/json" style="display:none" onchange="importData(event)"></div><div class="panel"><h3>About Range</h3><p class="muted">Range is a self-guided mobility tool, not a diagnosis or individualized medical prescription. Stop painful movements and seek professional advice for ongoing symptoms. Original illustrations show a schematic position; follow the written setup and movement cues. These guides have not been clinically reviewed.</p></div></section></div><nav class="nav">${[
      ["today", "⌂", "Today"],
      ["routine", "☷", "Routine"],
      ["library", "◈", "Library"],
      ["progress", "▥", "Progress"],
      ["settings", "⚙", "Settings"],
    ]
      .map(
        ([id, ico, title]) =>
          `<button aria-label="${title}" aria-current="${tab === id ? "page" : "false"}" class="${tab === id ? "active" : ""}" onclick="navigate('${id}')"><span>${uiIcon(id)}</span>${title}</button>`,
      )
      .join("")}</nav>${modal || ""}`;
  if (tab === "library") filterLibrary();
  const dialog = document.querySelector(".detail-view");
  document.querySelector(".shell").inert = !!dialog;
  document.querySelector(".nav").inert = !!dialog;
  document.body.style.overflow = dialog ? "hidden" : "";
  if (dialog) {
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute(
      "aria-label",
      dialog.querySelector("h2")?.textContent || "Movement details",
    );
    dialog.querySelector("button")?.focus({ preventScroll: true });
  }
}
function navigate(t) {
  tab = t;
  modal = null;
  render();
  scrollTo(0, 0);
}
function setFocus(f) {
  state.focus = f;
  save();
  render();
}
function libraryFilter(f) {
  window.libFilter = f;
  render();
}
function filterLibrary() {
  const q = (window.libQuery || "").toLowerCase(),
    f = window.libFilter || "All";
  const parent = $("#library-items");
  if (!parent) return;
  parent.innerHTML =
    db()
      .filter(
        (e) =>
          (f === "All" || e.area === f) &&
          (e.name.toLowerCase().includes(q) ||
            e.area.toLowerCase().includes(q)),
      )
      .map((e) => listItem(e.id))
      .join("") || '<div class="empty">No matches found.</div>';
}
function move(i, delta) {
  const j = i + delta;
  if (j < 0 || j >= state.routine.length) return;
  [state.routine[i], state.routine[j]] = [state.routine[j], state.routine[i]];
  save();
  render();
}
function removeEx(id) {
  state.routine = state.routine.filter((x) => x !== id);
  save();
  render();
}
function showDetail(id) {
  let e = ex(id);
  if (!e) return;
  modal = `<div class="session detail-view"><div class="top-line" style="color:#56715a"><span>EXERCISE DETAILS</span><button aria-label="Close exercise details" onclick="closeModal()">×</button></div><div class="demo" style="margin-top:24px">${e.kind === "Custom" ? "<p>Your custom movement<br>Follow your instructions below</p>" : movementGuide(id)}${e.kind === "Dynamic mobility" ? `<button class="guide-controls" aria-label="Pause movement illustration" onclick="toggleGuide(this)">${uiIcon("pause")}</button>` : ""}<small>Illustrated guide · read the movement cues below</small></div><div class="eyebrow">${esc(e.area)} · ${esc(e.kind)}</div><h2 style="margin:9px 0">${esc(e.name)}</h2><p class="sub">${esc(e.how)}</p><div class="panel"><strong>What you should feel</strong><p class="muted">${esc(e.feel || "A gentle, comfortable stretch or controlled muscular effort.")}</p><strong>Watch out for</strong><p class="muted">${esc(e.avoid || "Stop if the movement causes pain.")}</p></div>${e.kind === "Custom" ? `<button class="outline" onclick="customForm('${id}')">Edit this custom movement</button>` : ""}<label for="duration-field">Duration (total seconds${e.side ? ", shared between both sides" : ""})</label><input type="number" min="10" max="1800" step="10" id="duration-field" value="${secs(id)}"><div class="control" style="margin-top:16px"><button class="cta" onclick="saveDuration('${id}')">Save duration</button><button class="btn" onclick="showSwaps('${id}')">↻ Replace</button><button class="btn" onclick="toggleEx('${id}')">${state.routine.includes(id) ? "Remove from routine" : "+ Add to routine"}</button></div><div id="swaps"></div></div>`;
  render();
}
function closeModal() {
  modal = null;
  render();
}
function saveDuration(id) {
  let n = Number($("#duration-field").value);
  if (!Number.isFinite(n) || n < 10 || n > 1800) {
    toast("Choose 10–1800 seconds");
    return;
  }
  state.durations[id] = Math.round(n);
  save();
  toast("Duration saved");
  closeModal();
}
function exportData() {
  const b = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    }),
    u = URL.createObjectURL(b),
    a = document.createElement("a");
  a.href = u;
  a.download = "range-backup.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 2000);
} // Schema validation also migrates backups from the original MVP.
function validateData(data) {
  if (
    !data ||
    typeof data !== "object" ||
    !Array.isArray(data.routine) ||
    !Array.isArray(data.custom) ||
    !Array.isArray(data.history)
  )
    throw Error("Invalid backup");
  const areas = ["Hips", "Hamstrings", "Calves", "Ankles", "Quads"];
  const validSeconds = (n) => Number.isInteger(n) && n >= 10 && n <= 1800;
  if (
    data.custom.length > 200 ||
    data.custom.some(
      (e) =>
        !e ||
        !/^custom[\w-]{1,60}$/.test(e.id) ||
        typeof e.name !== "string" ||
        !e.name.trim() ||
        e.name.length > 90 ||
        typeof e.how !== "string" ||
        !e.how.trim() ||
        e.how.length > 700 ||
        !areas.includes(e.area) ||
        !validSeconds(e.seconds) ||
        typeof e.side !== "boolean",
    )
  )
    throw Error("Invalid custom movement");
  const custom = data.custom.map((e) => ({
    id: e.id,
    name: e.name,
    how: e.how,
    area: e.area,
    seconds: e.seconds,
    side: e.side,
    kind: "Custom",
    icon: "✦",
    feel: "Gentle, comfortable movement.",
    avoid: "Stop if painful.",
  }));
  const ids = new Set([...seed, ...custom].map((e) => e.id));
  if (ids.size !== seed.length + custom.length) throw Error("Duplicate IDs");
  const validRoutine = (r) =>
    Array.isArray(r) &&
    r.length <= 100 &&
    r.every((id) => ids.has(id)) &&
    new Set(r).size === r.length;
  if (!validRoutine(data.routine)) throw Error("Invalid routine");
  const durations = Object.fromEntries(
    Object.entries(data.durations || {}).filter(
      ([id, n]) => ids.has(id) && validSeconds(n),
    ),
  );
  const feedback = Object.fromEntries(
    Object.entries(data.feedback || {}).filter(
      ([id, v]) =>
        ids.has(id) &&
        ["Helpful", "Not feeling it", "Uncomfortable"].includes(v),
    ),
  );
  if (
    data.history.length > 10000 ||
    data.history.some(
      (h) =>
        !h ||
        !Number.isFinite(h.seconds) ||
        h.seconds < 0 ||
        h.seconds > 180000 ||
        !Number.isInteger(h.count) ||
        h.count < 0 ||
        h.count > 100 ||
        !Number.isFinite(Date.parse(h.date)),
    )
  )
    throw Error("Invalid history");
  const routines = data.routines || [];
  if (
    !Array.isArray(routines) ||
    routines.length > 100 ||
    routines.some(
      (r) =>
        !r ||
        typeof r.name !== "string" ||
        !r.name.trim() ||
        r.name.length > 60 ||
        !validRoutine(r.ids) ||
        !r.durations ||
        Object.entries(r.durations).some(
          ([id, n]) => !ids.has(id) || !validSeconds(n),
        ),
    )
  )
    throw Error("Invalid saved routines");
  const assessments = data.assessments || [];
  if (
    !Array.isArray(assessments) ||
    assessments.length > 10000 ||
    assessments.some(
      (a) =>
        !a ||
        !["ankle", "reach", "comfort"].includes(a.type) ||
        !Number.isFinite(a.value) ||
        a.value < 0 ||
        a.value > 100 ||
        !Number.isFinite(Date.parse(a.date)),
    )
  )
    throw Error("Invalid measurements");
  return {
    routine: [...data.routine],
    custom,
    durations,
    feedback,
    history: data.history.map((h) => ({
      date: h.date,
      count: h.count,
      seconds: h.seconds,
      skipped: Number.isInteger(h.skipped) && h.skipped >= 0 ? h.skipped : 0,
      partial: !!h.partial,
    })),
    focus: ["Balanced", ...areas].includes(data.focus)
      ? data.focus
      : "Balanced",
    sound: data.sound === true,
    routines: routines.map((r) => ({
      name: r.name,
      ids: [...r.ids],
      durations: { ...r.durations },
    })),
    assessments: assessments.map((a) => ({
      date: a.date,
      type: a.type,
      value: a.value,
    })),
  };
}
function discoveryCard() {
  const n = Object.values(state.feedback).filter((x) => x === "Helpful").length;
  return `<div class="discovery"><div class="discovery-icon">✧</div><div><strong>A practice that learns with you.</strong><p>${n ? `${n} helpful movement${n === 1 ? "" : "s"} discovered. ` : ""}Try a balanced 12-minute mix based on your focus and feedback.</p><button class="tiny-link" onclick="suggestRoutine()">Find my next routine <span>→</span></button></div></div>`;
}
function suggestRoutine() {
  const candidates = seed.filter(
    (e) => state.feedback[e.id] !== "Uncomfortable",
  );
  const score = (e) =>
    (state.feedback[e.id] === "Helpful"
      ? 5
      : state.feedback[e.id] === "Not feeling it"
        ? -5
        : 2) +
    (e.area === state.focus ? 4 : 0) +
    (state.routine.includes(e.id) ? 0 : 1);
  const sorted = [...candidates].sort(
    (a, b) => score(b) - score(a) || a.name.localeCompare(b.name),
  );
  const chosen = [];
  for (const area of ["Hips", "Hamstrings", "Calves", "Ankles", "Quads"]) {
    const e = sorted.find((e) => e.area === area);
    if (e) chosen.push(e);
  }
  for (const e of sorted) {
    if (chosen.length >= 8) break;
    if (!chosen.includes(e)) chosen.push(e);
  }
  window.suggestion = chosen.map((e) => e.id);
  modal = `<div class="session detail-view"><div class="top-line"><span>BUILT AROUND YOU</span><button aria-label="Close suggestion" onclick="closeModal()">×</button></div><h2>Your next 12 minutes.</h2><p class="sub">${esc(state.focus)} focus. Helpful movements move up the list; uncomfortable movements are left out. Review before applying.</p><div class="routine-list">${chosen.map((e) => `<div class="exercise"><div class="mini-icon">${movementGuide(e.id, true)}</div><div class="ex-info"><strong>${esc(e.name)}</strong><small>${esc(e.area)} · ${state.feedback[e.id] === "Helpful" ? "Helpful for you" : "Try & discover"}</small></div><span class="duration">1:30</span></div>`).join("")}</div><button class="cta wide" style="margin-top:20px" onclick="applySuggestion()">Use this routine · 12 min</button><p class="muted">Replaces your current sequence. Saved routines and history are kept.</p></div>`;
  render();
}
function applySuggestion() {
  if (!window.suggestion?.length) return;
  state.routine = [...window.suggestion];
  state.routine.forEach((id) => (state.durations[id] = 90));
  save();
  modal = null;
  tab = "routine";
  render();
  toast("Your new practice is ready");
}
function savedRoutinesUI() {
  return `<div class="section-head"><h3>Saved practices</h3></div><div class="panel"><label for="routine-name">Save your current sequence & durations</label><div class="row"><input id="routine-name" maxlength="60" placeholder="e.g. After a long run"><button class="btn" onclick="saveRoutine()">Save</button></div>${state.routines.map((r, i) => `<div class="settings-row"><div class="ex-info"><strong>${esc(r.name)}</strong><small>${r.ids.length} movements · ${fmt(r.ids.reduce((n, id) => n + (r.durations[id] || ex(id).seconds), 0))}</small></div><button class="outline" onclick="loadRoutine(${i})">Load</button><button class="round-btn" aria-label="Delete ${esc(r.name)}" onclick="deleteRoutine(${i})">×</button></div>`).join("")}</div>`;
}
function saveRoutine() {
  let name = $("#routine-name").value.trim();
  if (!name || !state.routine.length)
    return toast("Name your routine and add a movement first");
  if (state.routines.length >= 100)
    return toast("Delete an older saved practice first");
  state.routines.push({
    name,
    ids: [...state.routine],
    durations: Object.fromEntries(state.routine.map((id) => [id, secs(id)])),
  });
  save();
  render();
  toast("Practice saved");
}
function loadRoutine(i) {
  const r = state.routines[i];
  if (!r) return;
  state.routine = [...r.ids];
  Object.assign(state.durations, r.durations);
  save();
  render();
  toast("Practice loaded");
}
function deleteRoutine(i) {
  if (!confirm("Delete this saved practice?")) return;
  state.routines.splice(i, 1);
  save();
  render();
}
const measures = {
  ankle: {
    name: "Knee-to-wall distance",
    unit: "cm",
    max: 30,
    direction: 1,
    help: "Barefoot, face a wall. Keep your heel flat and move your knee to touch the wall over your toes. Measure the longest comfortable distance from big toe to wall. Use the same leg each time.",
  },
  reach: {
    name: "Seated reach gap",
    unit: "cm",
    max: 100,
    direction: -1,
    help: "Sit on the floor with legs long and knees soft. Hinge forward gently. Measure the gap from fingertips to toes; use 0 if you can touch them. Use the same setup each time. Never force the reach.",
  },
  comfort: {
    name: "Daily movement comfort",
    unit: "/ 10",
    max: 10,
    direction: 1,
    help: "Rate how comfortable everyday lower-body movement feels today. 0 means very uncomfortable; 10 means easy and comfortable. This is a subjective check-in, not a joint range measurement.",
  },
};
function assessmentUI() {
  return `<div class="section-head"><h3>More than a streak.</h3><button class="tiny-link" onclick="measurementForm()">+ Check in</button></div><p class="muted">Compare your own measurements under the same conditions. Progress can vary from day to day.</p>${Object.entries(
    measures,
  )
    .map(([key, m]) => {
      const a = state.assessments.filter((a) => a.type === key),
        first = a[0],
        last = a.at(-1);
      const delta =
        last && first ? Math.round((last.value - first.value) * 10) / 10 : 0;
      return `<div class="panel metric"><div class="row"><strong>${m.name}</strong><span class="tag">${m.unit}</span></div>${
        last
          ? `<div class="measurement-value">${last.value}<small> ${m.unit}</small></div><p class="muted">${a.length > 1 ? `${delta > 0 ? "+" : ""}${delta} ${m.unit} since first check-in · ${delta * m.direction > 0 ? "Improving" : delta === 0 ? "Steady" : "Below your baseline"}` : "Your baseline is set"} · ${datestr(last.date)}</p><div class="spark-bars" aria-label="Last 12 measurements">${a
              .slice(-12)
              .map(
                (v) =>
                  `<span style="height:${8 + Math.min(v.value / m.max, 1) * 48}px" title="${esc(datestr(v.date))}: ${v.value} ${m.unit}"></span>`,
              )
              .join("")}</div><details><summary>View measurements</summary>${a
              .slice()
              .reverse()
              .slice(0, 20)
              .map(
                (v) =>
                  `<div class="row muted"><span>${datestr(v.date)}</span><span>${v.value} ${m.unit} <button class="tiny-link" aria-label="Delete measurement" onclick="deleteMeasurement(${state.assessments.indexOf(v)})">×</button></span></div>`,
              )
              .join("")}</details>`
          : '<p class="muted">Take your first measurement to set a baseline.</p>'
      }</div>`;
    })
    .join("")}`;
}
function measurementForm(type = "ankle") {
  const m = measures[type];
  modal = `<div class="session detail-view"><div class="top-line"><span>YOUR MOBILITY CHECK-IN</span><button aria-label="Close check-in" onclick="closeModal()">×</button></div><h2>A small check.<br>A clearer picture.</h2><label for="measurement-type">What would you like to track?</label><select id="measurement-type" onchange="measurementForm(this.value)">${Object.entries(
    measures,
  )
    .map(
      ([k, v]) =>
        `<option value="${k}" ${type === k ? "selected" : ""}>${v.name}</option>`,
    )
    .join(
      "",
    )}</select><div class="panel"><h3>${m.name}</h3><p class="muted">${m.help}</p></div><label for="measurement-value">Today's value (${m.unit})</label><input id="measurement-value" type="number" inputmode="decimal" min="0" max="${m.max}" step="0.1" placeholder="0–${m.max}"><button class="cta wide" style="margin-top:20px" onclick="saveMeasurement()">Save check-in</button><p class="muted">Measure gently, without pain. These are personal trends, not a diagnosis.</p></div>`;
  render();
}
function saveMeasurement() {
  const type = $("#measurement-type").value,
    raw = $("#measurement-value").value,
    n = Number(raw);
  if (!raw || !Number.isFinite(n) || n < 0 || n > measures[type].max)
    return toast("Enter a value in the shown range");
  state.assessments.push({
    type,
    value: Math.round(n * 10) / 10,
    date: new Date().toISOString(),
  });
  save();
  modal = null;
  tab = "progress";
  render();
  toast("Check-in saved");
}
function deleteMeasurement(i) {
  if (!confirm("Delete this measurement?")) return;
  state.assessments.splice(i, 1);
  save();
  render();
}
// Preserve each slot's duration when substituting; never add duplicate exercises.
function swapEx(oldId, newId) {
  if (state.routine.includes(newId) && newId !== oldId)
    return toast("That movement is already in your routine");
  const duration = secs(oldId),
    i = state.routine.indexOf(oldId);
  if (i < 0) state.routine.push(newId);
  else state.routine[i] = newId;
  state.durations[newId] = duration;
  save();
  modal = null;
  render();
  toast("Movement replaced · duration kept");
}
function resetRoutine() {
  if (
    !confirm(
      "Restore the original 12-minute routine? Your saved practices and progress are kept.",
    )
  )
    return;
  state.routine = seed.slice(0, 8).map((e) => e.id);
  state.routine.forEach((id) => delete state.durations[id]);
  save();
  render();
}
function importData(event) {
  const f = event.target.files[0];
  if (!f) return;
  if (f.size > 2000000) return toast("Backup is too large (2 MB maximum)");
  f.text()
    .then((t) => {
      const next = validateData(JSON.parse(t));
      if (!confirm("Replace your current local data with this backup?")) return;
      state = next;
      save();
      modal = null;
      render();
      toast("Backup imported");
    })
    .catch(() => toast("Invalid backup. Your existing data is unchanged."));
}

let wakeLock = null,
  audioContext = null;
function cue() {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume();
    const osc = audioContext.createOscillator(),
      gain = audioContext.createGain();
    osc.frequency.value = 528;
    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.45,
    );
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + 0.45);
  } catch {}
}
async function requestWake() {
  try {
    if (current?.running && !wakeLock && navigator.wakeLock)
      wakeLock = await navigator.wakeLock.request("screen");
  } catch {}
}
function releaseWake() {
  wakeLock?.release().catch(() => {});
  wakeLock = null;
}
function startSession() {
  if (!state.routine.length) return toast("Add a movement first");
  current = {
    ids: [...state.routine],
    durations: state.routine.map(secs),
    index: 0,
    remaining: secs(state.routine[0]),
    total: secs(state.routine[0]),
    running: false,
    completedSeconds: 0,
    done: 0,
    skipped: 0,
    feedback: {},
    elapsed: 0,
    sideCued: false,
  };
  cue();
  sessionRender();
}
function stopTick() {
  clearInterval(tick);
  tick = null;
}
function syncTimer() {
  if (!current?.running) return;
  const now = Date.now(),
    elapsed = Math.min((now - current.lastTick) / 1000, current.remaining);
  current.remaining = Math.max(0, current.remaining - elapsed);
  current.elapsed += elapsed;
  current.lastTick = now;
  if (!current.sideCued && current.remaining <= current.total / 2) {
    current.sideCued = true;
    if (ex(current.ids[current.index]).side) cue();
  }
  if (current.remaining <= 0) {
    current.remaining = 0;
    current.running = false;
    stopTick();
    releaseWake();
    cue();
    sessionRender();
  } else updateClock();
}
function runTick() {
  stopTick();
  current.lastTick = Date.now();
  tick = setInterval(syncTimer, 200);
  requestWake();
}
function toggleTimer() {
  if (!current || current.remaining === 0) return;
  if (current.running) {
    syncTimer();
    current.running = false;
    stopTick();
    releaseWake();
  } else {
    current.running = true;
    runTick();
  }
  sessionRender();
}
function updateClock() {
  if (!current) return;
  const c = $("#clock");
  if (c) c.textContent = fmt(Math.ceil(current.remaining));
  const p = $("#progress-fill");
  if (p)
    p.style.width =
      (100 * (current.total - current.remaining)) / current.total + "%";
  const side = $("#side-cue");
  if (side) side.textContent = sideText();
}
function sideText() {
  const e = ex(current.ids[current.index]);
  if (current.remaining === 0) return "Movement complete · how did it feel?";
  return e.side
    ? current.remaining > current.total / 2
      ? "First side · switch halfway"
      : "Second side · switch sides now"
    : "Breathe slowly · stay in a comfortable range";
}
function sessionRender() {
  if (!current) return;
  const id = current.ids[current.index],
    e = ex(id);
  const previous = $("#session-overlay");
  const previousScroll =
    previous?.dataset.index === String(current.index) ? previous.scrollTop : 0;
  previous?.remove();
  const o = document.createElement("div");
  o.dataset.index = current.index;
  $("#app").inert = true;
  $("#app").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "hidden";
  o.id = "session-overlay";
  o.className = "session";
  o.setAttribute("role", "dialog");
  o.setAttribute("aria-modal", "true");
  o.setAttribute("aria-label", "Guided mobility session");
  o.innerHTML = `<div class="top-line"><span>YOUR DAILY PRACTICE · ${current.index + 1} / ${current.ids.length}</span><button onclick="exitSession()" aria-label="Exit session">×</button></div><div class="session-dots">${current.ids.map((_, i) => `<span class="${i <= current.index ? "filled" : ""}"></span>`).join("")}</div><h2>${esc(e.name)}</h2><div class="meta">${esc(e.area)} · ${esc(e.kind)}</div><div class="demo">${e.kind === "Custom" ? "<p>Custom movement<br>Follow your written instructions</p>" : movementGuide(id)}${e.kind === "Dynamic mobility" ? `<button class="guide-controls" aria-label="Pause movement illustration" onclick="toggleGuide(this)">${uiIcon("pause")}</button>` : ""}<small>${e.kind === "Custom" ? "Your personal movement" : "Illustrated position · follow the cues below"}</small></div><div class="progress-track"><div class="progress-fill" id="progress-fill" style="width:${(100 * (current.total - current.remaining)) / current.total}%"></div></div><div class="clock" id="clock" aria-label="Time remaining">${fmt(Math.ceil(current.remaining))}</div><p class="meta" id="side-cue" aria-live="polite">${sideText()}</p><div class="controls"><button onclick="skipExercise()">Skip ↷</button><button class="primary" onclick="toggleTimer()" ${current.remaining === 0 ? "disabled" : ""}>${current.remaining === 0 ? "✓ Done" : current.running ? "Pause" : current.remaining === current.total ? "Start" : "Resume"}</button><button onclick="advance()">${current.index === current.ids.length - 1 ? "Finish ✓" : "Next →"}</button></div><div class="instructions"><strong>01 · SET UP & MOVE</strong><p>${esc(e.how)}</p><strong>02 · WHAT TO FEEL</strong><p>${esc(e.feel)}</p><strong>KEEP IT GENTLE</strong><p>${esc(e.avoid)}</p></div><div class="eyebrow" style="margin:20px 0 10px">WHAT WORKED FOR YOU?</div><div class="feedbacks">${[
    ["Helpful", "♡ Helpful"],
    ["Not feeling it", "↔ Not feeling it"],
    ["Uncomfortable", "! Uncomfortable"],
  ]
    .map(
      ([v, l]) =>
        `<button class="${current.feedback[id] === v ? "chosen" : ""}" onclick="rate('${id}','${v}')">${l}</button>`,
    )
    .join(
      "",
    )}</div><button class="btn" style="margin:17px 0" onclick="sessionSwaps('${id}')">↻ Try a different movement</button><div id="session-swaps"></div><p class="meta">${current.index + 1 < current.ids.length ? "Up next: " + esc(ex(current.ids[current.index + 1]).name) : "Last movement · a little better than before."}</p>`;
  document.body.append(o);
  o.scrollTop = previousScroll;
}
function advance() {
  if (!current) return;
  if (current.running) syncTimer();
  if (
    current.remaining > 0 &&
    !confirm(
      "Finish this movement early? Only time practiced will be recorded.",
    )
  )
    return;
  stopTick();
  current.running = false;
  if (current.elapsed >= 1) current.done++;
  current.completedSeconds += current.elapsed;
  nextMovement();
}
function nextMovement() {
  releaseWake();
  current.index++;
  if (current.index >= current.ids.length) return finishSession();
  current.total = current.durations[current.index];
  current.remaining = current.total;
  current.elapsed = 0;
  current.sideCued = false;
  sessionRender();
}
function skipExercise() {
  if (!current) return;
  if (current.running) syncTimer();
  stopTick();
  current.running = false;
  current.completedSeconds += current.elapsed;
  current.skipped++;
  nextMovement();
}
function rate(id, value) {
  if (!current) return;
  if (current.running) syncTimer();
  current.feedback[id] = value;
  state.feedback[id] = value;
  save();
  if (value === "Uncomfortable") {
    current.running = false;
    stopTick();
    releaseWake();
  }
  sessionRender();
  if (value === "Uncomfortable") sessionSwaps(id);
}
function sessionSwaps(id) {
  if (current.running) syncTimer();
  current.running = false;
  stopTick();
  releaseWake();
  sessionRender();
  const e = ex(id),
    alts = db().filter(
      (x) =>
        x.area === e.area &&
        x.id !== id &&
        !current.ids.includes(x.id) &&
        state.feedback[x.id] !== "Uncomfortable",
    );
  $("#session-swaps").innerHTML =
    `<div class="instructions"><strong>TRY ANOTHER ${esc(e.area.toUpperCase())} MOVEMENT</strong><p>Timer paused. Stop any movement that hurts.</p>${alts.length ? alts.map((a) => `<button class="outline" style="display:block;width:100%;margin:8px 0" onclick="sessionSwap('${id}','${a.id}')">${esc(a.name)} →</button>`).join("") : "<p>No alternatives left in this area. Skip this movement and explore the library after your session.</p>"}</div>`;
  $("#session-swaps").scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function sessionSwap(id, newId) {
  if (!current || current.ids.includes(newId)) return;
  stopTick();
  current.running = false;
  current.completedSeconds += current.elapsed;
  current.elapsed = 0;
  current.ids[current.index] = newId;
  state.routine[state.routine.indexOf(id)] = newId;
  state.durations[newId] = current.total;
  save();
  current.remaining = current.total;
  current.sideCued = false;
  sessionRender();
  toast("Replacement ready · press Start");
}
function finishSession(partial = false) {
  stopTick();
  releaseWake();
  const seconds = Math.round(current.completedSeconds),
    done = current.done,
    skipped = current.skipped;
  if (seconds > 0)
    state.history.push({
      date: new Date().toISOString(),
      count: done,
      seconds,
      skipped,
      partial,
    });
  save();
  current = null;
  $("#app").inert = false;
  $("#app").removeAttribute("aria-hidden");
  $("#session-overlay")?.remove();
  tab = "progress";
  render();
  toast(
    seconds > 0
      ? "Practice saved. A little range, every day."
      : "No practice time recorded",
  );
}
function exitSession() {
  if (!current) return;
  if (current.running) syncTimer();
  if (!confirm("End this session? Time already practiced will be saved."))
    return;
  current.completedSeconds += current.elapsed;
  finishSession(true);
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && current) {
    syncTimer();
    requestWake();
  }
});
window.addEventListener("beforeunload", (event) => {
  if (current) {
    event.preventDefault();
    event.returnValue = "";
  }
});
function toggleEx(id) {
  if (state.routine.includes(id))
    state.routine = state.routine.filter((x) => x !== id);
  else state.routine.push(id);
  save();
  modal = null;
  render();
  toast("Routine updated");
}
function showSwaps(id, area) {
  const e = ex(id);
  area = area || e.area;
  const choices = db().filter(
    (x) =>
      x.id !== id &&
      !state.routine.includes(x.id) &&
      (area === "All" || x.area === area),
  );
  $("#swaps").innerHTML =
    `<div class="panel"><h3>Find a better fit.</h3><label for="swap-area">Explore alternatives</label><select id="swap-area" onchange="showSwaps('${id}',this.value)">${["All", "Hips", "Hamstrings", "Calves", "Ankles", "Quads"].map((a) => `<option ${a === area ? "selected" : ""}>${a}</option>`).join("")}</select>${choices.map((a) => `<div class="replacement"><div class="row"><div class="mini-icon">${movementGuide(a.id, true)}</div><h4>${esc(a.name)}</h4></div><p class="muted">${esc(a.how)}</p><button class="outline" onclick="swapEx('${id}','${a.id}')">Choose this stretch</button></div>`).join("") || '<p class="muted">No unused alternatives in this area. Try All.</p>'}</div>`;
  $("#swaps").scrollIntoView({ behavior: "smooth", block: "start" });
}
function customForm(editId) {
  const e = editId ? ex(editId) : null;
  window.editingCustom = e?.kind === "Custom" ? editId : null;
  modal = `<div class="session detail-view"><div class="top-line"><span>YOUR OWN MOVEMENT</span><button aria-label="Close custom movement" onclick="closeModal()">×</button></div><h2>${e ? "Refine your movement." : "Make it your own."}</h2><label for="custom-name">Name</label><input id="custom-name" maxlength="90" value="${esc(e?.name || "")}" placeholder="e.g. My gentle hip stretch"><label for="custom-area">Focus area</label><select id="custom-area">${["Hips", "Hamstrings", "Calves", "Ankles", "Quads"].map((a) => `<option ${a === e?.area ? "selected" : ""}>${a}</option>`).join("")}</select><label for="custom-how">Your movement instructions</label><textarea id="custom-how" rows="5" maxlength="700">${esc(e?.how || "")}</textarea><label for="custom-seconds">Total duration (seconds)</label><input id="custom-seconds" inputmode="numeric" type="number" min="10" max="1800" value="${e ? secs(e.id) : 90}"><label class="switch-row"><input type="checkbox" id="custom-side" ${e?.side ? "checked" : ""}> Switch sides halfway</label><button class="cta wide" style="margin-top:20px" onclick="saveCustom()">${e ? "Save changes" : "Save to library & routine"}</button></div>`;
  render();
}
function saveCustom() {
  const name = $("#custom-name").value.trim(),
    how = $("#custom-how").value.trim(),
    seconds = Number($("#custom-seconds").value);
  if (
    !name ||
    !how ||
    !Number.isFinite(seconds) ||
    seconds < 10 ||
    seconds > 1800
  )
    return toast("Enter a name, instructions, and 10–1800 seconds");
  const id = window.editingCustom || "custom" + Date.now(),
    item = {
      id,
      name,
      how,
      area: $("#custom-area").value,
      seconds: Math.round(seconds),
      side: $("#custom-side").checked,
      kind: "Custom",
      icon: "✦",
      feel: "Comfortable, gentle movement.",
      avoid: "Stop if painful.",
    };
  if (window.editingCustom)
    state.custom[state.custom.findIndex((x) => x.id === id)] = item;
  else {
    if (state.custom.length >= 200)
      return toast("Custom library limit reached");
    state.custom.push(item);
    state.routine.push(id);
  }
  state.durations[id] = item.seconds;
  save();
  window.editingCustom = null;
  closeModal();
  toast("Custom movement saved");
}
function toggleGuide(button) {
  const svg = button.closest(".demo").querySelector("svg");
  if (!svg) return;
  if (svg.animationsPaused()) {
    svg.unpauseAnimations();
    button.innerHTML = uiIcon("pause");
    button.setAttribute("aria-label", "Pause movement illustration");
  } else {
    svg.pauseAnimations();
    button.innerHTML = uiIcon("play");
    button.setAttribute("aria-label", "Play movement illustration");
  }
}
document.addEventListener("keydown", (event) => {
  const dialog =
    document.querySelector("#session-overlay") ||
    document.querySelector(".detail-view");
  if (!dialog) return;
  if (event.key === "Escape") {
    if (current) exitSession();
    else closeModal();
  }
  if (event.key !== "Tab") return;
  const controls = [
    ...dialog.querySelectorAll(
      "button:not(:disabled), input, select, textarea, summary",
    ),
  ].filter((e) => e.getClientRects().length);
  const first = controls[0],
    last = controls.at(-1);
  if (
    event.shiftKey &&
    (document.activeElement === first ||
      !dialog.contains(document.activeElement))
  ) {
    event.preventDefault();
    last?.focus();
  } else if (
    !event.shiftKey &&
    (document.activeElement === last ||
      !dialog.contains(document.activeElement))
  ) {
    event.preventDefault();
    first?.focus();
  }
});
if ("serviceWorker" in navigator)
  navigator.serviceWorker.register("./sw.js").catch(() => {});
render();
