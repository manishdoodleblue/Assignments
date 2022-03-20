import React, { Component } from 'react'
import './Student.css'
export class Student extends Component {
    state={
        name:'Manish',
        age:22
    }
  render() {
    return (
      <div>
         <p> My name is :<span className='m'>{this.state.name}</span> My age is:<span className ='s'>{this.state.age}</span></p>
      </div>
    )
  }
}

export default Student
