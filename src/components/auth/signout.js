import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>See ya later!</div>
    );
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(Signout);
