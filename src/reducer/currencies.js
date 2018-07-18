export default (state = [], action) => {
    const {type, response} = action;
    switch(type){
        case 'LOAD_ALL_CURRENCIES': return response;
    }
    return state;
}