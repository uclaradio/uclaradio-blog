import { GET_ARTICLES } from "../../actions/actions";

export default function getArticles(state = {}, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
  }
  return state;
}
