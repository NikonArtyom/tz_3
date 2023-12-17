import React from "react";
import './Toggle.css';

const Toggle = () => {

    return (
        <div className="light dark">
            <p>Light/Dark</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>

    )
}

export default Toggle;