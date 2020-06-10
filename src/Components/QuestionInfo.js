import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import Question from "./Question";
import AnswQuestion from './AnswQuestion'
import BadRoute from './BadRoute'

class QuestionInfo extends Component {
  render() {
    const { question, infoType } = this.props;
    let renderQuestion
    console.log(this.props)

    // check what kind of info wil be rendered and save in renderQuestion
    switch (infoType){
      case 'unanswered':
        console.log("yay unanswered")
        renderQuestion =
        <Question
          question={question.id}
          userId={question.author}
          voting={true}/>
      break;
      case 'answered':
        console.log("yay answered")
        renderQuestion =
        <AnswQuestion
          question={question.id}
          answers={[question.optionOne.text, question.optionTwo.text]}
          userId={question.author} />
      break;
      case 'toVote':
        console.log("yay toVote")
        renderQuestion =
        <Question
          question={question.id}
          answers={[question.optionOne.text, question.optionTwo.text]}
          userId={question.author}
          voting={true}/>
      break;
      case 'error':
        console.log("yay toVote")
        renderQuestion = <BadRoute />
      break;
      default:
        console.log("yay none")
        renderQuestion =
        <AnswQuestion
          question={question.id}
          answers={[question.optionOne.text, question.optionTwo.text]}
          userId={question.author} 
          noButton={true}/>
    }

    if (this.props.question !== null) {
      return(
        <Fragment>
          {renderQuestion}
        </Fragment>
      )
    } else {
      // if not matches return a badRoute
      return <BadRoute />
    }

  }
}

function mapStateToProps(state, props) {

  //get the question info from the store
  if (state.authedUser !== null && props.location.state) {
    return {
      user: state.users[props.userId],
      question: state.questions[props.location.state.questionId],
      authedUser: state.users[state.authedUser],
      infoType: props.location.state.infoType
    }
  } else {
    return{
      infoType: 'error'
    }
  }
}

export default connect(mapStateToProps)(QuestionInfo)