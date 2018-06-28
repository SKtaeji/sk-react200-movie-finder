const defaultState = {
  searchItem: "",
  movieData: {
    title: "",
    score: "",
    year: "",
    poster: "",
    plot: "",
    release: "",
    director: "",
    writer: "",
    actors: "",
    genre: "",
    runtime: "",
    awards: "",
    language: "",
    error: false
  },
  movies: null
};

export default function MovieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;
  console.log('REDUCER HIT')
  console.log('Action: ', action);

  switch (type) {
    case "UPDATE_SEARCH_ITEM": {
      return {
        ...state,
        searchItem: payload.searchItem
      };
    }

    case "GET_MOVIE_FULFILLED": {
      return {
        ...state,
        movieData: payload
      };
    }

    case "GET_MOVIE_REJECTED": {
      return {
        ...state,
        error: true
      };
    }

    case "RETURN_MOVIES": {
      console.log('Payload: ',payload)
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
