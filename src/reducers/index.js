import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import errorMessage from './errorMessage';
import isSignedIn from './isSignedIn';

const rootReducer = combineReducers({
  errorMessage,
  form,
  isSignedIn,
});

export default rootReducer;
