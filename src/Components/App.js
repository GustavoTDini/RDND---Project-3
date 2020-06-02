import React, { Component, Fragment } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-loading-bar'
import Home from '../Components/Home'
import Login from '../Components/Login'
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Question from './Question';
import AnswQuestion from './AnswQuestion';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    console.log('app -> ', this.props)
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar color="red"/>
          <Header authedUser={this.props.authedUser}/>
          {this.props.authedUser === null
            ? <Route path='/login' component={Login} />
            : 
            <div>
              <Route path='/home' component={Home} />
              <Route path='/unanswered' component={Question} />
              <Route path='/questions' component={AnswQuestion} />
              <Route path='/myquestions' component={AnswQuestion} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
            </div>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }){
  return {
    authedUser:  authedUser
  }
}

export default connect(mapStateToProps)(App);
