import React, { Component } from 'react'

export class Employee extends Component {
  render() {
    return (
      <div>Employee Name: {this.props.name}<br/>
      Employee age: {this.props.age}</div>
    )
  }
}

export default Employee