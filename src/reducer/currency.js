export default (state = {}, action) => {
    const {type, response} = action;
    switch(type){
        case 'LOAD_CURRENCY_BY_ID': return response;
    }
    return state;
}