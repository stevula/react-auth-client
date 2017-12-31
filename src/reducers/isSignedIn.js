import { GRANT_ACCESS, REMOVE_ACCESS } from '../actions';

const isSignedIn = (state = false, action) => {
  switch (action.type) {
    case GRANT_ACCESS:
      return true;
    case REMOVE_ACCESS:
      return false;
    default:
      return state;
  }
};

export default isSignedIn;
