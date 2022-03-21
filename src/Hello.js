import React, { Component } from 'react'

export class Hello extends Component {
    state={name:'WELCOME'}
    handlechange=()=>{
        if(this.state.name==="WELCOME"){
            this.setState({name:'hellowworld'})
        }
        else{
            this.setState({name:"welcome"})
        }
    }
  render() {
    return (
      <div> {this.state.name}
          <button onClick={this.handlechange}>click</button>     
            </div>
    )
  }
}

export default Hello