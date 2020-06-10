import React, { Component } from "react"
import { connect } from 'react-redux'
import { handleAddAnswerToQuestion } from "../actions/shared"
import { Redirect } from 'react-router-dom'

class Question extends Component{
  state = {
    selectedAnswer: '',
    selectedQuestionToVote: false,
    questionVoted: false,
  }

  handleSelectOption = (e, value) => {
    e.preventDefault()
    this.setState(() =>({
      selectedAnswer: value
    }))
  }

  handleChooseOption = (e) => {
    e.preventDefault()

    // if this component is rendering from a call to vote, so we can vote
    if (this.props.voting){
      // test if the user selected at least one option, if ok dispatch handleAddAnswerToQuestion
      if(this.state.selectedAnswer === ''){
        alert("Please Choose an answer!")
      } else{
        this.props.dispatch(handleAddAnswerToQuestion(this.props.question.id, this.state.selectedAnswer))
        this.setState(() =>({
          questionVoted: true
        }))
      }
    } else {
      // if it´s not to vote, we must direct the user to the voting component
      this.setState(() =>({ 
        selectedQuestionToVote: true
      }))
    }
    
  }

  render(){
    const { selectedAnswer } = this.state
    const { user, question } = this.props

    // check if selectedQuestionToVote is true to redirect, and set as a props this questionId
    if (this.state.selectedQuestionToVote){
      return <Redirect
      to={{
        pathname: `/question/${this.props.question.id}`,
        state: { infoType: 'toVote', questionId: this.props.question.id }
      }}
      push/>
    }

    // check if questionVoted is true to redirect
    if (this.state.questionVoted){
      return <Redirect
      to='/questionList/'
      push/>
    }

    return(
      <div className='question-card shadow'>
      <div className="card-avatar">
        <h2>{`${user.name} asks`}</h2>
        <img className='avatar-img' src={user.avatarURL} alt='Avatar'/>
      </div>
      <div className='card-content'>
        <h2>Would you rather...</h2>
        <div className={selectedAnswer === 'optionOne' ? 'selected' : ''}>
          {this.props.voting ? 
            <button
            className="btn-one"
            onClick={(e)=> this.handleSelectOption(e, 'optionOne')}
            >{question.optionOne.text}</button>
          :
          <div className='answer-one'>{question.optionOne.text}</div>
          }
        </div>
        < span>Or</ span>
        <div className={selectedAnswer === 'optionTwo' ? 'selected' : ''}>
        {this.props.voting ? 
            <button
            className="btn-two"
            onClick={(e)=> this.handleSelectOption(e, 'optionTwo')}
            >{question.optionTwo.text}</button>
          :
          <div className='answer-two'>{question.optionTwo.text}</div>
        }
        </div>
        <button 
        className="confirm-btn"
        onClick={(e)=> this.handleChooseOption(e)}
        >{this.props.voting? 'Confirm' : 'Vote'}</button>
      </div>
    </div>
    )
  }
}

// we check if the component is coming from a list or a redirect to get the apropriate data
function mapStateToProps(state, props) {
  let question;
  let user;
  if (props.location){
    question = state.questions[props.location.state.questionId]
    user = state.users[question.author]
  } else{
    question = state.questions[props.question]
    user = state.users[props.userId]
  }

  if (state.authedUser !== null) {
    return {
      user: user,
      question: question,
    }
  }
  return {}
}

export default connect(mapStateToProps)(Question);