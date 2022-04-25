import React, { Component } from 'react'

export class Catchild extends Component {

    state={
        showInfo:false
    }
    handleshow=(e)=>{this.setState({showInfo:!this.state.showInfo})}
  render() {
    return (
      <div className='b'>
          <div className='shadow-lg bg-gray'><h3>{this.props.title}
           <button className='d  rounded-circle' onClick={this.handleshow}>{this.state.showInfo?'-':'+'}
           </button></h3></div>
          {
              this.state.showInfo &&<div className='t'>
              {this.props.info}</div>
          }
      </div>
    )
  }
}

export default Catchild