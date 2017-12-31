import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signinUser } from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    const { handleSubmit, isSignedIn } = this.props;

    if (isSignedIn) {
      return (
        <Redirect to={{
          pathname: '/feature',
          state: { from: this.props.location },
        }} />
      );
    }

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label htmlFor="email">
            Email:
            <Field
              id="email"
              name="email"
              type="text"
              className="form-control"
              component="input"
            />
          </label>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password">
            Password:
            <Field
              id="password"
              name="password"
              type="password"
              className="form-control"
              component="input"
            />
          </label>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  handleFormSubmit({ email, password }, dispatch) {
    dispatch(signinUser({ email, password }));
  }
}

Signin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  // location: PropTypes.object.isRequired,
};

export default connect(
  state => ({ isSignedIn: state.isSignedIn }),
)(reduxForm({ form: 'signin' })(Signin));
