import { AUTH, LOGOUT } from './actionTypes';
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

export const signInActionCreator = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch(authActionCreator(data));
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
export const signUpActionCreator = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch(authActionCreator(data));
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
