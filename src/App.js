import React from 'react';
import './App.css';
import Home from './page/Home'
import Update from './page/Update'
import Hero from './page/Hero'
import News from './page/News'
import Dashboard from './page/Dashboard'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const createStoreWithMiddleware = applyMiddleware()(createStore);


function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
    <React.Fragment>
          <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/Update' exact component={Update}></Route>
            <Route path='/News' exact component={News}></Route>
            <Route path='/Hero' exact component={Hero}></Route>
            <Route path='/Dashboard' exact component={Dashboard}></Route>
          </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
