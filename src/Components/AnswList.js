import React, { Component } from "react"

class QuestionList extends Component{
  render(){
    return(
      <div className='question-card shadow'>
      <div className='card-content'>
        < span>You would rather do..</ span>
        <div className={this.props.option === 'optionOne' ? 'answer-one' : 'answer-two'}>{this.props.answer}</div>
      </div>
    </div>
    )
  }
}

export default QuestionList;