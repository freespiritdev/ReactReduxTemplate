import React, { Component } from 'react';

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}

		this.onChange = this.onChange.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value});
	}

	render(){
		return (
			<form>
				<h1>Join Us!</h1>

				<div>
					<label>Username</label>
					<input
						value={this.state.username}
						onChange={this.onChange}
						type="text"
						name="username"
					/>
					<label>Password</label>
					<input
						type="text"
						name="password"
					/>
				</div>
				<div>
					<button className="btn btn-primary">
					Sign up
					</button>
				</div>
			</form>
		);
	}	
}
