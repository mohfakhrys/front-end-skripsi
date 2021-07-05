import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import {baseApiUrl} from './common/config';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
const browserHistory = createBrowserHistory();

axios.defaults.baseURL = baseApiUrl


function App() {
  return (
    <React.Fragment>
      <Router history={browserHistory}>
          <Routes />
        </Router>
      </React.Fragment>
  );
}

export default App;
