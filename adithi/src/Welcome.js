import React, { Component } from 'react'
 class Welcome extends Component {
  render() {
    return (
      <div className='text-center m-3 p-3'>
          <div className='text-center'><h1>WELCOME!</h1></div>
          <div className='d-flex justify-content-center'>
          <div>z
              <div><h4>ALREADY REGISTER ?</h4></div>
             <div> <input type="text" placeholder='email adress'></input></div>
              <div><input type="text" placeholder='password'></input></div>
              <button className="btn btn-success">SIGN IN</button>
              </div>
              <div className="border border-3 border-solid border-dark"></div>
            <div>
             <div> <h4>NEW CUSTOMER?</h4></div>
              <div><input type="text" placeholder='email adrress'></input></div>
              <div> <input type="text" placeholder='password'></input></div>
              <button className="btn btn-success">CREATE ACCOUNT</button>
               </div>
              </div>
          </div>
    )
  }
}
export default Welcome