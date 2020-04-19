import React, { Component } from 'react';
import {connect} from 'react-redux';
class Movie extends Component {
  render(){

    return (
        <h1>Movie</h1>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Movie);