import React, { Component } from 'react';

export default class RegisterForm extends Component {
	render(){
		return (
			<form>
				<h1>Join Us!</h1>

				<div>
					<label>Username</label>
					<input
						type="text"
						name="username"
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
