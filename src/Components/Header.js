import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import placeholder from '../images/Avatar_placeholder.png'


class Header extends Component{
  render(){
    return(
      <header>
      <ul className="header shadow">
        <li><NavLink to='/home' className='header-items header-left' activeClassName='active'>Home</NavLink></li>
        <li><NavLink to='/unanswered' className="header-items header-left" activeClassName='active'>Unanswered Questions</NavLink></li>
        <li><NavLink to='/questions' className="header-items header-left" activeClassName='active'>Answered Questions</NavLink></li>
        <li><NavLink to='/myquestions' className="header-items header-left" activeClassName='active'>My Questions</NavLink></li>
        <li><NavLink to='/new' className="header-items header-left" activeClassName='active'>New Question</NavLink></li>
        <li><NavLink to='/leaderboard' className="header-items header-left" activeClassName='active'>Leader Board</NavLink></li>
        <li>
          <div className="avatar-container header-right">
            <NavLink to='/login' className="header-items" activeClassName='active'>Logout</NavLink>
            <img src={placeholder}  alt='Avatar' class="header-avatar" />
          </div>
        </li>
      </ul>
      </header>
    )
  }
}


export default Header;