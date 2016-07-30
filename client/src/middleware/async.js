import { createStore } from 'redux';
import rootReducer from '../reducers';
import searchReducer from '../reducers/reducer_searchbar';

export default function ({ dispatch, getState, store }) {
  const store1 = createStore(searchReducer);
  return next => action => {
    if (!action.payload || !action.payload.then){
      return next(action);
    }
    action.payload
      .then(response => {
        next(action);
      })
      .catch(err => {
        console.log(err)
      })

  };
}
