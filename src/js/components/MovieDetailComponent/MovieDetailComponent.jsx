import React from "react";

class MovieDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieData } = this.props;
    if (movieData === "") {
    return (
      <div>
        <div className ='col'>
          <h4>List</h4>
          <table></table>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className ='col'>
        <h4>List</h4>
        <table></table>
      </div>
    </div>
  );
  }
}

export default MovieDetailComponent;
