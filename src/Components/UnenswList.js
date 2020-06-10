import React, { Component } from "react"
import { Redirect } from "react-router-dom"

class UnenswList extends Component{

  state = {
    questionInfo :false
  }

  /* Dispatch the changind answer and set changeAnswer to true*/
  handleCheckInfo = (e) => {
    e.preventDefault()
    this.setState({
      questionInfo: true
    })
  }

  render(){

    if (this.state.questionInfo){
      return <Redirect
      to={{
        pathname: `/question/${this.props.question.id}`,
        state: { infoType: 'unanswered', questionId: this.props.question }
      }}
      push/>
    }

    return(
      <div 
      className='question-card shadow clickable'
      onClick={(e) => this.handleCheckInfo(e)}>
      <div className='card-content'>
        < span>You Would rather..</ span>
        <div className='side-options'>
          <div className="answer-one">{this.props.answers[0]}</div>
          < span>Or</ span>
          <div className="answer-two">{this.props.answers[1]}</div>
        </div>
      </div>
    </div>
    )
  }
}

export default UnenswList;