import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' });
        console.log(this.props.movies)
    }
  render() {
    if (this.props.reduxStore.movies.length>1) {
      return (
        <div>
          <h1>MovieList</h1>
          {this.props.reduxStore.movies.map((movie, i) => {
            return <Movie key={i} movie={movie} />;
          })}
        </div>
      );
    } else{
        return (<h1>Error</h1>);

    } 
  }
}

const putReduxStateOnProps = reduxStore => ({
  reduxStore
});

export default connect(putReduxStateOnProps)(MovieList);
