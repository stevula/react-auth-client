import axios from 'axios';

const API_ROOT = 'http://localhost:3000';

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const receiveToken = token => ({
  type: RECEIVE_TOKEN,
  token,
});

export const GRANT_ACCESS = 'GRANT_ACCESS';
export const grantAccess = () => ({
  type: GRANT_ACCESS,
});

export const signinUser = ({ email, password }) => (dispatch) => {
  axios.post(`${API_ROOT}/signin`, { email, password })
    .then((response) => {
      dispatch(receiveToken(response.data.token));
      dispatch(grantAccess());
    })
    .catch(error => {});
};
