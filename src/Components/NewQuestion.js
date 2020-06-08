import React, { Component } from "react"
import { connect } from 'react-redux'
import { handleAddQuestionAndUser } from "../actions/shared"
import { Redirect } from "react-router-dom";

class NewQuestion extends Component{

  state ={
    optionOne: '',
    optionTwo: '',
    newQuestionCreated: false,
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
    //test if the user actually wrote something on the options to submit
    if (this.state.optionOne === '' || this.state.optionTwo === ''){
      alert('Please choose a Valid Option')
    } else{
          this.props.dispatch(handleAddQuestionAndUser(this.state.optionOne, this.state.optionTwo))
      this.setState({
        optionOne: '',
        optionTwo: '',
        newQuestionCreated: true
      })
    }
  }

  render(){

    // check if newQuestionCreated is true to redirect
    if (this.state.newQuestionCreated){
      return <Redirect
        to= '/myquestionsList/'
        push />
    }

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