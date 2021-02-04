import * as api from '../api';
import {
  CREATE_POST,
  FETCH_ALL,
  UPDATE_POST,
  DELETE_POST,
} from './actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (postId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(postId, post);
    console.log(data);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(postId);
    console.log(data);
    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId);
    console.log(data);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
