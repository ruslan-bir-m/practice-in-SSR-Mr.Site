import { combineReducers } from 'redux';
import currencies from './currencies';
import currency from './currency';

export default combineReducers({
    currencies,
    currency
});