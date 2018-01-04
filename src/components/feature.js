import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSecretMessage } from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchSecretMessage();
  }

  render() {
    return (
      <div>
        {this.props.secretMessage}
      </div>
    );
  }
}

Feature.propTypes = {
  fetchSecretMessage: PropTypes.func.isRequired,
  secretMessage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  secretMessage: state.secretMessage,
});

export default connect(mapStateToProps, { fetchSecretMessage })(Feature);
