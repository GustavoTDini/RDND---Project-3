import React, { Component } from "react"
import { setAuthedUser } from '../actions/authedUser'
import react_redux_logo from '../images/react-redux.png'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class Login extends Component{

  state ={
    name: '',
    password: '',
    newUser: false
  }

  handleChangeName = (e) => {
    const text = e.target.value

    this.setState(() =>({
      name: text
    }))
  }

  handleChangePassword = (e) => {
    const text = e.target.value

    this.setState(() =>({
      password: text
    }))
  }

  handleSubmitLogin = (e) => {
    e.preventDefault()
    const { name, password } = this.state
    const { dispatch } = this.props
    this.setState(() =>({
      name: '',
      password: ''
    }))
    dispatch(setAuthedUser(name, password))
  }

  handleNavToNewUser = (e) =>{
    e.preventDefault()
    this.setState(() =>({
      newUser: true
    }))
  }

  render(){

    if (this.state.newUser){
      return <Redirect to="/newUser" push />
    }

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
            value={this.state.name}
            placeholder='Your Name'
            onChange={(e)=> this.handleChangeName(e)}/>
          <p>Password:</p>
          <input 
            className="login-input" 
            type='password'
            value={this.state.password}
            placeholder='Your Password'
            onChange={(e)=> this.handleChangePassword(e)}/>
          <button
            onClick={(e)=> this.handleSubmitLogin(e)}
            className="login-button">Sign In</button>
        </form>
        <button
            onClick={(e)=> this.handleNavToNewUser(e)}
            className="login-button">New User</button>
    </div>
    )
  }
}


export default connect()(Login);