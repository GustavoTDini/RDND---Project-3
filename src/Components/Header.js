import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import placeHolder from '../images/Avatar_placeholder.png'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Header extends Component {
  
  // before logout check with the user if he really want to..
  logout = () => {
    if (this.props.authedUser !== null){
      if (window.confirm("Are you sure you want to leave?")) { 
        this.props.dispatch(setAuthedUser(null, null))
      }
    } else {
      return
    }
  }

  // before login if the user try to access other areas, it will receive an alert
  noLoginAlert = (e) => {
    if (this.props.authedUser === null){
      alert("Please Login to Access!")
    }
  }

  render() {
    const { authedUser } = this.props
    return (
      <header>
        <ul className="header shadow">
          <li><NavLink to={`/home/${authedUser}`} 
            className='header-items header-left' 
            activeClassName='active' 
            onClick={() => this.noLoginAlert()}>Home</NavLink></li>
          <li><NavLink to={`/unansweredList/${authedUser}`} 
            className="header-items header-left" 
            activeClassName='active' 
            onClick={() => this.noLoginAlert()}>Unanswered Questions</NavLink></li>
          <li><NavLink to={`/questionList/${authedUser}`} 
            className="header-items header-left" 
            activeClassName='active' 
            onClick={() => this.noLoginAlert()}>Answered Questions</NavLink></li>
          <li><NavLink to={`/myquestionsList/${authedUser}`} 
            className="header-items header-left" 
            activeClassName='active' 
            onClick={() => this.noLoginAlert()}>My Questions</NavLink></li>
          <li><NavLink to={`/new/${authedUser}`} 
            className="header-items header-left" 
            activeClassName='active' 
            onClick={() => this.noLoginAlert()}>New Question</NavLink></li>
          <li><NavLink to={`/leaderboard/${authedUser}`} 
            className="header-items header-left" 
            activeClassName='active' 
            onClick={() => this.noLoginAlert()}>Leader Board</NavLink></li>
          <li>
            <div className="avatar-container header-right">
                <NavLink
                  to='/login'
                  className="header-items"
                  onClick={() => this.logout()}>{authedUser === null? 'Login' : 'Logout' }
                </NavLink>
              <img src={authedUser === null ? placeHolder : this.props.user.avatarURL} alt='Avatar' className="header-avatar" />
            </div>
          </li>
        </ul>
      </header>
    )
  }
}

function mapStateToProps(state, { authedUser }) {
  // check if the authedUser is selected, meaning its logged in
  if (authedUser !== null) {
    return {
      user: state.users[authedUser]
    }
  }
  return {}
}

export default connect(mapStateToProps)(Header);