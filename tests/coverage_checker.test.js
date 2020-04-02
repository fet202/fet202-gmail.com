const locator = require ('../Locators/locators.js');
const helpers = require('../Helpers/helpers');
const timeout = process.env.SLOWMO ? 300 : 250;








beforeAll(async () => {
    jest.setTimeout(20000);
    await page.goto(CC_URL, {waitUntil: 'domcontentloaded'});
    //await page.setViewport({width: 1366, height: 768});
});


afterEach(async () => {
    //     try {
    //         await page.waitForSelector(locator.clear_button);
    //         await page.click(locator.clear_button)
    //     } catch (e) {
    //     }
    },);

describe('Portal Coverage_checker tests', () => {
    test('Screenshot with filled address', async () => {
        await helpers.City_search('Berlin');
        await page.waitFor(2000);
        await page.screenshot({
            path: './tests/screen/screen.jpeg',

            fullpage: true,
            type: 'jpeg'
        });
        await helpers.clearInputField()
    });
    test('autocomplete value in the input field', async () => {
        await helpers.City_search('Bonn');
        const elementHandle = await page.$(locator.search_field);
        const input_field_handle = await elementHandle.getProperty('value');
        const input_result = await input_field_handle.jsonValue();
        expect(input_result).toBe('53111 Bonn, Bonngasse 11, Nordrhein-Westfalen')
        await helpers.clearInputField()

    });

    test('Input field clearing', async () => {
        await page.waitForSelector(locator.search_field);
        await  console.log('1');
        await page.type(locator.search_field, 'Bonn');
        await  console.log('2');

        await page.waitForSelector(locator.clear_button);
        await  console.log('3');

        await page.click(locator.clear_button);
        await  console.log('4');

        const elementHandle = await page.$(locator.search_field);
        const input_field_handle = await elementHandle.getProperty('value');
        const input_result = await input_field_handle.jsonValue();
        expect(input_result).toBe('')

    });

    test('close session', async ()=>{
        await browser.close();
        console.log('Session closed after last test')


    })






});