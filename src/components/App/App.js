import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieList from '../MovieList/MovieList'
class App extends Component {
  componentDidMount() {
  }

  render(){

    return (
      <div className="App">
        <h1>Hi</h1>
        <Router>
          <Route exact path='/' component={MovieList}/>
          
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(App);