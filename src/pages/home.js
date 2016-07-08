import React, { Component } from 'react'
import Login from '../components/login'
import { withRouter } from 'react-router'

class Home extends Component {
	render(){
		return (
			<div id="home">
				<h3>Home</h3>
				<Login router={withRouter} />
			</div>
		)
	}
}

export default Home
