import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
class Details extends React.Component {
  render() {
    //   console.log(this.props)
    return (
      <div>
        <p>{this.props.reduxStore.movies[this.props.match.params.id -1].description}</p>
      </div>
    );
  }
}
const putReduxStateOnProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(putReduxStateOnProps)(Details);
