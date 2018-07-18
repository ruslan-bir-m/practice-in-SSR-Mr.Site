export default store => next => action => {
    const {callAPI, type, ...rest} = action;
    if(!callAPI) return next(action);

    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...action, response}));
}