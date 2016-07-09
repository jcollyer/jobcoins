import React, { Component } from 'react'
import Login from '../containers/login'

class Home extends Component {
	render(){
		return (
			<div id="home">
				<div className="logo">Job</div>
				<Login />
			</div>
		)
	}
}

export default Home
