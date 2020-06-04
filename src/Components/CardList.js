import React, { Component } from "react"
import { connect } from  'react-redux'
import Question from "./Question";
import AnswQuestion from './AnswQuestion'
import { createUnensweredList, createAnsweredList } from '../Helpers/HelperFunctions'

class CardList extends Component{
  render(){
    const { list, answeredList, unesweredList , myQuestions , questions } = this.props;
    let renderList = []

    if (list === 'unanswered') {
      renderList = unesweredList.map((item) => 
      <Question 
        key={item} 
        question = {item}
        userId = {questions[item].author}/>);
    } else if (list === 'questions'){
      renderList = answeredList.map((item) => 
      <AnswQuestion 
        key={item} 
        question ={item} 
        answers = {[questions[item].optionOne.text, questions[item].optionTwo.text]} 
        userId = {questions[item].author}/>);
    } else if (list === 'myquestions'){
      renderList = myQuestions.map((item) => 
      <AnswQuestion 
        key={item} 
        question ={item} 
        answers = {[questions[item].optionOne.text, questions[item].optionTwo.text]} 
        userId = {questions[item].author}/>);
    }

    return(
      <ul>
        {renderList}
      </ul>
    )
  }
}

function mapStateToProps(state, { authedUser }) {
  if (authedUser !== null) {
    return {
      answeredList: createAnsweredList(state.users[state.authedUser].answers),
      unesweredList: createUnensweredList( state.questions, state.users[state.authedUser].answers),
      myQuestions: state.users[state.authedUser].questions,
      questions: state.questions,
    }
  }
  return {}
}

export default connect(mapStateToProps)(CardList)