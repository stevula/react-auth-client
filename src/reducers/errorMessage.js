import { HANDLE_AUTH_ERROR } from '../actions';

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case HANDLE_AUTH_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default errorMessage;
