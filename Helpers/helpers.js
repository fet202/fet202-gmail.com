const locator = require ('../Locators/locators.js');


  let delay = function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    };


    let checkboxCheks = async function checkboxCheks(selector) {
        checkboxStatus = await page.$eval(selector, input => {
            return input.checked
        }, timeout);
        expect(checkboxStatus).toBe(true)
    };

   let checkboxCheks_negative =  async function checkboxCheks_negative(selector) {
        checkboxStatus = await page.$eval(selector, input => {
            return input.checked
        }, timeout);
        expect(checkboxStatus).toBe(false)
    };

   let City_search = async function City_search(city_name) {
        await page.waitForSelector(locator.search_field);
        await page.click(locator.search_field);
        await page.type(locator.search_field, city_name);
        await page.waitForSelector(locator.first_search_result);
        search_result = await page.$eval('#search-result-0', el => el.innerText);
        await console.log(search_result);
        await page.waitFor(1000);
        await page.click(locator.first_search_result, {waitUntil: 'networkidle0'});
    };
    let bla = async function bla (){console.log("Ebaaaaa")};
    let clearInputField = async function clearInputField(){
        await page.waitForSelector(locator.clear_button);
        await page.click(locator.clear_button)
    };


module.exports = {
    City_search ,
    bla : bla,
    delay : delay,
    checkboxCheck : checkboxCheks,
    checkboxCheck_negative : checkboxCheks_negative,
    clearInputField : clearInputField
    // clickMiddleMap : clickMiddleMap,
    // openLayersControllerMobile :openLayersControllerMobile ,
    // closeLayersControllerMobile : closeLayersControllerMobile,


};