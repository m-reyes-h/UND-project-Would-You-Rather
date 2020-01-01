import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "../components/Leaderboard";
import NoMatch from "../components/NoMatch";
import Home from "../components/Home";
import Login from "./Login";
import AuthedRoute from "./AuthedRoute";
import PollDetails from "./PollDetails";

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
          <AuthedRoute path="/questions/:question_id" component={PollDetails} />
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
