import React, { Component } from 'react'

export class Vote extends Component {
    state={
        count:0,
    }
    handleincrement=()=>{this.setState({count:this.state.count+1})}
    
  render() {
    return (
        <div> 
            {this.props.title}
            <span>{this.state.count}</span>
        <button onClick={this.handleincrement}>Vote</button>
        </div>
    
    )
  }
}

export default Vote