import React, { Component } from "react"
import avatar from '../images/Avatar_13.svg'

class Question extends Component{
  render(){
    return(
      <div className='question-card shadow  '>
      <div className="card-avatar">
        <h2>Someone Asks</h2>
        <img src={avatar} alt='Avatar'/>
      </div>
      <div className='card-content'>
        <h2>Would you rather...</h2>
        <button className="btn-one selected">Option One</button>
        < span>Or</ span>
        <button className="btn-two">Option Two</button>
        <button className="confirm-btn">Confirm</button>
      </div>
    </div>
    )
  }
}


export default Question;