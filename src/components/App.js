import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Header from "./Header";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Login from "../containers/Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar
            style={{ backgroundColor: "#4285f4", height: "5px", top: 0 }}
          />
          <Route path="/" exact component={Login} />
          {this.props.loading === true ? null : (
            <Fragment>
              <Header />
              <Route path="/home" component={Home} />
              <Route path="/leaderboard" component={Leaderboard} />
            </Fragment>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
