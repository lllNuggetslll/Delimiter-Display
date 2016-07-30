import { combineReducers } from 'redux';
import SearchReducer from './reducer_searchbar';

export default combineReducers({
  data: SearchReducer
});
