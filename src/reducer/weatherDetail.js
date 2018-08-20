export default (state = {}, action) => {
    const {type, response} = action;
    switch(type){
        case 'LOAD_WEATHER_LOCATION': return response;
    }
    return state;
}