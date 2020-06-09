import React, { Component, Fragment } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import PrivateRoute from './PrivateRoute'
import BadRoute from './BadRoute'

class App extends Component {
  state = {
    isAuthed: false
  }
  //get Initial data from _DATA
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  componentDidUpdate(prevProps){
    if (this.props.authedUser !== null && (prevProps.authedUser !== this.props.authedUser)){
      this.setState({
        isAuthed: true
      }) 
    } else if ( prevProps.authedUser !== this.props.authedUser ) {
      this.setState({
        isAuthed: false
      }) 
    }
  }
  render() {
    const { isAuthed } = this.state
    return (
      <Router>
        <Fragment>
          <LoadingBar color="red" />
          <Header authedUser={this.props.authedUser} />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/newUser' component={NewUser} />
              <PrivateRoute path='/home' component={Home} isAuthed={isAuthed}/>
              <PrivateRoute path='/unansweredList' component={() => <CardList list='unanswered'/>} isAuthed={isAuthed}/>
              <PrivateRoute path='/questionList' component={() => <CardList list='questions'/>} isAuthed={isAuthed}/>
              <PrivateRoute path='/myquestionsList' component={() => <CardList list='myquestions'/>} isAuthed={isAuthed}/>
              <PrivateRoute path='/add' component={NewQuestion} isAuthed={isAuthed} />
              <PrivateRoute path='/leaderboard' component={Leaderboard} isAuthed={isAuthed} />
              <PrivateRoute path='/newUser' component={NewUser} isAuthed={isAuthed} />
              <PrivateRoute path='/question' component={Question} isAuthed={isAuthed} />
              <Route path='/404' component={BadRoute}/>
              <Route path='/' component={Login} />
            </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  //add a Loading Bar
  return {
    loading: state.authedUser === null,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App);