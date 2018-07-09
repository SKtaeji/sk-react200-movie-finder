import React from "react";
import { Link } from "react-router-dom";
import {
  getMovie,
  updateSearchItem,
  getMovieDetails,
  returnMoviesFromSearch
} from "../../actions/MovieSearchActions";

class MovieSearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    this.handleGetMovie = this.handleGetMovie.bind(this);
    this.handleGetMovieDetails = this.handleGetMovieDetails.bind(this);
  }

  handleSubmit(event) {
    const { dispatch, searchItem } = this.props;
    event.preventDefault();
    getMovie(searchItem, dispatch);
  }

  handleSearchUpdate(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(updateSearchItem(value));
  }

  handleGetMovie(event) {
    const { dispatch, searchItem } = this.props;

    getMovie(searchItem, dispatch);
  }

  handleGetMovieDetails(movie) {
    const { dispatch } = this.props;
    dispatch(getMovieDetails(movie.imdbID));
  }

  render() {
    const { searchItem, movies } = this.props;

    return (
      <div className="col-lg-12">
        <form onSubmit={this.handleSubmit}>
          <div id="inputField" className="input-group">
            <input
              type="text"
              className="form-control"
              id="movie-search"
              name="movie-search"
              value={searchItem}
              onChange={this.handleSearchUpdate}
              placeholder="Please enter a Title"
            />
            <div className="input-group-append">
              <button
                className="searchBtn"
                type="button"
                onClick={this.handleGetMovie}
              >
                Search
              </button>
            </div>
          </div>
        </form>

        <div className="grid-container">
          {movies.length
            ? movies.map((movieItem, i) => (
                <ul className="movie-display" key={i}>
                  <img src={movieItem.Poster} />
                  <div className="container">
                    <h5>
                      {movieItem.Title} ({movieItem.Year})
                    </h5>
                    <Link
                      to={`/movie/${i}`}
                      className="more-info-btn"
                      type="button"
                      onClick={() => this.handleGetMovieDetails(movieItem)}
                    >
                      More Information
                    </Link>
                  </div>
                </ul>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default MovieSearchComponent;
