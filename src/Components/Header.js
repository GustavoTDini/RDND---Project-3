import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import placeHolder from '../images/Avatar_placeholder.png'
import { connect } from 'react-redux'


class Header extends Component {
  state = {
    avatarImage: placeHolder,
    logButton: 'Login',
  }

  componentDidUpdate(prevProps) {
    const { authedUser, user } = this.props
    console.log('componentDidUpdate: ' + authedUser, user)
    if (this.props.user !== prevProps.user) {
      if (authedUser !== null) {
        this.setState(() => ({
          avatarImage: user.avatarURL,
          logButton: 'Logout',
        }))
      }
      else {
        this.setState(() => ({
          avatarImage: placeHolder,
          logButton: 'Login',
        }))
      }
    }
  }

  render() {
    console.log(this.props)
    const { avatarImage, logButton } = this.state
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
              <NavLink to='/login' className="header-items" activeClassName='active'>{logButton}</NavLink>
              <img src={avatarImage} alt='Avatar' className="header-avatar" />
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