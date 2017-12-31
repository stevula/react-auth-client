import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import isSignedIn from './isSignedIn';
import token from './token';

const rootReducer = combineReducers({
  form,
  isSignedIn,
  token,
});

export default rootReducer;
