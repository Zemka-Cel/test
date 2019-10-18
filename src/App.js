import React from 'react';
import Profile from './views/Profile';
import Home from './views/Home.js';

import './style/global.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
