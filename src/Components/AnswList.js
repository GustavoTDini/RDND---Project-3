import React, { Component } from "react"
import { Redirect } from "react-router-dom"

class AnswList extends Component{

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

    console.log(this.props)

    if (this.state.questionInfo){
      return <Redirect
      to={{
        pathname: `/question/${this.props.question}`,
        state: { infoType: 'answered', questionId: this.props.question}
      }}
      push/>
    }


    return(
      <div 
        className='question-card shadow clickable'
        onClick={(e) => this.handleCheckInfo(e)}>
      <div className='card-content'>
        < span>You would rather do..</ span>
        <div className={this.props.option === 'optionOne' ? 'answer-one' : 'answer-two'}>{this.props.answer}</div>
      </div>
    </div>
    )
  }
}

export default AnswList;