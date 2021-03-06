const locator = require ('../Locators/locators.js');
const helpers = require('../Helpers/helpers');
//const timeout = process.env.SLOWMO ? 300 : 250;







beforeAll(async () => {
    jest.setTimeout(20000);
    await page.goto(CC_URL, {waitUntil: 'domcontentloaded'});
    //await page.setViewport({width: 1366, height: 768});
});


afterEach(async () => {

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
        let GetInputResult =  helpers.GetInputResult;
        const input_result = await GetInputResult();
        expect(input_result).toBe('53111 Bonn, Bonngasse 11, Nordrhein-Westfalen');
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

        let GetInputResult =  helpers.GetInputResult;
        const input_result = await GetInputResult();
        expect(input_result).toBe('')

    });

    //todo добавить списаок всех селекторов включая мобильную весрию

    test('navigation by narrows working circled', async ()=>{
        // пройти через 5 к перовому варианту
        await page.waitForSelector(locator.search_field);
        await page.click(locator.search_field);
        await page.type(locator.search_field, 'minet');
        await page.waitForSelector(locator.first_search_result, {waitUntil: 'networkidle0'});
        for(let i = 0; i < 6; i++) {

            await page.keyboard.press('ArrowDown');
        }
        await page.keyboard.press('Enter');
        let GetInputResult =  helpers.GetInputResult;
        const input_result = await GetInputResult();
        expect(input_result).toBe('61137 Schöneck, Minetsgasse 6, Hessen')









    });

    // todo написать функцию getAttributeResult (selector, property)
    test('not valid insert', async ()=>{

        await helpers.City_search('@@@@@')
        await page.waitForSelector(locator.textResult)

        // const elementHandle1 = await page.$(locator.textResult);
        // const input_field_handle1 = await elementHandle1.getProperty('innerText');
        // const slec = await input_field_handle1.jsonValue();
        // await console.log(slec);
        // expect(slec).toBe('@@@@@')

        let sel_handle = await helpers.getAttributeText(locator.textResult,'innerText');
        // let getAttributeText  = helpers.getAttributeText(locator.textResult,'innerText');
        // const sel_handle = getAttributeText;

        console.log(sel_handle)
        expect(sel_handle).toBe('@@@@@')







    });
    test('max limit for input', async ()=>{




    });

    test('navigation via enter', async ()=>{




    });

    test('gps button works', async ()=>{




    });

    test('layer controller opens Mobile', async ()=>{




    });

    test('layer controller opens Fixed line', async ()=>{




    });

    test('checkboxes turn on/off Mobil', async ()=>{




    });

    test('heckboxes turn on/off Fixed line', async ()=>{




    });

    test('zoom in/ zoom out button clickable', async ()=>{




    });

    test('base layer, print, faq buttons present', async ()=>{




    });

    test('base layers switches to OSM ', async ()=>{




    });

    test('base layers switches to Topographic ', async ()=>{




    });

    test('base layers switches to Satelite ', async ()=>{




    });

    test('base layers switches to Deutchekarte ', async ()=>{




    });
    test('links in faq lead to correct pages', async ()=>{






    });

    test('faq text correct', async ()=>{




    });

    test('faq closes', async ()=>{



    });

    test('', async ()=>{




    });

    test('', async ()=>{




    });

    test('', async ()=>{




    });

    test('', async ()=>{




    });

    test('', async ()=>{




    });

    test('', async ()=>{




    });


    test('close session', async ()=>{
        await browser.close();
        console.log('Session closed after last test')


    })






});