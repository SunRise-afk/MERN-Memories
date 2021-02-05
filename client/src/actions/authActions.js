import { AUTH, LOGOUT } from './actionTypes';

export const authActionCreator = (userData) => {
  return {
    type: AUTH,
    payload: userData,
  };
};
export const logoutActionCreator = () => {
  return {
    type: LOGOUT,
  };
};
