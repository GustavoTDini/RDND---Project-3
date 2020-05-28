import React, { Component } from "react"
import avatar from '../images/Avatar_13.svg'
import gold from '../images/gold.png'

class Leaderboard extends Component{
  render(){
    return(
    <div className='question-card shadow red-border'>
      <div className="card-avatar">
        <h2>Name</h2>
        <img src={avatar} alt='avatar'/>
        <img className='medal' src={gold} alt='rank medal'/>
      </div>
      <div className='card-content score-content'>
        <div className="card-points">
          <h3>Questions Asked</h3>
          <div className="points-pill">
            <spam>9</spam>
          </div>
          <h3>Questions Answered</h3>
          <div className="points-pill">
            <spam>5</spam>
          </div>
        </div>
        <div className="card-avatar">
          <h2>Total</h2>
          <div className='total-points'>
            <spam>14</spam>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Leaderboard;
