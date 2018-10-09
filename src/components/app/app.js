import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './app.scss';
import PrivateRoute from '../privateRoute/privateRoute'

import Login from '../../containers/login/login'
import Dashboard from '../../containers/dashboard/dashboard'
import AddNewBook from '../../containers/addNewBook/addNewBook'

import About from '../about/about'

const App = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/addNewBook' component={AddNewBook} />
        <Route path='/about' component={About} />
    </Switch>
)

export default App