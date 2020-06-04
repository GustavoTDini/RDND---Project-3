import React, { Component } from "react"
import { connect } from 'react-redux'

class Question extends Component{
  render(){
    return(
      <div className='question-card shadow  '>
      <div className="card-avatar">
        <h2>{`${this.props.user.name} asks`}</h2>
        <img className='avatar-img' src={this.props.user.avatarURL} alt='Avatar'/>
      </div>
      <div className='card-content'>
        <h2>Would you rather...</h2>
        <button 
          className="btn-one">{this.props.question.optionOne.text}</button>
        < span>Or</ span>
        <button 
          className="btn-two">{this.props.question.optionOne.text}</button>
        <button className="confirm-btn">Confirm</button>
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