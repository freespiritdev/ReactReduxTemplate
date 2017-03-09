 import React, { Component } from 'react';
import Welcome from './Welcome';

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
	              			<li><a href="#">Home</a></li>
		       				<li><a href="#">Sign up</a></li>
	            		</ul>
	          		</div>
	        	</div>
	      	</nav>
      	</div>
    )
  }
}
