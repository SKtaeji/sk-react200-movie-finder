import React from "react";
import { Link } from "react-router-dom";

class MovieDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <div className="card">
          <div className="card-header row">
            <div className="col-md-6">
              <h4 className="card-title">{movie.Title}</h4>
              <h6 className="card-subtitle mb-2">
                Released: {movie.Year} Runtime: {movie.Runtime}
              </h6>
            </div>
            <div className="col-md-6">
              <Link to="/" className="returnBtn">
                Back to search results
              </Link>
            </div>
          </div>
          <div className="movie-card-body row">
            <div className="col-lg-6">
              <img src={movie.Poster} />
            </div>
            <div className="more-info-text col-lg-6">
              <p className="card-text"><b>Genre: </b>{movie.Genre}</p>
              <p className="card-text"><b>Director: </b>{movie.Director}</p>
              <p className="card-text">
                Metascore: {movie.Metascore}, IMDB: {movie.imdbRating}
              </p>
              <p className="card-text"><b>Synopsis: </b>{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailComponent;
