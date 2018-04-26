import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react';

export default class LoginForm extends Component {

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

  render() {
	  const { data } = this.state;
	return (
	  <Form>
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
