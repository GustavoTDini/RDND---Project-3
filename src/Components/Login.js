import React, { Component } from "react"
import { setAuthedUser } from '../actions/authedUser'
import react_redux_logo from '../images/react-redux.png'
import { connect } from 'react-redux'

class Login extends Component{

  handleSubmitLogin = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.input.value, this.password.value))
  }

  render(){

    return(
      <div className='login-box shadow'>
      <h1 className='login-title'>Would you rather?</h1>
      <img className='login-img' src={react_redux_logo} alt = 'react e redux logo' />
      <h1>Login</h1>
        <form className='login-form'>
          <p>User Name:</p>
          <input 
            className="login-input" 
            type='text'
            ref={(input) => this.input = input}/>
          <p>Password:</p>
          <input 
            className="login-input" 
            type='password' 
            ref={(password) => this.password = password}/>
          <button
            onClick={this.handleSubmitLogin}
            className="login-button">Sign In</button>
        </form>
    </div>
    )
  }
}


export default connect()(Login);