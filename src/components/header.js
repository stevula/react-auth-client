import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  links() {
    if (this.props.isSignedIn) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      );
    }

    return [
      <li className="nav-item" key="signin">
        <Link className="nav-link" to="/signin">Sign in</Link>
      </li>,
      <li className="nav-item" key="signup">
        <Link className="nav-link" to="/signup">Sign up</Link>
      </li>,
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Auth Client</Link>
        <ul className="nav navbar-nav">
          {this.links()}
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
};

export default connect(
  state => ({ isSignedIn: state.isSignedIn }),
)(Header);
