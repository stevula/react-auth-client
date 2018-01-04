import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import errorMessage from './errorMessage';
import isSignedIn from './isSignedIn';
import secretMessage from './secretMessage';

const rootReducer = combineReducers({
  errorMessage,
  form,
  isSignedIn,
  secretMessage,
});

export default rootReducer;
