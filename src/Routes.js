import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { PrivateRoute } from 'components/PrivateRoute'

// Views
import MainDashboard from './page/Dashboard';
import SignIn from './component/Login';
import TiketNew from './page/Tiket';
import TiketDone from './page/TiketDone';

// Helpers
// import { checkAllowedApps } from 'helpers'

export default class Routes extends Component {
  render() {
    // const allowedApps = checkAllowedApps()

    return (
      <Switch>

        <Redirect
          exact
          from="/"
          to="/login"
        />

        {/* {
          allowedApps && allowedApps.length === 1 && <Redirect
            exact
            from="/dashboard"
            to={allowedApps[0]}
          />
        } */}
        
        <Route
          component={SignIn}
          exact
          path="/login"
        />
        <Route
          component={MainDashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={TiketNew}
          exact
          path="/tiket"
        />
        <Route
          component={TiketDone}
          exact
          path="/TiketDone"
        />
        {/* <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={SomethingWentWrong}
          exact
          path="/something-went-wrong"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Route
          component={NoPrivileges}
          exact
          path="/no-privileges"
        /> */}
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    );
  }
}
