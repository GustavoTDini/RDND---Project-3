import React, { Component } from "react"
import { connect } from 'react-redux'
import Question from "./Question";
import AnswQuestion from './AnswQuestion'
import EmptyList from './EmptyList'
import { createUnensweredList, createAnsweredList, createOrderedList } from '../Helpers/HelperFunctions'

class CardList extends Component {
  render() {
    console.log("hello")
    const { list, answeredList, unesweredList, myQuestions, questions } = this.props;
    let renderList = []

    // check which list wil be rendered and save in renderList
    if (list === 'unanswered') {
      if (unesweredList.length === 0) {
        renderList = <EmptyList />
      } else {
        renderList = unesweredList.map((item) =>
          <Question
            key={item}
            question={item}
            userId={questions[item].author} />);
      }
    } else if (list === 'questions') {
      if (answeredList.length === 0) {
        renderList = <EmptyList />
      } else {
        renderList = answeredList.map((item) =>
          <AnswQuestion
            key={item}
            question={item}
            answers={[questions[item].optionOne.text, questions[item].optionTwo.text]}
            userId={questions[item].author} 
            authedUserList={false}/>);
      }
    } else if (list === 'myquestions') {
      if (myQuestions.length === 0) {
        renderList = <EmptyList />
      } else {
        renderList = myQuestions.map((item) =>
          <AnswQuestion
            key={item}
            question={item}
            answers={[questions[item].optionOne.text, questions[item].optionTwo.text]}
            userId={questions[item].author}
            noButton={true}/>);
      }
    }

    return (
      <ul>
        {renderList}
      </ul>
    )
  }
}

function mapStateToProps(state, { authedUser }) {
  //get all possible lists from the Store
  if (state.authedUser !== null) {
    return {
      answeredList: createOrderedList(createAnsweredList(state.users[state.authedUser].answers), state.questions),
      unesweredList: createOrderedList(createUnensweredList( state.questions, state.users[state.authedUser].answers), state.questions),
      myQuestions: state.users[state.authedUser].questions,
      questions: state.questions,
    }
  }
  return {}
}

export default connect(mapStateToProps)(CardList)