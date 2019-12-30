import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "./Leaderboard";
import NoMatch from './NoMatch';
import Home from "./Home";
import Login from "../containers/Login";
import AuthedRoute from '../containers/AuthedRoute'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <LoadingBar className="loading" />
        <Switch>
          <Route exact path="/" component={Login} />
          <AuthedRoute path="/home" component={Home} />
          <AuthedRoute path="/leaderboard" component={Leaderboard} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
