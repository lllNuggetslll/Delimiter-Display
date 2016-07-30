import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from '../reducers';
import Async from '../middleware/async';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  Async,
  promise,
  logger,
  thunk
)(createStore);

export default function storeConfig(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
