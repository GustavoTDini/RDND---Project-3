import React, { Component } from "react"

class UnenswList extends Component{

  render(){
    return(
      <div className='question-card shadow  '>
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