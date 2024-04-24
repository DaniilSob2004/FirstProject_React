import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer><h3>Footer</h3></footer>
        </>
    )
}

export default Layout
