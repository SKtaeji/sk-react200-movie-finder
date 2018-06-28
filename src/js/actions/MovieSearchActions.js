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
      let pendingDetails = [];
      let movies = response.data.Search;

      for (let movie of movies) {
        pendingDetails.push(
          axios
            .get(`https://www.omdbapi.com/?apikey=c8983e50&i=${movie.imdbID}`)
            .then(response => {
              return {
                title: response.data.Title,
                score: response.data.Metascore,
                year: response.data.Year,
                poster: response.data.Poster,
                plot: response.data.Plot,
                release: response.data.Released,
                director: response.data.Director,
                writer: response.data.Writer,
                actors: response.data.Actors,
                genre: response.data.Genre,
                runtime: response.data.Runtime,
                awards: response.data.Awards,
                language: response.data.Language,
                error: false
              }
            })
        );
      }

      const finalDetails = await axios.all(pendingDetails);
      for (let i = 0; i < movies.length - 1; i++) {
        movies[i].plot = finalDetails[i].plot;
        movies[i].release = finalDetails[i].release;
        movies[i].director = finalDetails[i].director;
        movies[i].writer = finalDetails[i].writer;
        movies[i].actors = finalDetails[i].actors;
        movies[i].genre = finalDetails[i].genre;
        movies[i].runtime = finalDetails[i].runtime;
        movies[i].awards = finalDetails[i].awards;
        movies[i].language = finalDetails[i].language;
      }
      dispatch(returnMoviesFromSearch(movies));
    })
    .catch(error => {
      const movieData = {
        error: true
      };

      return movieData;
    });
}

export function returnMoviesFromSearch(movies) {
    console.log('ACTION DISPATCHED');
    debugger;
    return {
        type: "RETURN_MOVIES",
        payload: movies
    };
}

export function getMovieDetails(imdbID) {
    return {
        type:"GET_MOVIE_DETAILS",
        payload: axios.get(`https://www.omdbapi.com/?apikey=c8983e50&t=${movie.imdbID}`)
    };
}
