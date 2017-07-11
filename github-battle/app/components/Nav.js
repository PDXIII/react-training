import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


const Nav = (props) => (
  <nav>
    <ul className="nav">
      <li>
        <NavLink
          exact
          to="/"
          activeClassName='active'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/battle"
          activeClassName='active'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/popular"
          activeClassName='active'>
          Popular
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
