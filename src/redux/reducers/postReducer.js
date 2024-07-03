import { SET_ALL_POST, ADD_NEW_POST } from "../actions/types";
const initialState = {
  posts: [],
  post: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
}
