import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/signin">
          <Signin />
        </Route>
      </div>
    );
  }
}
