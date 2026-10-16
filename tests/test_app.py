"""End-to-end checks against a running Range server (no app test dependencies)."""
import json
import os
import unittest
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

URL = os.environ.get('RANGE_TEST_URL', 'http://127.0.0.1:8000')

class RangeTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.pw = sync_playwright().start()
        executable = os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium')
        kwargs = {'executable_path': executable} if Path(executable).is_file() else {}
        cls.browser = cls.pw.chromium.launch(headless=True, args=['--no-sandbox'], **kwargs)

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.pw.stop()

    def setUp(self):
        self.context = self.browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
        self.page = self.context.new_page()
        self.errors = []
        self.page.on('pageerror', lambda e: self.errors.append(str(e)))
        self.page.on('dialog', lambda dialog: dialog.accept())
        self.page.goto(URL)
        self.page.wait_for_function('typeof state !== "undefined"')

    def tearDown(self):
        self.context.close()
        self.assertEqual(self.errors, [])

    def nav(self, name):
        self.page.locator('.nav').get_by_role('button', name=name, exact=True).click()

    def test_starter_and_thirty_distinct_guides(self):
        self.assertEqual(self.page.evaluate('state.routine.reduce((n,id)=>n+secs(id),0)'), 720)
        self.nav('Library')
        expect(self.page.locator('#library-items .exercise')).to_have_count(30)
        self.assertEqual(self.page.evaluate('new Set(seed.map(e=>movementGuide(e.id))).size'), 30)
        for area in ['Hips','Hamstrings','Calves','Ankles','Quads']:
            self.page.locator('#filters').get_by_role('button',name=area,exact=True).click()
            self.assertGreater(self.page.locator('#library-items .exercise').count(),0)
        self.page.locator('#filters').get_by_role('button',name='All',exact=True).click()
        self.page.get_by_role('textbox',name='Search movements').fill('ankle')
        self.assertGreater(self.page.locator('#library-items .exercise').count(),0)
        self.page.get_by_role('textbox',name='Search movements').fill('zzzz')
        expect(self.page.locator('#library-items')).to_contain_text('No matches')

    def test_edit_duration_and_persist(self):
        self.page.locator('#today .routine-list .round-btn').first.click()
        self.page.locator('#duration-field').fill('45')
        self.page.get_by_role('button',name='Save duration',exact=True).click()
        self.page.reload()
        self.assertEqual(self.page.evaluate('secs("hip90")'),45)

    def test_swap_keeps_duration_and_no_duplicates(self):
        self.page.locator('#today .routine-list .round-btn').first.click()
        self.page.get_by_role('button',name='Replace',exact=False).click()
        self.page.locator('#swap-area').select_option('All')
        self.page.locator('#swaps').get_by_role('button',name='Choose this stretch').first.click()
        self.assertNotEqual(self.page.evaluate('state.routine[0]'),'hip90')
        self.assertEqual(self.page.evaluate('secs(state.routine[0])'),90)
        self.assertTrue(self.page.evaluate('new Set(state.routine).size===state.routine.length'))

    def test_saved_practice_reorder_load_and_delete(self):
        self.nav('Routine')
        self.page.locator('#routine-name').fill('Evening unwind')
        self.page.get_by_role('button',name='Save',exact=True).click()
        self.page.locator('#routine .exercise .round-btn').nth(3).click()
        self.assertNotEqual(self.page.evaluate('state.routine[0]'),'hip90')
        self.page.get_by_role('button',name='Load',exact=True).click()
        self.assertEqual(self.page.evaluate('state.routine[0]'),'hip90')
        self.page.get_by_role('button',name='Delete Evening unwind').click()
        self.assertEqual(self.page.evaluate('state.routines.length'),0)

    def test_custom_create_edit_and_reload(self):
        self.nav('Library')
        self.page.get_by_role('button',name='Create a custom stretch').click()
        self.page.locator('#custom-name').fill('Gentle towel stretch')
        self.page.locator('#custom-how').fill('Use a towel and move gently.')
        self.page.locator('#custom-seconds').fill('75')
        self.page.get_by_role('button',name='Save to library & routine').click()
        self.assertEqual(self.page.evaluate('state.custom.length'),1)
        self.page.locator('#library-items .exercise').last.locator('button').click()
        self.page.get_by_role('button',name='Edit this custom movement').click()
        self.page.locator('#custom-name').fill('My gentle stretch')
        self.page.get_by_role('button',name='Save changes').click()
        self.page.reload()
        self.assertEqual(self.page.evaluate('state.custom[0].name'),'My gentle stretch')
        self.assertEqual(self.page.evaluate('secs(state.custom[0].id)'),75)

    def test_personalization_uses_focus_feedback_and_explicit_apply(self):
        self.page.evaluate("state.feedback.hip90='Uncomfortable';state.feedback.figure4='Helpful';state.focus='Hips';save()")
        original=self.page.evaluate('state.routine')
        self.page.get_by_role('button',name='Find my next routine').click()
        self.assertEqual(self.page.evaluate('state.routine'),original)
        self.assertNotIn('hip90', self.page.evaluate('window.suggestion'))
        self.assertIn('figure4', self.page.evaluate('window.suggestion'))
        self.page.get_by_role('button',name='Use this routine').click()
        self.assertEqual(self.page.evaluate('state.routine.reduce((n,id)=>n+secs(id),0)'),720)
        self.assertEqual(self.page.evaluate('new Set(state.routine.map(id=>ex(id).area)).size'),5)

    def test_complete_twelve_minute_session_and_feedback(self):
        self.page.clock.install()
        self.page.get_by_role('button',name='Begin session').click()
        for i,seconds in enumerate([90,90,120,90,90,90,60,90]):
            self.page.get_by_role('button',name='Start',exact=False).click()
            self.page.clock.fast_forward(seconds*1000)
            expect(self.page.locator('#clock')).to_have_text('0:00')
            expect(self.page.locator('#side-cue')).to_contain_text('Movement complete')
            self.page.get_by_role('button',name='Helpful',exact=False).first.click()
            self.page.locator('#session-overlay').get_by_role('button',name='Finish' if i==7 else 'Next',exact=False).click()
        history=self.page.evaluate('state.history')
        self.assertEqual(len(history),1)
        self.assertEqual(history[0]['count'],8)
        self.assertEqual(history[0]['seconds'],720)
        self.assertEqual(self.page.evaluate('Object.keys(state.feedback).length'),8)

    def test_pause_resume_side_switch_and_exit(self):
        self.page.clock.install()
        self.page.get_by_role('button',name='Begin session').click()
        self.page.get_by_role('button',name='Skip',exact=False).click()
        self.page.get_by_role('button',name='Start',exact=False).click()
        self.page.clock.fast_forward(46000)
        expect(self.page.locator('#side-cue')).to_contain_text('Second side')
        self.page.get_by_role('button',name='Pause',exact=False).filter(has_text='Pause').click()
        remaining=self.page.locator('#clock').inner_text()
        self.page.clock.fast_forward(15000)
        expect(self.page.locator('#clock')).to_have_text(remaining)
        self.page.get_by_role('button',name='Resume',exact=False).click()
        self.page.clock.fast_forward(4000)
        self.page.get_by_role('button',name='Exit session',exact=True).click()
        h=self.page.evaluate('state.history[0]')
        self.assertEqual(h['seconds'],50)
        self.assertEqual(h['count'],0)
        self.assertEqual(h['skipped'],1)
        self.assertTrue(h['partial'])

    def test_all_skipped_is_not_a_completed_session(self):
        self.page.get_by_role('button',name='Begin session').click()
        for _ in range(8):self.page.get_by_role('button',name='Skip',exact=False).click()
        self.assertEqual(self.page.evaluate('state.history.length'),0)

    def test_uncomfortable_pauses_and_offers_session_swap(self):
        self.page.clock.install()
        self.page.get_by_role('button',name='Begin session').click()
        self.page.get_by_role('button',name='Start',exact=False).click()
        self.page.clock.fast_forward(5000)
        self.page.get_by_role('button',name='Uncomfortable',exact=False).click()
        self.assertFalse(self.page.evaluate('current.running'))
        self.page.locator('#session-swaps button').first.click()
        self.assertNotEqual(self.page.evaluate('current.ids[0]'),'hip90')
        expect(self.page.locator('#clock')).to_have_text('1:30')
        self.assertEqual(self.page.evaluate('state.feedback.hip90'),'Uncomfortable')

    def test_measurements_and_baseline_persist(self):
        self.nav('Progress')
        for value in ['6','8']:
            self.page.get_by_role('button',name='Check in').click()
            self.page.locator('#measurement-value').fill(value)
            self.page.get_by_role('button',name='Save check-in').click()
        expect(self.page.locator('.metric').first).to_contain_text('+2 cm since first check-in')
        self.page.reload()
        self.nav('Progress')
        expect(self.page.locator('.metric').first).to_contain_text('Improving')
        self.assertEqual(self.page.evaluate('state.assessments.length'),2)

    def test_export_import_and_invalid_backup(self):
        self.nav('Settings')
        with self.page.expect_download() as d:
            self.page.get_by_role('button',name='Export my data').click()
        path=d.value.path()
        backup=json.loads(Path(path).read_text())
        self.assertEqual(len(backup['routine']),8)
        self.page.locator('#import-file').set_input_files({'name':'bad.json','mimeType':'application/json','buffer':json.dumps({**backup,'routine':['not-a-real-id']}).encode()})
        expect(self.page.locator('.toast')).to_contain_text('Invalid backup')
        self.assertEqual(len(self.page.evaluate('state.routine')),8)
        backup['durations']['hip90']=65
        self.page.locator('#import-file').set_input_files({'name':'backup.json','mimeType':'application/json','buffer':json.dumps(backup).encode()})
        expect(self.page.locator('.toast')).to_contain_text('Backup imported')
        self.assertEqual(self.page.evaluate('secs("hip90")'),65)

    def test_offline_reload_and_assets(self):
        self.page.evaluate('navigator.serviceWorker.ready')
        self.page.wait_for_function('navigator.serviceWorker.controller!==null')
        self.context.set_offline(True)
        self.page.reload()
        self.nav('Library')
        expect(self.page.locator('#library-items .exercise')).to_have_count(30)
        self.assertTrue(self.page.evaluate('!!document.styleSheets.length'))
        self.context.set_offline(False)

    def test_mobile_and_desktop_layout(self):
        for width in [320,390,430,1280]:
            self.page.set_viewport_size({'width':width,'height':844})
            for tab in ['Today','Routine','Library','Progress','Settings']:
                self.nav(tab)
                self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'),f'{tab}: {width}')
        self.page.set_viewport_size({'width':390,'height':844})
        self.nav('Today')
        self.page.screenshot(path='/tmp/range-today-tested.png',full_page=True)
        self.page.get_by_role('button',name='Begin session').click()
        self.page.screenshot(path='/tmp/range-session-tested.png',full_page=True)

if __name__ == '__main__':unittest.main(verbosity=2)
