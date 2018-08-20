import { LOAD_CURRENCY_BY_ID, START, SUCCESS } from './../constants'

const defaultState = {
    loading: false,
    loaded: false,
    data: {}
}

export default (state = defaultState, action) => {
    const {type, response} = action;
    switch(type){
        case LOAD_CURRENCY_BY_ID + START: 
            state.loading = true
            state.loaded = false
            return Object.create(state)
        case LOAD_CURRENCY_BY_ID + SUCCESS:
            state.loading = false
            state.loaded = true
            state.data = response
            return Object.create(state)
    }
    return state;
}