import React, { Component } from 'react'

export class Form extends Component {
  state = {
    title: '',
    fname: '',
    lname: '',
    date: '',
    email: '',
    submit: false
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleRegister = () => {  
    this.setState({submit: true })
   }
   handleReset=()=>{
     this.setState({title:'',fname:'',lname:'',date:'',email:''})
   }
  render() {
    return (
        <div>
        <div>{!this.state.submit && (
          <div className=' w-50 m-5 p-3 border border-3 border-dark'>
            <form className='row'>
              <div className='col-2'>
                <label>TITLE</label><br />
                <select className='form-select' name="title" onChange={this.handleChange} value={this.state.title}>
                  <option></option>
                  <option>MR.</option>
                  <option>MS.</option>
                </select>
              </div>
              <div className='col-5'>
                <label>FIRST NAME</label>
                <input type='text' className='form-control' name='fname' onChange={this.handleChange} value={this.state.fname}></input>
              </div>
              <div className='col-5'>
                <lable>LAST NAME</lable>
                <input type='text' className='form-control' name='lname' onChange={this.handleChange} value={this.state.lname}></input>
              </div>
              <div className='col-6'>
                <label> DATE OF BIRTH</label>
                <input type='date' className='form-control' name='date' onChange={this.handleChange} value={this.state.date}></input>
              </div>
              <div className='col-6'>
                <label>EMAIL</label>
                <input type='text' className='form-control' name='email' onChange={this.handleChange} value={this.state.email} ></input>
              </div>
              <div className='col-7'>
                <label>PASSWORD</label>
                <input type='text' className='form-control' ></input>
              </div>
              <div className='col-5'>
                <label>CONFIRMPASSWORD</label>
                <input type='text' className='form-control'></input>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Accept Terms and Condition
                </label>
              </div>

              <button class="col-2 btn btn-primary" onClick={this.handleRegister}>Register</button>
              <button class="col-2 btn btn-secondary" onClick={this.handleReset}>Reset</button>
            </form>
          </div>)}
          {this.state.submit && (
            <div>
              
              <div>Name:{this.state.title}{this.state.fname} {this.state.lname}</div>
              <div>DATE OF BIRTH:{this.state.date}</div>
              <div>EMAIL:{this.state.email}</div>
              </div>)}
          </div>
          </div>
        )
  }
}

        export default Form