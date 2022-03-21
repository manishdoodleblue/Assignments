import React, { Component } from 'react'
import Pros from'./Pros';
import Employee from './Employee';
import Hello from './Hello';
export class App extends Component {
  state={
   title:"praemam"
  }
  render() {
    return (
      <div>
        <Pros Movie={this.state.title}/>
        <Employee name="manish" age={21}/>
        <Hello/>
         </div>
    )
  }
}

export default App