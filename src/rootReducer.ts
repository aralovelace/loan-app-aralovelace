import { combineReducers } from 'redux';
import toastsReducer from './state/toast/reducer';
import loanReducer from './state/loan/reducer'
import weatherListReducer from './state/weather/list-reducer';
import weatherSearchReducer from './state/weather/search-reducer';

export default combineReducers({
  toasts: toastsReducer,
  loan: loanReducer,
  cities: weatherListReducer,
  cityName: weatherSearchReducer
});
