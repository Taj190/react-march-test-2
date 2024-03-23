import './App.css'

import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './services/login';
import Profile from './services/Profile';
import Error from './services/Error';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

