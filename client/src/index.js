import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import storeConfig from './store';
import './styles/main.scss';
import App from './components/app/app';
import { createStore, applyMiddleware} from 'redux';

const store = storeConfig();

const creatStoreWithMiddleware = applyMiddleware()(createStore);

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

export default creatStoreWithMiddleware;
