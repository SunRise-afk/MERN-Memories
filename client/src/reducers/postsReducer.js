import {
  CREATE_POST,
  DELETE_POST,
  FETCH_ALL,
  UPDATE_POST,
} from '../actions/actionTypes';
// import initialPost from '../images/initialPost.jpg';
// const initialState = [
//   {
//     id: 0,
//     creator: 'Ilin i',
//     title: 'Happy new 2021 year',
//     message: 'Have a lot of fun',
//     selectedFile: initialPost,
//     createdAt: Date.now(),
//     tags: ['newYear', 'haveFun'],
//   },
// ];
export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};
