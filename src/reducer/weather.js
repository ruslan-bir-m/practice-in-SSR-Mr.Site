export default (state = [], action) => {
    const {type, response} = action;
    switch(type){
        case 'LOAD_LOCATION_SEARCH': return response;
    }
    return state;
}