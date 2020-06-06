import React, { Component } from "react"
import { connect } from 'react-redux'
import { handleAddNewUser } from "../actions/users"
import avatarsArray from '../Helpers/avatarImages';
import { Redirect } from "react-router-dom";

class NewUser extends Component {

  state = {
    name: '',
    login: '',
    password: '',
    passwordConfirm: '',
    avatarURL:avatarsArray[0],
    selectedAvatar:0,
    newUserCreated: false
  }

  handleChangeName = (e) => {
    const text = e.target.value

    this.setState(() => ({
      name: text
    }))
  }

  handleChangeLogin = (e) => {
    const text = e.target.value

    this.setState(() => ({
      login: text
    }))
  }

  handleChangePassword = (e) => {
    const text = e.target.value

    this.setState(() => ({
      password: text
    }))
  }

  handleConfirmPassword = (e) => {
    const text = e.target.value

    this.setState(() => ({
      passwordConfirm: text
    }))
  }

  handleChangeAvatar = (e, up) => {
    e.preventDefault()
    const { selectedAvatar } = this.state
    let newAvatar = selectedAvatar
    if( up === true){
      if (newAvatar === 15){
        newAvatar = 0
      } else{
        newAvatar = newAvatar + 1
      }
    } else {
      if (newAvatar === 0){
        newAvatar = 15
      } else{
        newAvatar = newAvatar - 1
      }
    }
    this.setState(() => ({
      selectedAvatar: newAvatar,
      avatarURL:avatarsArray[newAvatar],
    }))
  }

  handleSubmitCreateNewUser = (e) => {
    e.preventDefault()
    const { name, password, login, passwordConfirm, avatarURL } = this.state
    const { dispatch } = this.props
    console.log(name)
    if ( passwordConfirm === password){
      dispatch(handleAddNewUser(login, name, password,avatarURL ))
      this.setState(() => ({
        newUserCreated: true
      }))
    } else{
      alert("Please confirm your password")
    }
    
  }

  render() {

    if (this.state.newUserCreated){
      return <Redirect to="/login" push />
    }

    return (
      <div className='login-box shadow'>
        <h1 className='login-title'>Select Your Avatar</h1>
        <div className='avatar-carrousel'>
          <button
            onClick={(e) => this.handleChangeAvatar(e, false)}>-</button>
          <img className='avatar-img' src={this.state.avatarURL} alt='select avatar' />
          <button
            onClick={(e) => this.handleChangeAvatar(e, true)}>+</button>
        </div>
        <h1>Create new User</h1>
        <form className='login-form'>
          <p>User Name:</p>
          <input
            className="login-input"
            type='text'
            value={this.state.name}
            placeholder='Select Your Name'
            onChange={(e) => this.handleChangeName(e)}/>
          <p>Login Id:</p>
          <input
            className="login-input"
            type='text'
            value={this.state.login}
            placeholder='Select Your Login'
            onChange={(e) => this.handleChangeLogin(e)}/>
          <p>Password:</p>
          <input
            className="login-input"
            type='password'
            value={this.state.password}
            placeholder='Select Your Password'
            onChange={(e) => this.handleChangePassword(e)}/>
          <input
            className="login-input"
            type='password'
            value={this.state.passwordConfirm}
            placeholder='Confirm Password'
            onChange={(e) => this.handleConfirmPassword(e)}/>
          <button
            onClick={(e) => this.handleSubmitCreateNewUser(e)}
            className="login-button">Create User</button>
        </form>
      </div>
    )
  }
}


export default connect()(NewUser);