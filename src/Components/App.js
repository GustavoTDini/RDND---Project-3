import React, { Component, Fragment } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-loading-bar'
import Home from '../Components/Home'
import Login from '../Components/Login'
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import CardList from './CardList';
import Question from './Question'
import AnswQuestion from './AnswQuestion'
import NewUser from './NewUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar color="red"/>
          <Header authedUser={this.props.authedUser}/>
          {this.props.authedUser === null
            ?
            <Fragment>
              <Route path='/login' component={Login} />
              <Route path='/newUser' component={NewUser}/>
            </Fragment> 
            
            : 
            <Fragment>
              <Route path='/home' component={Home} />
              <Route path='/unansweredList'>
                <CardList list='unanswered'/>
              </Route>
              <Route path='/questionList'>
                <CardList list='questions'/>
              </Route>
              <Route path='/myquestionsList'>
                <CardList list='myquestions'/>
              </Route>
              <Route path='/new' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/newUser' component={NewUser} />
              <Route path='/unansweredQuestion'>
                <Question/>
              </Route>
              <Route path='/answeredQuestion'>
                <AnswQuestion/>
              </Route>
              <Route path='/answeredQuestion'>
                <NewUser/>
              </Route>
            </Fragment>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }){
  return {
    loading:  authedUser === null,
    authedUser:  authedUser
  }
}

export default connect(mapStateToProps)(App);
