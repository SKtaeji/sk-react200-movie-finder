import { connect } from 'react-redux';
import MovieDetailComponent from './MovieDetailComponent';

function mapStoreToProps(store) {
    return {
      searchItem: store.search.searchItem,
      movieData: store.search.movieData || {}
    };
  }

export default connect(mapStoreToProps)(MovieDetailComponent);