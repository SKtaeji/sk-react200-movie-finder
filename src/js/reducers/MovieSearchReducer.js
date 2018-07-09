const defaultState = {
  searchItem: "",
  movies: [],
  movie: {}
};

export default function MovieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_SEARCH_ITEM": {
      return {
        ...state,
        searchItem: payload.searchItem
      };
    }

    case "RETURN_MOVIES": {
      return {
        ...state,
        movies: payload
      };
    }

    case "GET_MOVIE_DETAILS_FULFILLED": {
      return {
        ...state,
        movie: payload.data
      }
    }

    default: {
      return state;
    }
  }
}
