import { AUTH } from '../constants';

const initialState = {
  isAuthorazed: false,
  isAuthorazing: false,
  isValidatingToken: true,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        isAuthorazing: true
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorazing: false,
        isAuthorazed: true,
        token: action.payload.token
      };
    case AUTH.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthorazed: false
      };

    case AUTH.AUTHORIZE_ROUTE:
      return {
        ...state,
        isAuthorazed: true
      };
    case AUTH.UNAUTHORIZE_ROUTE:
      return {
        ...state,
        isAuthorazed: false
      };

    case AUTH.VALIDATE_TOKEN_REQUEST:
      return {
        ...state,
        isValidatingToken: true
      };
    case AUTH.VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        isValidatingToken: false,
        isAuthorazed: true,
        token: action.payload.token
      };
    case AUTH.VALIDATE_TOKEN_FAILURE:
      return {
        ...state,
        isValidatingToken: false,
        isAuthorazed: false,
        token: null
      };

    default:
      return state;
  }
};

export default authReducer;
