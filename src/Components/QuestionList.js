import React, { Component } from "react"
import AnswList from "./AnswList"
import UnenswList from "./UnenswList"
import { connect } from  'react-redux'
import EmptyList from './EmptyList'

class QuestionList extends Component{
  render(){
    const { listType, list, answers , questions} = this.props;
    let renderList = []

    // check which list wil be rendered and save in renderList
    if (listType === 'unanswered') {
      if (list.length === 0) {
        renderList = <EmptyList />
      } else {
        renderList = list.map((item) =>
        <UnenswList 
          key={item} 
          question ={item} 
          answers = {[questions[item].optionOne.text, questions[item].optionTwo.text]} 
          userId ={questions[item].user}/>);
      }
    } else if (listType === 'answered'){
      if (list.length === 0) {
        renderList = <EmptyList />
      } else {
        renderList = list.map((item) => 
        <AnswList
          key={item}
          question={item}
          option={answers[item]} 
          answer={questions[item][answers[item]].text}/>);
      }
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