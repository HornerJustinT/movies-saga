import React, { Component } from "react";
import { connect } from "react-redux";
import Movie  from "../Movie/Movie";
class MovieList extends Component {
  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <Movie />
      </div>
    );
  }
}

const putReduxStateOnProps = reduxStore => ({
  reduxStore
});

export default connect(putReduxStateOnProps)(MovieList);
