module.exports = {
    preset: "jest-playwright-preset",
    globals: {
        DFMG_URL: "http://t-map-systest2.t-systems.ru/dfmg", 
        NBIOT_URL: "http://t-map-systest2.t-systems.ru/nbiot", 
        CC_URL : "http://t-map-systest2.t-systems.ru/coverage_checker"
    },  

    testMatch: [
            "**/tests/**/*.test.js" 
        ], 
    verbose: true 

    };
