import React from 'react';
import Profile from './views/components/Profile';
import Home from './views/components/Home.js';

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
