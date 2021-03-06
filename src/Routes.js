import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { PrivateRoute } from 'components/PrivateRoute'

// Views
import MainDashboard from './page/Dashboard';
import SignIn from './component/Login';
import RegisterNasabah from './component/RegisterNasabah';
import TiketNew from './page/Tiket';
import TiketDone from './page/TiketDone';
import TiketPending from './page/TiketPending';
import TiketInProgress from './page/TiketInProgress';
import ChangeRequest from './page/changeRequest';
import Detail from './page/Detail';
import Update from './page/Update';
import TiketChangeRequest from './page/TiketChangeRequest';
import CRDetail from './page/ChangeRequestDetail';
import ApproveCR from './page/changeRequestApprove';
import RejectCR from './page/changeRequestReject';
import Register from './component/Register'
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
        <Route
          component={RegisterNasabah}
          exact
          path="/nasabah"
        />
        <Route
          component={Register}
          exact
          path="/register"
        />
        <Route
          component={ApproveCR}
          exact
          path="/approve"
        />
        <Route
        component={RejectCR}
        exact
        path="/reject"
      />
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
          component={TiketInProgress}
          exact
          path="/TiketInProgress"
        />
        <Route
          component={TiketPending}
          exact
          path="/TiketPending"
        />
        <Route
          component={TiketDone}
          exact
          path="/TiketDone"
        />
        <Route
          component={Detail}
          exact
          path="/tiket/list/id_tiket=:id_tiket"
        />
        <Route
          component={Update}
          exact
          path="/Update"
        />
        <Route
          component={ChangeRequest}
          exact
          path="/Request"
        />
        <Route
          component={TiketChangeRequest}
          exact
          path="/Tiket/CR"
        />
        <Route
          component={CRDetail}
          exact
          path="/change/id_change=:id_change"
        />
       
      </Switch>
    );
  }
}
