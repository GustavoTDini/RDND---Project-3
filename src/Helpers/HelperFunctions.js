import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer, _saveUser } from './_DATA'
import gold from '../images/gold.png'
import silver from '../images/silver.png'
import bronze from '../images/bronze.png'

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function formatQuestion (question) {
  return {
    id: generateUID(),
    author: question.authedUser,
    timestamp: Date.now(),
    optionOne: {
      votes: [],
      text: question.optionOne,
    },
    optionTwo: {
      votes: [],
      text: question.optionTwo,
    }
  }
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
  console.log(info)
  return _saveQuestionAnswer(info)
}

export function saveUser (info) {
  console.log(info)
  return _saveUser(info)
}

export function createUnensweredList (questionList, answeredList) {
  let unensweredList = []
  for ( let question in questionList){
    if (!answeredList.hasOwnProperty(question)){
      unensweredList = unensweredList.concat(question)
    }
  }
  return unensweredList
}

export function createAnsweredList (questionList) {
  let answeredList = []
  for ( let question in questionList){
    answeredList = answeredList.concat(question)
  }
  return answeredList
}

export function formatLeaderboard (users) {
  let leaderList = []
  for (let user in users){
    let answeredQuestions = Object.keys(users[user].answers).length
    let questionMade = users[user].questions.length
    let ListedUser = {
      id: users[user].id,
      name: users[user].name,
      avatar: users[user].avatarURL,
      answeredQuestions: answeredQuestions,
      questionMade: questionMade,
      totalPoints: answeredQuestions + questionMade,
      trophy: null
    }
    leaderList = leaderList.concat(ListedUser)
  }
  leaderList.sort((a,b) => b.totalPoints - a.totalPoints)
  leaderList[0].trophy = gold;
  leaderList[1].trophy = silver
  leaderList[2].trophy = bronze
  return leaderList
}

export function formatPercent (total, option) {
  let percent = (option/total)*100
  if (isNaN(percent)){
    return 0
  }
  return percent
}

export function formatUser (user) {
  return {
    id: user.id,
    password: user.password,
    name: user.name,
    avatarURL: user.avatarURL,
    answers: {},
    questions: []
  }
}

