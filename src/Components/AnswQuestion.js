import React, { Component } from "react"
import { connect } from 'react-redux'
import { formatPercent } from "../Helpers/HelperFunctions"

class AnswQuestion extends Component{
  
  render(){
    const { user, question } = this.props
    let optionOne = question.optionOne.votes.length
    let optionTwo = question.optionTwo.votes.length
    let total = optionOne + optionTwo
    let percentileOne = formatPercent(total,optionOne) + '%'
    let percentileTwo = formatPercent(total,optionTwo) + '%'
    return(
      <div className='question-card shadow  '>
      <div className="card-avatar">
        <h2>{`${user.name} asked...`}</h2>
        <img className='avatar-img' src={user.avatarURL} alt='Avatar'/>
      </div>
      <div className='card-content'>
        <h2>Results</h2>
        {user.answers[question.id] === 'optionOne' && <span>Your Choice</span>}
        <div className={user.answers[question.id] === 'optionOne' ? 'answer-one selected' : 'answer-one'}>
          {question.optionOne.text}
          <div className='percentage-bar'>
            <div className='percentage-bar-one' style={{width : percentileOne}}>{percentileOne}</div>
          </div>
          <span>{`${optionOne} of ${total} chose this`}</span>
        </div>
        {user.answers[question.id] === 'optionTwo' && <span>Your Choice</span>}
        <div className={user.answers[question.id] === 'optionTwo' ? 'answer-two selected' : 'answer-two'}>
        {question.optionTwo.text}
          <div className='percentage-bar'>
            <div className='percentage-bar-two' style={{width : percentileTwo}}>{percentileTwo}</div>
          </div>
          <span>{`${optionTwo} of ${total} chose this`}</span>
        </div>
        <button
        className="confirm-btn">Change</button>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state, props) {
  if (state.authedUser !== null) {
    return {
      user: state.users[props.userId],
      question: state.questions[props.question]
    }
  }
  return {}
}

export default connect(mapStateToProps)(AnswQuestion);