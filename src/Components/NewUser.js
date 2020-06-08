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

  /* handle the avatar carrousel, up define if iis going up or dowm os the array, test if the array to circle it*/
  handleChangeAvatar = (e, up) => {
    e.preventDefault()
    const { selectedAvatar } = this.state
    let newAvatar = selectedAvatar
    if( up === true){
      if (newAvatar === avatarsArray.length - 1){
        newAvatar = 0
      } else{
        newAvatar = newAvatar + 1
      }
    } else {
      if (newAvatar === 0){
        newAvatar = avatarsArray.length - 1
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
    // in this method I test if nothing is null or empty, and if the password is repeated, the rest of the tests is made in the middleware
    const { name, password, login, passwordConfirm, avatarURL } = this.state
    const { dispatch } = this.props
    if (name === '' || name === null || login === '' || login === null) {
      return alert("Please enter a valid name and login!")
    } 
    if ( passwordConfirm === password){
      dispatch(handleAddNewUser(login, name, password,avatarURL ))
      this.setState(() => ({
        newUserCreated: true
      }))
    } else{
      alert("Please confirm your password!")
    }
    
  }

  render() {

    // check if newUserCreated is true to redirect
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