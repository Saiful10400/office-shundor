import axios from "axios";
import { SET_ALL_POST, ADD_NEW_POST } from "./types";
// export const getPost = (id) => (dispatch) => {
//   dispatch(setPostLoading());
//   axios
//     .get(`/api/posts/${id}`)
//     .then((res) =>
//       dispatch({
//         type: GET_POST,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: GET_POST,
//         payload: null,
//       })
//     );
// };

export const getAllPost = (dispatch, id) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (res.data) {
      dispatch({
        type: SET_ALL_POST,
        payload: res.data,
      });
    }
  });
  return;
};
export const addNewPost = (dispatch, newPost) => {
  dispatch({
    type: ADD_NEW_POST,
    payload: newPost,
  });
};
