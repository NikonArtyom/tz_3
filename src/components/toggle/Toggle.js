import React from "react";
import './Toggle.css';

const Toggle = () => {

    return (
        <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
    )
}

export default Toggle;