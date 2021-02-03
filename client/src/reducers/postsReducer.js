import { CREATE_POST, FETCH_ALL } from '../actions/actionTypes';
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

    default:
      return state;
  }
};
