import { connect } from 'react-redux';
import MovieSearchComponent from './MovieSearchComponent';

function mapStoreToProps(store) {
    return {
      searchItem: store.search.searchItem,
      movies: store.search.movies || []
    };
  }

export default connect(mapStoreToProps)(MovieSearchComponent);