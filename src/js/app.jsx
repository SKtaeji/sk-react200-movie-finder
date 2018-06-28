import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearchComponent from './components/MovieSearchComponent';
import MovieDetailComponent from './components/MovieDetailComponent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <header className='jumbotron'>
            
          </header>
          <Route exact path='/' component={MovieSearchComponent} />
          <Route path='/movie/:id' component={MovieDetailComponent} />
        </div>
      </Router>
    );
  }
}

export default App;