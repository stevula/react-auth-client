import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }

  handleFormSubmit() {
    console.log('submit');
  }

  renderField({ id, input, label, type, meta: { touched, error } }) {
    return (
      <fieldset className="form-group">
        <label htmlFor={id}>
          {label}:
          <input {...input} type={type} className="form-control" />

          {this.renderAlert({ touched, error })}
        </label>
      </fieldset>
    );
  }

  renderAlert({ error, touched }) {
    if (!touched || !error) return null;

    return (
      <div className="alert alert-danger">
        <strong>{error}</strong>
      </div>
    );
  }

  isValidEmail(email) {
    return (
      email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
        ?
        'Invalid email address'
        :
        undefined
    );
  }

  isRequired(val) {
    return val ? undefined : 'This field is required.';
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field
          label="Email"
          id="email"
          name="email"
          className="form-control"
          component={this.renderField}
          validate={[this.isValidEmail, this.isRequired]}
          required
        />

        <Field
          label="Password"
          id="password"
          name="password"
          className="form-control"
          component={this.renderField}
          validate={this.isRequired}
          required
        />

        <Field
          label="Confirm password"
          id="password-confirm"
          name="passwordConfirm"
          className="form-control"
          component={this.renderField}
          validate={this.isRequired}
          required
        />

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary"
        >
          Sign up
        </button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords do not match.';
  }
  return errors;
};

export default reduxForm({
  form: 'signup',
  validate,
})(Signup);
