import React from 'react';
import Profile from './views/components/Profile';
import Home from './views/components/Home.js';
import Answers from './views/components/Answers.js';
import Tutors from './views/components/Tutors';
import Questions from './views/components/Questions';
import Navigator from 'react.cordova-navigation_controller';

import './style/global.css';

import { BrowserRouter  , Switch, Route, HashRouter } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <HashRouter history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/answers' component={Answers} />
            <Route path='/tutors' component={Tutors} />
            <Route path='/questions' component={Questions} />
          </Switch>
        </div>
      </HashRouter>
  );
  /*return(
<div>
  <Navigator onRef={ref => (this.navigatorRef=ref)}>

  </Navigator>
</div>
  );*/
}

export default App;
