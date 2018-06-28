import React from "react";
import { getMovie, updateSearchItem, returnMoviesFromSearch } from "../../actions/MovieSearchActions";

class MovieSearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    this.handleGetMovie = this.handleGetMovie.bind(this);
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

  render() {
    const { searchItem, movieData } = this.props;
    console.log(this.props);
    var error = movieData.error;
    if (error == true) {
      return (
        <div className="container-fluid">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="movieSearch"
                name="movieSearch"
                value={searchItem}
                onChange={this.handleSearchUpdate}
                placeholder="Please enter a Title"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.handleGetMovie}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="card error p-1">
            <p className="errorText">
              An error occured while attempting to display the movie list.
            </p>
            <p>Please check the spelling of your title and try again.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="movieSearch"
              name="movieSearch"
              value={searchItem}
              onChange={this.handleSearchUpdate}
              placeholder="Please enter a Title"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.handleGetMovie}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MovieSearchComponent;
