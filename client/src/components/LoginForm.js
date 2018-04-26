import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react';
import Validator from "validator";
import PropTypes from 'prop-types';
// import InlineError from './InlineError';


class LoginForm extends Component {

	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onChange = e => 
		this.setState({ 
			data: { ...this.state.data, [e.target.name]: e.target.value}
		});

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props.submit(this.state.data);
		}
	};

	validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
		if (!data.password) errors.password = "Cannot be blank";
		return errors;
	}

  render() {
	  const { data } = this.state;
	return (
	  <Form onSubmit={this.onSubmit}>
			<Form.Field>
			  <label htmlFor="email">Email</label>
			  <input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange} />
			</Form.Field>
			<Form.Field>
			  <label htmlFor="password">password</label>
			  <input type="password" id="password" name="password" placeholder="strong password" value={data.password} onChange={this.onChange} />
			</Form.Field>
			<Button primary>Login</Button>
	  </Form>
	)
  }
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
}

export default LoginForm;