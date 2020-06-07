import React, { Component } from "react"
import { connect } from 'react-redux'
import { handleAddAnswerToQuestion } from "../actions/shared"

class Question extends Component{
  state = {
    selectedAnswer: ''
  }

  handleSelectOption = (e, value) => {
    e.preventDefault()

    this.setState(() =>({
      selectedAnswer: value
    }))
  }

  handleChooseOption = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddAnswerToQuestion(this.props.question.id, this.state.selectedAnswer))
  }

  render(){
    const { selectedAnswer } = this.state
    const { user, question } = this.props

    return(
      <div className='question-card shadow'>
      <div className="card-avatar">
        <h2>{`${user.name} asks`}</h2>
        <img className='avatar-img' src={user.avatarURL} alt='Avatar'/>
      </div>
      <div className='card-content'>
        <h2>Would you rather...</h2>
        <div className={selectedAnswer === 'optionOne' ? 'selected' : ''}>
          <button 
            className="btn-one"
            onClick={(e)=> this.handleSelectOption(e, 'optionOne')}
            >{question.optionOne.text}</button>
        </div>
        < span>Or</ span>
        <div className={selectedAnswer === 'optionTwo' ? 'selected' : ''}>
          <button 
            className="btn-two"
            onClick={(e)=> this.handleSelectOption(e, 'optionTwo')}
            >{question.optionTwo.text}</button>
        </div>
        <button 
        className="confirm-btn"
        onClick={(e)=> this.handleChooseOption(e)}
        >Confirm</button>
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

export default connect(mapStateToProps)(Question);