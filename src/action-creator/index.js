export function loadAllCurrencies() {
    return {
        type: 'LOAD_ALL_CURRENCIES',
        callAPI: 'http://www.nbrb.by/API/ExRates/Currencies'
    }
}