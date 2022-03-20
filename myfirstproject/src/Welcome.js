import React, { Component } from 'react'
import './Wel.css'
 class Welcome extends Component {
  render() {
    return (
      <div>
          <h1><center>WELCOME!</center></h1>
          <div className="bb">
              <h2>ALREADY REGISTER ?</h2><h2>NEW CUSTOMER?</h2>
             
          </div>
          <div className='mm'>
          <h3><input type="text" placeholder='email adress'></input></h3><h3><input type="text" placeholder='email adrress'></input></h3>
          </div>
          <div className='cc'>
          <h3><input type="text" placeholder='password'></input></h3><h3><input type="text" placeholder='password'></input></h3>
          </div>
      </div>
    )
  }
}

export default Welcome
