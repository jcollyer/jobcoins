import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {

  render() {
    const { test } = this.props
    return (
      <p>
        {test}
      </p>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    test: appState.test
  }
}

export default connect(mapStateToProps)(Test)
