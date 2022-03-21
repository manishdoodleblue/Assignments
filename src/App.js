import React, { Component } from 'react'
import Vote from'./Vote'
export class App extends Component {
  render() {
    return (
      <div>
      <h1>Vote</h1>
      <Vote title="Telugu"/>
      <Vote title="English"/>
      <Vote title="Tamil"/>
      <Vote title="Malayalam"/>
      </div>
    )
  }
}

export default App