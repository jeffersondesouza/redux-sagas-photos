import { AUTH } from '../constants';

const loginRequest = () => ({
  type: AUTH.LOGIN_REQUEST
});

const loginSuccess = payload => ({
  type: AUTH.LOGIN_SUCCESS,
  payload
});

const loginFailure = error => ({
  type: AUTH.LOGIN_FAILURE,
  error
});

const logoutRequest = () => ({
  type: AUTH.LOGOUT_REQUEST
});

const logoutSuccess = payload => ({
  type: AUTH.LOGOUT_SUCCESS,
  payload
});

const logoutFailure = error => ({
  type: AUTH.LOGOUT_FAILURE,
  error
});

const authorize = token => ({
  type: AUTH.AUTHORIZE_ROUTE,
  payload: { token }
});

const unauthorize = error => ({
  type: AUTH.UNAUTHORIZE_ROUTE
});

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  unauthorize,
  authorize
};
