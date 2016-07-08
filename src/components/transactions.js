import React, { Component } from 'react'

class Transactions extends Component {
	render(){
		const { transactions } = this.props
		return (
			<div id="transactions">
				<h3>Transactions</h3>
				{transactions.map((transaction) => {
	         return(
	           <p key={Math.random()}>Amount: {transaction.amount}</p>
	         )
	       })}
			</div>
		)
	}
}

export default Transactions
