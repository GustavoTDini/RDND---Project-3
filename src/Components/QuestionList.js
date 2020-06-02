import React, { Component } from "react"
import AnswList from "./AnswList"
import UnenswList from "./UnenswList"
import { connect } from  'react-redux'

class QuestionList extends Component{
  render(){
    const { listType, list, answers } = this.props;
    let renderList = []

    if (listType === 'unanswered') {
      renderList = list.map((item) => 
      <UnenswList 
        key={item.id} 
        question ={item} 
        answers = {[this.props.questions[item].optionOne.text, this.props.questions[item].optionTwo.text]} />);
    } else {
      renderList = list.map((item) => 
      <AnswList
        key={item.id}
        option={answers[item]} 
        answer={this.props.questions[item][answers[item]].text}/>);
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