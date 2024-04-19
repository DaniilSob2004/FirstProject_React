import { React, useState } from 'react'
import classes from './Theme.module.css'

function Theme() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    function toggleThemeClick() {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }

    return (
        <div className={`${classes.container}
                         ${isDarkTheme && classes.darkMode}`}>
            <button
                className={classes.btn}
                onClick={toggleThemeClick}>Toggle Theme
            </button>
            <section id="content">
                <h2>Main Content</h2>
                <p>Donec tempus justo at risus luctus, in viverra.</p>
            </section>
        </div>
    )
}

export default Theme
