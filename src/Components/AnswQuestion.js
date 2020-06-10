import React, { Component } from "react"
import { connect } from 'react-redux'
import { formatPercent } from "../Helpers/HelperFunctions"
import { Redirect } from "react-router-dom";
import { handleDeleteAnswerToQuestion } from "../actions/shared";

class AnswQuestion extends Component{

  state = {
    changeAnswer:false
  }

  /* Dispatch the changind answer and set changeAnswer to true*/
  handleChangeAnswer = (e) => {
    e.preventDefault()
    const { question, authedUser } = this.props
    this.props.dispatch(handleDeleteAnswerToQuestion(question.id, authedUser.answers[question.id]))
    this.setState({
      changeAnswer: true
    })
  }
  
  render(){

    /* Test if there´s a change in the vote to redirect to the list */
    if (this.state.changeAnswer){
      return <Redirect
      to={{
        pathname: `/question/${this.props.question.id}`,
        state: { infoType: 'toVote', questionId: this.props.question.id }
      }}
      push/>
    }

    /*Calculate the percentagem prior to rendering*/
    const { user, question , authedUser} = this.props
    let optionOne = question.optionOne.votes.length
    let optionTwo = question.optionTwo.votes.length
    let total = optionOne + optionTwo
    let percentileOne = formatPercent(total,optionOne).toFixed(2) + '%'
    let percentileTwo = formatPercent(total,optionTwo).toFixed(2) + '%'
    return(
      <div className='question-card shadow  '>
      <div className="card-avatar">
        <h2>{`${user.name} asked...`}</h2>
        <img className='avatar-img' src={user.avatarURL} alt='Avatar'/>
      </div>
      <div className='card-content'>
        <h2>Results</h2>
        {authedUser.answers[question.id] === 'optionOne' && <span>Your Choice</span>}
        <div className={authedUser.answers[question.id] === 'optionOne' ? 'answer-one selected' : 'answer-one'}>
          {question.optionOne.text}
          <div className='percentage-bar'>
            <div className='percentage-bar-one' style={{width : percentileOne}}>{percentileOne}</div>
          </div>
          <span>{`${optionOne} of ${total} chose this`}</span>
        </div>
        {authedUser.answers[question.id] === 'optionTwo' && <span>Your Choice</span>}
        <div className={authedUser.answers[question.id] === 'optionTwo' ? 'answer-two selected' : 'answer-two'}>
        {question.optionTwo.text}
          <div className='percentage-bar'>
            <div className='percentage-bar-two' style={{width : percentileTwo}}>{percentileTwo}</div>
          </div>
          <span>{`${optionTwo} of ${total} chose this`}</span>
        </div>
        {this.props.noButton ? null : 
        <button
        className="confirm-btn"
        onClick={(e) => this.handleChangeAnswer(e)}>Change</button>}
      </div>
    </div>
    )
  }
}

/*The mapsStateToProps test if the component is rendering from the list or to vote, and use the correct data*/
function mapStateToProps(state, props) {
  if (state.authedUser !== null) {
    return {
      user: state.users[props.userId],
      question: state.questions[props.question],
      authedUser: state.users[state.authedUser]
    }
  }
  return {}
}

export default connect(mapStateToProps)(AnswQuestion);