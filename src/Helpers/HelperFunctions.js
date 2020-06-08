import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer, _saveUser, _deleteQuestionAnswer} from './_DATA'
import gold from '../images/gold.png'
import silver from '../images/silver.png'
import bronze from '../images/bronze.png'

// function to generate a rendow ID
function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// function to get initial data from API
export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

// function to format the question so it´s match the _DATA
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

// function to acesse _saveQuestion from API
export function saveQuestion (info) {
  return _saveQuestion(info)
}

// function to acesse _saveQuestionAnswer from API
export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

// function to acesse _deleteQuestionAnswer from API
export function deleteQuestionAnswer (info) {
  return _deleteQuestionAnswer(info)
}

// function to acesse _saveUser from API
export function saveUser (info) {
  return _saveUser(info)
}

// function that select from the questionlist, all that´s Unenswered
export function createUnensweredList (questionList, answeredList) {
  let unensweredList = []
  for ( let question in questionList){
    if (!answeredList.hasOwnProperty(question)){
      unensweredList = unensweredList.concat(question)
    }
  }
  return unensweredList
}

// function that select from the questionlist, all that´s answered
export function createAnsweredList (questionList) {
  let answeredList = []
  for ( let question in questionList){
    answeredList = answeredList.concat(question)
  }
  return answeredList
}

// function that create a array with objects with all the data to populate the leaderboard
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

// function that format the percentage to the votes - also test if it´s a NaN
export function formatPercent (total, option) {
  let percent = (option/total)*100
  if (isNaN(percent)){
    return 0
  }
  return percent
}

// function to format the new User so it´s match the _DATA
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

// function to remove a item from a object - to remove an anwer from the user answer object
export function removeItem (removedItem, originalObject) {
  let { [removedItem]: _, ...newObject } = originalObject
  return newObject
}
