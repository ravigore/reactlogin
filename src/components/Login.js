import React, {Component} from 'react'
import { formValid ,LoginValidate} from '../helpers/Validation';
import { history } from '../helpers/History';

export default class Login extends Component {
   state =  {
    inputData:{
    username: '',
    password: ''
    },
    validCheck:{
      username: '',
      password: ''
    }
}
  valueChanged = (e)=> {
   const {name, value} = e.target;
   let validCheck = LoginValidate(name,value,{ ...this.state.validCheck })
   let inputData = {...this.state.inputData};
   inputData[name] = value
   this.setState({inputData,validCheck});
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    var result = formValid(this.state)
    let inputData = {...this.state.inputData};
    var validCheck = result[1]
    this.setState({inputData,validCheck});
    if (result[0]) {
      alert("Login Success")
      localStorage.setItem("username","Ravindra");
      history.push("/");
    } else {
      alert("Login Failed")
    }
  }
  render() {
    const { validCheck } = this.state;
    return (
        <div className="bkcolor">
        <div className='row vertical-center'>
          <div className="col-10 col-md-8 col-lg-4 mx-auto">
            <form onSubmit={this.handleSubmit} className="form-wrapper" noValidate>
              <h2>Login</h2>
              <div className='form-group'>
                <label>Email address</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter email address"
                  onChange={this.valueChanged}
                  noValidate
                  />
              {validCheck.username.length > 0 && (
                <div className="error">{validCheck.username}</div>
              )}
                 </div>
                <div className='form-group'>
                <label >Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.valueChanged}
                  noValidate
                  />
              {validCheck.password.length > 0 && (
                <div className="error">{validCheck.password}</div>
              )}
              </div>
              <button type="submit" className='submit mt-2'>Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}