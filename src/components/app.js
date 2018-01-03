import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import withAuth from './auth/withAuth';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Signout from './auth/signout';
import Feature from './feature';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <div>You are Home</div>} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
          <Route path="/feature" component={withAuth(Feature)} />
          <Route render={() => <div>Not found</div>} />
        </Switch>
      </div>
    );
  }
}
