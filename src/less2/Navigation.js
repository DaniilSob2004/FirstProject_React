import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <header>
            <nav>
                <ul className="menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Price">Price</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
