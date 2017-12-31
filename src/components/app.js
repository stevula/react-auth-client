import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';
import Feature from './feature';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <div>You are Home</div>} />
        <Route path="/signin" component={Signin} />
        <Route path="/feature" component={Feature} />
      </div>
    );
  }
}
