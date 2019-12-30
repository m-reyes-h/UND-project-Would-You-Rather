import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter  } from "react-router-dom";

// This container component is created based on react-router docs
//https://reacttraining.com/react-router/web/api/Route/render-func
//https://reacttraining.com/react-router/web/api/Redirect
//
// and based on the Blog tylermcginnis
//https://tylermcginnis.com/react-router-protected-routes-authentication/

class AuthedRoute extends Component {
  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { referrer: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isAuthenticated: authedUser !== null
  };
}

export default withRouter(connect(mapStateToProps)(AuthedRoute));
