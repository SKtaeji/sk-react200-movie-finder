import { connect } from 'react-redux';
import MovieDetailComponent from './MovieDetailComponent';

function mapStoreToProps(store) {
    return {
      searchItem: store.search.searchItem,
      movies: store.search.movies || [],
      movie: store.search.movie
    };
  }

export default connect(mapStoreToProps)(MovieDetailComponent);