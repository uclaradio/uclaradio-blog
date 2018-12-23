import { LOADING_POSTS } from "../../actions/actions";

export default function loadingPosts(state = true, action) {
  switch (action.type) {
    case LOADING_POSTS:
      return action.payload;
  }
  return state;
}
