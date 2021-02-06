import {
  AUTH,
  LOGOUT,
  REMOVE_AUTH_ERROR,
  SET_AUTH_ERROR,
} from '../actions/actionTypes';
export const authReducer = (
  state = { authData: null, authError: '', isAuthErrorVisible: false },
  action
) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case SET_AUTH_ERROR:
      return { ...state, authError: action.payload, isAuthErrorVisible: true };
    case REMOVE_AUTH_ERROR:
      return { ...state, authError: '', isAuthErrorVisible: false };
    default:
      return state;
  }
};
