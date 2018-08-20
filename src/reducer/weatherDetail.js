import { LOAD_WEATHER_LOCATION, START, SUCCESS } from './../constants'

const defaultState = {
    loading: false,
    loaded: false,
    data: {}
}

export default (state = defaultState, action) => {
    const {type, response} = action;
    switch(type){
        case LOAD_WEATHER_LOCATION + START: 
            state.loading = true
            state.loaded = false
            return Object.create(state)
        case LOAD_WEATHER_LOCATION + SUCCESS:
            state.loading = false
            state.loaded = true
            state.data = response
            return Object.create(state)
    }
    return state;
}