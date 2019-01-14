import { FETCH_POST_LIST } from './actionTypes';

export const fetchPostList = (boardId, page) => dispatch =>
  dispatch({
    type: FETCH_POST_LIST,
    page,
  });
