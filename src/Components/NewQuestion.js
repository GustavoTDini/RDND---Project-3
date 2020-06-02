import React, { Component } from "react"

class NewQuestion extends Component{
  render(){
    return(
      <div className='question-card shadow  '>
      <div className='card-content'>
        <h2>Would you rather...</h2>
        <input className="input-one" placeholder="This?" />
        < span>Or</ span>
        <input className="input-two" placeholder="That?" />
        <button className="confirm-btn">Ask</button>
      </div>
    </div>
    )
  }
}


export default NewQuestion;