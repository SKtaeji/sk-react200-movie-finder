import { connect } from 'react-redux';
import MovieSearchComponent from './MovieSearchComponent';

function mapStoreToProps(store) {
    return {
      searchItem: store.search.searchItem,
      movieData: store.search.movieData || {}
    };
  }

export default connect(mapStoreToProps)(MovieSearchComponent);