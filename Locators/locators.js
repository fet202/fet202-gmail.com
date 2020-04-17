const locators = {
    //Common
    search_field: "#search-query",
    first_search_result: "#search-result-0",
    clear_button: '#app > div > section > div.tmap__absolute > section > div > button',
    filled_search_field: '.tmap__panel #search-query',
    search_result_0: '#search-result-0',
    search_result_1: '#search-result-1',
    search_result_2: '#search-result-2',
    search_result_3: '#search-result-3',
    search_result_4: '#search-result-4',

    layerGroupHeaderMobile: '',
    second_checkbox_inter: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(2) > label > span',
    first_checkbox_inter: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(1) > label > span',
    third_checkbox_inter: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(3) > label > span',
    fourth_checkbox_inter: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(4) > label > span',
    baseLayersButton: '#base-map-button',
    baseLayersDM: '#base-map-list-0',
    baseLayersOSM: '#base-map-list-1',
    baseLayersTop: '#base-map-list-2',
    baseLayersSat: '#base-map-list-1',
    mobile_carousel: 'tmap__carousel',
    textResult : '#app > div > section > div.tmap__panel.tmap__panel-left > div.tmap__sidebar > div.tmap__base-header.location-info > div.tmap__base-header-headline.Headline-Standart-text-Bold',
    //Coverage_checker
    mobileCheckbox2G: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(1) > label > input[type:checkbox]',
    mobileCheckbox3G: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(2) > label > input[type:checkbox]',
    mobileCheckbox4G: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(3) > label > input[type:checkbox]',
    mobileCheckbox5G: '#app > section > div.tmap__panel.tmap__panel-right > div > div.tmap__panel-child-body > div > div > div:nth-child(2) > div > div > ul > li:nth-child(4) > label > input[type:checkbox]',
    //DFMG
    marker: ".leaflet-marker-icon tmap__him-pin leaflet-zoom-animated leaflet-interactive",
    broadcast_tower_point: '#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > div:nth-child(18)',


    //MobileIot
};
module.exports = locators;

