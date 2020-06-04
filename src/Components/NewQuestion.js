import React, { Component } from "react"
import { connect } from 'react-redux'
import { handleAddQuestionAndUser } from "../actions/shared"

class NewQuestion extends Component{

  state ={
    optionOne: '',
    optionTwo: '',
  }

  handleChangeOptionOne = (e) => {
    const text = e.target.value

    this.setState(() =>({
      optionOne: text
    }))

  }

  handleChangeOptionTwo = (e) => {
    const text = e.target.value

    this.setState(() =>({
      optionTwo: text
    }))

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddQuestionAndUser(this.state.optionOne, this.state.optionTwo))
    this.setState(() =>({
      optionOne: '',
      optionTwo: ''
    }))
  }

  render(){
    return(
      <div className='question-card shadow  '>
      <div className='card-content'>
        <h2>Would you rather...</h2>
        <input 
          className="input-one" 
          placeholder="This?" 
          type='text'
          value={this.state.optionOne}
          onChange={(e) => this.handleChangeOptionOne(e)}/>
        < span>Or</ span>
        <input 
          className="input-two" 
          placeholder="That?" 
          type='text'
          value={this.state.optionTwo}
          onChange={(e) => this.handleChangeOptionTwo(e)}/>
        <button 
          className="confirm-btn"
          onClick={(e) => this.handleSubmit(e)}
          >Ask</button>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  if (state.authedUser !== null) {
    return {
      authedUser: state.authedUser,
    }
  }
  return {}
}


export default connect(mapStateToProps)(NewQuestion);