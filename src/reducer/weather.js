import { LOAD_LOCATION_SEARCH, START, SUCCESS } from './../constants'

const defaultState = {
    loading: false,
    loaded: false,
    listPlaces: []
}

export default (state = defaultState, action) => {
    const {type, response} = action;
    switch(type){
        case LOAD_LOCATION_SEARCH + START: 
            state.loading = true
            state.loaded = false
            return Object.create(state)
        case LOAD_LOCATION_SEARCH + SUCCESS:
            state.loading = false
            state.loaded = true
            state.listPlaces = response
            return Object.create(state)
    }
    return state;
}