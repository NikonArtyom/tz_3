import React, { useContext } from "react";
import './Toggle.css';
import { ThemeContext } from "../../providers/ThemeProvider";

const Toggle = () => {

    const [theme, setTheme] = useContext(ThemeContext)

    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <div className="theme">
            <p>Light/Dark</p>
            <label className="switch">
                <input type="checkbox" onClick={changeTheme} />
                <span className="slider round"></span>
            </label>
        </div>

    )
}

export default Toggle;