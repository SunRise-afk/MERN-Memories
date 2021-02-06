import { AUTH, LOGOUT, REMOVE_AUTH_ERROR, SET_AUTH_ERROR } from './actionTypes';
import * as api from '../api';

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
const setAuthErrorAC = (message) => {
  return {
    type: SET_AUTH_ERROR,
    payload: message,
  };
};
const removeAuthErrorAC = () => {
  return {
    type: REMOVE_AUTH_ERROR,
  };
};

export const signInActionCreator = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch(authActionCreator(data));
    dispatch(removeAuthErrorAC());
    history.push('/');
  } catch (error) {
    dispatch(setAuthErrorAC(error.response.data.message));
    console.log(error);
  }
};
export const signUpActionCreator = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch(authActionCreator(data));
    dispatch(removeAuthErrorAC());
    history.push('/');
  } catch (error) {
    dispatch(setAuthErrorAC(error.response.data.message));
    console.dir(error);
  }
};
