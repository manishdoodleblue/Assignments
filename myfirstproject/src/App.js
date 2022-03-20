import React, { Component } from 'react'
import Print from './Print'
import Student from './Student'
import Count from './Count'
import Form from'./Form'
import Register from './Register'

export class App extends Component {
  render() {
    return (
      <div>
          <Print/>
          <Student/>
          <Count/>
          <Form/>
          <Register/>
          
      </div>
    )
  }
}

export default App