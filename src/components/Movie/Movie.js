import React, { Component } from "react";
import { connect } from "react-redux";
class Movie extends Component {
  render() {
    console.log(this.props.movie);
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <img src = {this.props.movie.poster}></img>
      </div>
    );
  }
}

const putReduxStateOnProps = reduxStore => ({
  reduxStore
});

export default connect(putReduxStateOnProps)(Movie);
