import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { authUser } from './actions';
import App from './components/app';
import reducers from './reducers';

const store = applyMiddleware(reduxThunk)(createStore)(reducers);

const token = window.localStorage.getItem('token');
if (token) {
  store.dispatch(authUser());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.container'),
);
