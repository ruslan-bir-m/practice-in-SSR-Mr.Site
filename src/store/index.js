import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import api from '../middleware/api';

const enhancer = applyMiddleware(api);

const store = createStore(reducer, {}, enhancer);

export default store;