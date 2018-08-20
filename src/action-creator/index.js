export function loadAllCurrencies() {
    return {
        type: 'LOAD_ALL_CURRENCIES',
        callAPI: 'http://www.nbrb.by/API/ExRates/Currencies'
    }
}

export function loadCurrencyById(id) {
    return {
        type: 'LOAD_CURRENCY_BY_ID',
        callAPI: 'https://cors-anywhere.herokuapp.com/http://www.nbrb.by/API/ExRates/Rates/'+id
    }
}
export function loadLocationSearch(str) {
    return {
        type: 'LOAD_LOCATION_SEARCH',
        callAPI: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query='+str
    }
}
export function loadWeatherLocation(id) {
    return {
        type: 'LOAD_WEATHER_LOCATION',
        callAPI: `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
    }
}