import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Garage from './Garage.js'
import Create from './Create.js';
import Detail from './Detail.js';
import Home from './Home.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
                <Route 
                    path="/"
                    exact
                    render={(routerProps) => 
                    <Home {...routerProps} />} 
                />
                <Route 
                    path="/garage"
                    exact
                    render={(routerProps) => 
                    <Garage {...routerProps} />} 
                />
                <Route 
                    path="/add"
                    exact
                    render={(routerProps) => 
                    <Create {...routerProps} />} 
                />
                <Route 
                    path="/detail/:id"
                    exact
                    render={(routerProps) => 
                    <Detail {...routerProps} />} 
                />
            </Switch>
        </Router>
      </div>
    );
  }
}