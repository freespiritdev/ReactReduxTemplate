import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
    	<div>
	    	<nav className="navbar navbar-default navbar-static-top">
	    		<div className="container-fluid">
	          		<div className="navbar-header">
	            		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		              		<span className="sr-only">Toggle navigation</span>
		              		<span className="icon-bar"></span>
		              		<span className="icon-bar"></span>
		              		<span className="icon-bar"></span>
		            	</button>
	          		</div>

	          		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	            		<ul className="nav navbar-nav navbar-right">
	              			<li><Link to="/">Home</Link></li>
		       				<li><Link to="/register">Register</Link></li>
	            		</ul>
	          		</div>
	        	</div>
	      	</nav>
      	</div>
    )
  }
}
