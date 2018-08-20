import { LOAD_ALL_CURRENCIES, START, SUCCESS } from './../constants'

const defaultState = {
    loading: false,
    loaded: false,
    listCurrencies: []
}

export default (state = defaultState, action) => {
    const {type, response} = action;
    switch(type){
        case LOAD_ALL_CURRENCIES + START: 
            state.loading = true
            state.loaded = false
            return Object.create(state)
        case LOAD_ALL_CURRENCIES + SUCCESS:
            state.loading = false
            state.loaded = true
            state.listCurrencies = response
            return Object.create(state)
    }
    return state;
}