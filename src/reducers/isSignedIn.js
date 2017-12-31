import { GRANT_ACCESS } from '../actions';

const isSignedIn = (state = false, action) => {
  switch (action.type) {
    case GRANT_ACCESS:
      return true;
    default:
      return state;
  }
};

export default isSignedIn;
