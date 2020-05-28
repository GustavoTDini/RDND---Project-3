import React, { Component } from "react"
import react_redux_logo from '../images/react-redux.png'

class Login extends Component{
  render(){
    return(
      <div className='login-box shadow'>
      <h1 className='login-title'>Would you rather?</h1>
      <img className='login-img' src={react_redux_logo} alt = 'react e redux logo' />
      <h1>Login</h1>
        <form className='login-form'>
          <p>User Name:</p>
          <input className="login-input" type='text' />
          <p>Password:</p>
          <input className="login-input" type='password' />
          <button className="login-button">Sign In</button>
        </form>
    </div>
    )
  }
}


export default Login;