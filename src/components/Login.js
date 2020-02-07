import React, {Component} from 'react'
export default class Login extends Component {
  state =  {
    username: '',
    password: '',
    submitted: false,
    loading: false,
    error: ''
  };
  handleChange = (e)=> {
    const {name, value} = e.target;
    console.log("HEre",e.target.name)
    this.setState({[name]: value});
    // this.validateForm()
  }
  validateForm = ()=> {
    let {username, password} = this.state;
    let errors = {};
    let formIsValid = true;
    if (!username) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(username)) {
        formIsValid = false;
        errors["username"] = "*Please enter valid email-ID.";
      }
    }else{
      errors["username"] =""
    }
    if (!password) {
      formIsValid = false;
      errors["password"] = "Please enter your username.";
    }else{
      errors["password"] =""
    }
    this.setState({
      error: errors
    });
    return formIsValid;
  }
  handleSubmit = (e)=> {
    e.preventDefault();
    if (this.validateForm()) {
     alert("Form submitted");
    }else{
      alert("Please use or pass");
    }
  }
  render() {
    const {username, password, submitted, error} = this.state;
    let  abc= '';
    if(!username){
      abc= (<div className="error">Password is required</div>);
    }
    if(username){
      abc= (<div className="error">Password is required</div>);
    }
    return (
      <div className="bkcolor">
        <div className='row vertical-center'>
          <div className="col-10 col-md-8 col-lg-4 mx-auto">
            <form onSubmit={this.handleSubmit} className="form-wrapper">
              <h2>Login</h2>
              <div className='form-group'>
                <label>Email address</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter email address"
                  value={this.state.username}
                  onChange={this.handleChange}/>
                 </div>
                {abc}
                <div className='form-group'>
                <label >Password</label>
                <input
                  type="password"
                  name=""
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handleChange}/>
                {abc}
                </div>
              <button type="submit" className='submit mt-2'>Login</button>
              {/* {error &&<div className={'alert alert-danger'}>{error}</div>} */}
            </form>
          </div>
        </div>

      </div>
    )
  }
}