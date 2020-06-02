import React, { Component } from "react"
import avatar from '../images/Avatar_13.svg'

class AnswQuestion extends Component{
  render(){
    return(
      <div className='question-card shadow  '>
      <div className="card-avatar">
        <h2>Someone Asked</h2>
        <img src={avatar} alt='Avatar'/>
      </div>
      <div className='card-content'>
        <h2>Results</h2>
        <span>Your Choice</span>
        <div className="answer-one selected">
          Option One
          <div className='percentage-bar'>
            <div className='percentage-bar-one'>30%</div>
          </div>
        </div>
        <div className="answer-two">
          Option Two
          <div className='percentage-bar'>
            <div className='percentage-bar-two'>70%</div>
          </div>
        </div>
        <button className="confirm-btn">Change</button>
      </div>
    </div>
    )
  }
}


export default AnswQuestion;