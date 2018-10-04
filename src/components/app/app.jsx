import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Login from '../../containers/login/login'
import Dashboard from '../dashboard/dashboard'
import About from '../about/about'

const App = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/about' component={About} />
    </Switch>
)

export default App