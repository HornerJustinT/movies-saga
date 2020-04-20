import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import { HashRouter as Router, Link, Route } from "react-router-dom";

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    console.log(this.props);
  }

  render() {
    if (this.props.reduxStore.movies.length > 1) {
      return (
        <div>
          <h1>MovieList</h1>
          {this.props.reduxStore.movies.map((movie, i) => {
            return (
              <div>
                <Movie key={i} movie={movie} />
              </div>
            );
          })}

        </div>
      );
    } else {
      return <h1>Error</h1>;
    }
  }
}

const putReduxStateOnProps = reduxStore => ({
  reduxStore
});

export default connect(putReduxStateOnProps)(MovieList);
