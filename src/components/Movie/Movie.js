import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "../Details/Details";
class Movie extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>

        <Router>
          <div>
            <Link to={"/details/" + this.props.movie.id}>
              <img src={this.props.movie.poster}></img>
            </Link>
          </div>
          <Route path="/details/:id" component={Details} />
          {/* Why doesn't it go onto a new page? */}
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = reduxStore => ({
  reduxStore
});

export default connect(putReduxStateOnProps)(Movie);
