import React, { Component } from "react"
import { connect } from 'react-redux'
import avatar from '../images/Avatar_13.svg'
import gold from '../images/gold.png'
import silver from '../images/silver.png'
import bronze from '../images/bronze.png'

class Leaderboard extends Component {
  render() {
    return (
      <ul>
        <div className='question-card shadow  '>
          <div className="card-avatar">
            <h2>Name</h2>
            <img src={avatar} alt='avatar' />
            <img className='medal' src={gold} alt='rank medal' />
          </div>
          <div className='card-content score-content'>
            <div className="card-points">
              <h3>Questions Asked</h3>
              <div className="points-pill">
                < span>9</ span>
              </div>
              <h3>Questions Answered</h3>
              <div className="points-pill">
                < span>5</ span>
              </div>
            </div>
            <div className="card-avatar">
              <h2>Total</h2>
              <div className='total-points'>
                < span>14</ span>
              </div>
            </div>
          </div>
        </div>
      </ul>
    )
  }
}

function mapStateToProps(state, { authedUser }) {
  if (authedUser !== null) {
    return {
      questions: state.questions,
    }
  }
  return {}
}

export default connect(mapStateToProps)(Leaderboard);
