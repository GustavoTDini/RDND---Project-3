import React, { Component, Fragment } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Home from '../Components/Home';
import Login from '../Components/Login';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import CardList from './CardList';
import NewUser from './NewUser';
import Question from './Question';

class App extends Component {
  //get Initial data from _DATA
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar color="red" />
          <Header authedUser={this.props.authedUser} />
          {this.props.authedUser === null
            ?
            <Fragment>
              <Redirect to='/login' push />
              <Route path='/login' component={Login} />
              <Route path='/newUser' component={NewUser} />
            </Fragment>
            :
            <Fragment>
              <Redirect to='/home' push />
              <Route path='/home' component={Home} />
              <Route path='/unansweredList'>
                <CardList list='unanswered' />
              </Route>
              <Route path='/questionList'>
                <CardList list='questions' />
              </Route>
              <Route path='/myquestionsList'>
                <CardList list='myquestions' />
              </Route>
              <Route path='/new' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/newUser' component={NewUser} />
              <Route path='/question' component={Question} />
            </Fragment>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  //add a Loading Bar
  return {
    loading: authedUser === null,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App);
