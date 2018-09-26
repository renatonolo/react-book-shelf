import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../home/home';
import About from '../about/about';

const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
    </Switch>
)

export default App;