import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import placeHolder from '../images/Avatar_placeholder.png'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Header extends Component {
  state = {
    avatarImage: placeHolder,
  }

  logout = (e) => {
    e.preventDefault()
    if (this.props.authedUser !== null){
      this.props.dispatch(setAuthedUser(null, null))
    }
  }

  render() {
    console.log(this.props)
    const { authedUser } = this.props
    return (
      <header>
        <ul className="header shadow">
          <li><NavLink to={`/home/${authedUser}`} className='header-items header-left' activeClassName='active'>Home</NavLink></li>
          <li><NavLink to={`/unanswered/${authedUser}`} className="header-items header-left" activeClassName='active'>Unanswered Questions</NavLink></li>
          <li><NavLink to={`/questions/${authedUser}`} className="header-items header-left" activeClassName='active'>Answered Questions</NavLink></li>
          <li><NavLink to={`/myquestions/${authedUser}`} className="header-items header-left" activeClassName='active'>My Questions</NavLink></li>
          <li><NavLink to={`/new/${authedUser}`} className="header-items header-left" activeClassName='active'>New Question</NavLink></li>
          <li><NavLink to={`/leaderboard/${authedUser}`} className="header-items header-left" activeClassName='active'>Leader Board</NavLink></li>
          <li>
            <div className="avatar-container header-right">
              {authedUser === null ? 
                <NavLink
                  to='/login'
                  className="header-items"
                  activeClassName='active'>Login
                </NavLink> :
                <NavLink
                to='/login'
                className="header-items"
                activeClassName='active'
                onClick={(e) => this.logout(e)}>Logout
              </NavLink>
              }
              <img src={authedUser === null ? placeHolder : this.props.user.avatarURL} alt='Avatar' className="header-avatar" />
            </div>
          </li>
        </ul>
      </header>
    )
  }
}

function mapStateToProps(state, { authedUser }) {
  if (authedUser !== null) {
    return {
      user: state.users[authedUser]
    }
  }
  return {}
}

export default connect(mapStateToProps)(Header);