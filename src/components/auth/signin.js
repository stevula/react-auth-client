import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label htmlFor="email">
            Email:
            <input {...email} id="email" type="text" className="form-control" />
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">
            Password:
            <input {...password} id="password" type="password" className="form-control" />
          </label>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }
}

Signin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
})(Signin);
