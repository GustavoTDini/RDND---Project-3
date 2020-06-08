import React, { Component } from "react"
import { connect } from 'react-redux'
import { formatLeaderboard } from '../Helpers/HelperFunctions'


class Leaderboard extends Component {

  render() {
    const { leaders } = this.props
    return (
      <ul>
        {leaders.map((user) => (
          <div key={user.id} className='question-card shadow  '>
            <div className="card-avatar">
              <h2>{user.name}</h2>
              <img className='avatar-img' src={user.avatar} alt='avatar' />
              {user.trophy !== null && 
              <img className='medal' src={user.trophy} alt='rank medal' />}
            </div>
            <div className='card-content score-content'>
              <div className="card-points">
                <h3>Questions Asked</h3>
                <div className="points-pill">
                  <span>{user.questionMade}</span>
                </div>
                <h3>Questions Answered</h3>
                <div className="points-pill">
                  <span>{user.answeredQuestions}</span>
                </div>
              </div>
              <div className="card-avatar">
                <h2>Total</h2>
                <div className='total-points'>
                  <span>{user.totalPoints}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </ul>
    )
  }
}

function mapStateToProps(state, { authedUser }) {
  // Get the current leader List based on the store
  if (authedUser !== null) {
    return {
      leaders: formatLeaderboard(state.users),
    }
  }
  return {}
}

export default connect(mapStateToProps)(Leaderboard);
