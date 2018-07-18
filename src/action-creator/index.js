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