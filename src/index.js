import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import Settings from './pages/Settings/Settings'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


const routing = (
  
    <BrowserRouter>
    <Switch>
        <Route path="/" exact strict component={Main} />
        <Route path="/login"  exact strict  component={Login} />
        <Route path="/settings"  exact strict  component={Settings} />
    </Switch>
    </BrowserRouter>
  )




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
