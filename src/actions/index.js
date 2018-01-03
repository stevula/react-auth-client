import axios from 'axios';

const API_ROOT = 'http://localhost:3000';

export const GRANT_ACCESS = 'GRANT_ACCESS';
export const grantAccess = () => ({ type: GRANT_ACCESS });

export const HANDLE_AUTH_ERROR = 'HANDLE_AUTH_ERROR';
export const handleAuthError = error => ({ type: HANDLE_AUTH_ERROR, error });

export const signinUser = ({ email, password }) => (dispatch) => {
  return axios.post(`${API_ROOT}/signin`, { email, password })
    .then((response) => {
      window.localStorage.setItem('token', response.data.token);
      dispatch(grantAccess());
    })
    .catch(error => dispatch(handleAuthError(error.message)));
};

export const signupUser = ({ email, password }) => (dispatch) => {
  return axios.post(`${API_ROOT}/signup`, { email, password })
    .then((response) => {
      window.localStorage.setItem('token', response.data.token);
      dispatch(grantAccess());
    })
    .catch(error => dispatch(handleAuthError(error.response.data.message)));
};

export const REMOVE_ACCESS = 'REMOVE_ACCESS';
export const removeAccess = () => ({ type: REMOVE_ACCESS });

export const signoutUser = () => {
  window.localStorage.removeItem('token');
  return { type: REMOVE_ACCESS };
};
