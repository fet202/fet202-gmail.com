const locator = require ('../Locators/locators.js');
const helpers = require('../Helpers/helpers');
const timeout = process.env.SLOWMO ? 300 : 250;








beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto(CC_URL, {waitUntil: 'domcontentloaded'});
    //await page.setViewport({width: 1366, height: 768});
    afterEach(async () => {
        try {
            await page.waitForSelector(locator.clear_button);
            await page.click(locator.clear_button)
        } catch (e) {
        }
    });
});

describe('Portal Coverage_checker tests', () => {
    test('Screenshot with filled address', async () => {
        await helpers.bla();
        await helpers.City_search('Berlin');
        //const loadbarStyle = await page.evaluate((() => document.querySelector(".tmap__loader").className))[0].getAttribute('style');
        await page.waitFor(2000);
        await page.screenshot({
            path: './tests/screen/screen.jpeg',

            fullpage: true,
            type: 'jpeg'
        }, timeout);
    });
    test('autocomplete value in the input field', async () => {
        await helpers.City_search('Bonn');
        const elementHandle = await page.$(locator.search_field);
        const input_field_handle = await elementHandle.getProperty('value');
        const input_result = await input_field_handle.jsonValue();
        expect(input_result).toBe('53111 Bonn, Bonngasse 11, Nordrhein-Westfalen')
    });

    });