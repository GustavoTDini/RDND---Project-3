import React,  {Component, Fragment } from 'react';
import Header from './Header';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import LoadingBar from 'react-loading-bar'
import Home from '../Components/Home'
import Login from '../Components/Login'
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

class App extends Component {
  render(){
  return (
    <Router>
        <Fragment>
          <LoadingBar />
            <Header/>
              {this.props.loading === true
            ? null
            : <div>
                <Route path = '/login'>
                  <Login/>
                </Route>
                <Route path = '/home' component={Home}/>
                <Route path = '/unanswered' component = {Home} />
                <Route path = '/questions' component={Home}/>
                <Route path = '/myquestions' component={Home}/>
                <Route path = '/new' component={NewQuestion}/>
                <Route path = '/leaderboard' component={Leaderboard}/>
              </div>}
        </Fragment>
      </Router>
  );
  }

}

export default App;
