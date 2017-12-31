import React from 'react';
import { connect } from 'react-redux';

const Header = () => (
  <nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
      <li className="nav-item">
        Sign In
      </li>
    </ul>
  </nav>
);

export default connect(
  state => ({ isSignedIn: state.isSignedIn }),
)(Header);
