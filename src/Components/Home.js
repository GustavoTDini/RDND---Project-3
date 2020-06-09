import React, { Component } from "react"
import { connect } from 'react-redux'
import QuestionList from "./QuestionList"
import { createUnensweredList, createAnsweredList, createOrderedList } from '../Helpers/HelperFunctions'

class Home extends Component {
  state = { 
    listType: 'unanswered',
    list: []
  }

  // set the initial list as unanswered and populate it
  componentDidMount(){
    this.setState(() => ({
      listType: 'unanswered',
      list: this.props.unesweredList
    }))
  }

  // set list to answered
  handleAnswerButton = (e) => {
    e.preventDefault()
    this.setState(() => ({
      listType: 'answered',
      list: this.props.answeredList
    }))
  }

  // set list to unanswered
  handleUnenswerButton = (e) => {
    e.preventDefault()
    this.setState(() => ({
      listType: 'unanswered',
      list: this.props.unesweredList
    }))
  }

  render() {
    console.log(this.props.unesweredList)
    console.log(this.props.answeredList)
    return (
      <div>
        <div className='login-box shadow'>
          <h2>{this.props.user.name}</h2>
          <img className='avatar-img' src={this.props.user.avatarURL} alt='avatar' />
          <div className="side-options">
            <button 
              className="confirm-btn"
              onClick={(e) => this.handleAnswerButton(e)}
              >Answered</button>
            <button 
              className="confirm-btn"
              onClick={(e) => this.handleUnenswerButton(e)}
              >Unanswered</button>
          </div>
        </div>
        <QuestionList listType = {this.state.listType} list = {this.state.list}/>
      </div>

    )
  }
}

function mapStateToProps(state) {
  // get the user and create the answered and unanswered list
  if (state.authedUser !== null) {
    return {
      user: state.users[state.authedUser],
      answeredList: createOrderedList(createAnsweredList(state.users[state.authedUser].answers), state.questions),
      unesweredList: createOrderedList(createUnensweredList( state.questions, state.users[state.authedUser].answers), state.questions)
    }
  }
  return {}
}

export default connect(mapStateToProps)(Home);