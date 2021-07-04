import React from 'react';
import './App.css';
import Home from './page/Home'
import Update from './page/Update'
import Hero from './page/Hero'
import News from './page/News'
import Dashboard from './page/Dashboard'
import Tiket from './page/Tiket'
import TiketDone from './page/TiketDone'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import {baseApiUrl} from './common/config';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
const browserHistory = createBrowserHistory();

const createStoreWithMiddleware = applyMiddleware()(createStore);

axios.defaults.baseURL = baseApiUrl


function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
    <React.Fragment>
      <Router history={browserHistory}>
          <Routes />
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
