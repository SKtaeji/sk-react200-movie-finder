import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

export function updateSearchItem(searchItem) {
  return {
    type: "UPDATE_SEARCH_ITEM",
    payload: { searchItem }
  };
}

export function getMovie(query, dispatch) {
  axios
    .get(`https://www.omdbapi.com/?apikey=c8983e50&s=${query}`)
    .then(async response => {
      let movies = response.data.Search;  
         
      dispatch(returnMoviesFromSearch(movies));
    })
    .catch(console.error()
    );
}

export function returnMoviesFromSearch(movies) {
    console.log('ACTION DISPATCHED');
    return {
        type: "RETURN_MOVIES",
        payload: movies
    };
}

export function getMovieDetails(imdbID) {
    return {
        type:"GET_MOVIE_DETAILS",
        payload: axios.get(`https://www.omdbapi.com/?apikey=c8983e50&i=${imdbID}`)
    };
}
