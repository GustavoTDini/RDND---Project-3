import React, { Component } from "react"
import { connect } from 'react-redux'
import QuestionList from "./QuestionList"
import { createUnensweredList, createAnsweredList } from '../Helpers/HelperFunctions'

class Home extends Component {
  state = { 
    listType: 'unanswered',
    list: []
  }

  componentDidMount(){
    this.setState(() => ({
      listType: 'unanswered',
      list: this.props.unesweredList
    }))
  }

  handleAnswerButton = (e) => {
    e.preventDefault()
    this.setState(() => ({
      listType: 'answered',
      list: this.props.answeredList
    }))
  }

  handleUnenswerButton = (e) => {
    e.preventDefault()
    this.setState(() => ({
      listType: 'unanswered',
      list: this.props.unesweredList
    }))
  }

  render() {
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
  if (state.authedUser !== null) {
    return {
      user: state.users[state.authedUser],
      answeredList: createAnsweredList(state.users[state.authedUser].answers),
      unesweredList: createUnensweredList( state.questions, state.users[state.authedUser].answers)
    }
  }
  return {}
}

export default connect(mapStateToProps)(Home);