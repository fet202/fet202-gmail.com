const qawolf = require("qawolf");
const selectors = require("./selectors/tMapexample.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('tMapexample', async () => {
  await page.goto("http://t-map-systest2.t-systems.ru/coverage_checker");
  await page.click(selectors["0_suchen_input"]);
  await page.type(selectors["1_suchen_input"], "berlin");
  await page.click(selectors["2_search_result_0_li"]);
  await page.click(selectors["3_li"]);
  await page.click(selectors["4_input"]);
  await page.click(selectors["5_input"]);
  await page.click(selectors["6_input"]);
  await page.click(selectors["7_input"]);
  await page.click(selectors["8_div"]);
  await page.click(selectors["9_input"]);
  await page.click(selectors["10_input"]);
  await page.click(selectors["11_input"]);
  await page.click(selectors["12_input"]);
  await page.click(selectors["13_input"]);
  await page.click(selectors["14_input"]);
  await page.click(selectors["15_li"]);
  await page.click(selectors["16_input"]);
  await page.click(selectors["17_input"]);
  await page.click(selectors["18_input"]);
  await page.click(selectors["19_input"]);
  await page.click(selectors["20_input"]);
  await page.click(selectors["21_input"]);
  await page.click(selectors["22_input"]);
  await page.click(selectors["23_input"]);
  await page.click(selectors["24_div"]);
  await page.click(selectors["25_a"]);
  await page.click(selectors["26_button"]);
  await page.click(selectors["27_button"]);
  await page.click(selectors["28_button"]);
});