import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to='/' activeClassName='is-active'>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Go to Create</NavLink>
    </header>
)

export default Header;