import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import WizardStep2 from './components/WizardStep2';
import House from './components/House'

export default (
  <Switch>
    <Route path='/wizard/step2' component={ WizardStep2 } />
    <Route exact path='/wizard' component={ Wizard } />
    <Route path='/house/:id' component={ House } />
    <Route path='/' component={ Dashboard } />
  </Switch>
)