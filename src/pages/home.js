import React, { Component } from 'react'
import Login from '../containers/login'

class Home extends Component {
	render(){
		return (
			<div id="home">
				<h3>Home</h3>
				<Login />
			</div>
		)
	}
}

export default Home
