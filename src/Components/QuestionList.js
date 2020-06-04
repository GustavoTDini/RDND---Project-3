import React, { Component } from "react"
import AnswList from "./AnswList"
import UnenswList from "./UnenswList"
import { connect } from  'react-redux'

class QuestionList extends Component{
  render(){
    const { listType, list, answers , questions} = this.props;
    let renderList = []

    if (listType === 'unanswered') {
      renderList = list.map((item) => 
      <UnenswList 
        key={item.id} 
        question ={item} 
        answers = {[questions[item].optionOne.text, questions[item].optionTwo.text]} 
        userId ={questions[item].user}/>);
    } else {
      renderList = list.map((item) => 
      <AnswList
        key={item.id}
        option={answers[item]} 
        answer={questions[item][answers[item]].text}/>);
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
      questions: state.questions,
      answers: state.users[state.authedUser].answers
    }
  }
  return {}
}

export default connect(mapStateToProps)(QuestionList);