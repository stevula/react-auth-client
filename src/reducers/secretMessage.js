import { UPDATE_SECRET_MESSAGE } from '../actions';

const secretMessage = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SECRET_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default secretMessage;
