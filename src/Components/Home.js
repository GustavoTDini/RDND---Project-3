import React, { Component } from "react"
import avatar from '../images/Avatar_13.svg'

class Home extends Component{
  render(){
    return(
      <div className='login-box shadow'>
      <h2>Name</h2>
      <img className = 'avatar-img' src={avatar} alt='avatar' />
      <div className="side-options">
        <button className="confirm-btn">Answered</button>
        <button className="confirm-btn">Unanswered</button>
      </div>
    </div>
    )
  }
}


export default Home;