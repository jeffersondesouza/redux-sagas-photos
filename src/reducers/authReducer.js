import { AUTH } from '../constants';

const initialState = {
  isAuthorazed: false,
  isAuthorazing: false,
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
        token: action.payload.token,
      };
    case AUTH.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthorazed: false
      };

    default:
      return state;
  }
};


export default authReducer;