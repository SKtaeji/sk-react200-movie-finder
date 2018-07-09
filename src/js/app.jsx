import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchComponent from './components/MovieSearchComponent';
import MovieDetailComponent from './components/MovieDetailComponent';

class App extends React.Component {
  render() {
    return (
     <Router>
        <div className='container-fluid'>
          <header className='jumbotron bg-light'>
            <h1 className='display-3 text-center'>Movie Finder</h1>
            <h5 className='lead text-center'>Spoiler Alert: There will be some.</h5>
          </header>
          <Route exact path='/' component={ MovieSearchComponent } />
          <Route path='/movie/:id' component={ MovieDetailComponent } />
        </div>
      </Router>
    );
  }
}

export default App;