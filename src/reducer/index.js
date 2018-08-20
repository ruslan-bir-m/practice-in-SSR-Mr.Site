import { combineReducers } from 'redux';
import currencies from './currencies';
import currency from './currency';
import weather from './weather';
import weatherDetail from './weatherDetail';

export default combineReducers({
    currencies,
    currency,
    weather,
    weatherDetail
});