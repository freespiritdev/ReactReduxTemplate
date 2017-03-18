import React, { Component } from 'react';

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password1: '',
			password2: ''
		}

		this.onChange = this.onChange.bind(this);
		this._submit = this._submit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value});
	}

	_submit(e){
		e.preventDefault()
		let { username, email, password1, password2 } = this.state;

		if(password1 !== password2) {
			this.setState({
				password1: '',
				password2: '' 
			})
			return alert("Passwords do not match")
		}
	}

	render(){
		let { username, email, password1, password2 } = this.state;
		return (
			<form onSubmit={this._submit}>
				<h1>Join Us!</h1>
				<div>
					<label>Username</label>
					<input
						value={this.state.username}
						onChange={this.onChange}
						type="text"
						name="username"
					/>
					<label>Email</label>
					<input
						value={this.state.email}
						onChange={this.onChange}
						type="text"
						name="email"
					/>
					<label>Password</label>
					<input
						type="text"
						name="password1"
					/>
					<label>Confirm Password</label>
					<input
						type="text"
						name="password2"
					/>
				</div>
				<div>
					<button type="submit" className="btn btn-primary">
					Sign up
					</button>
				</div>
			</form>
		);
	}	
}
