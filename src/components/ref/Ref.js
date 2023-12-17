import React, { useRef, useState } from "react";
import './Ref.css'

const Ref = () => {
    const [value, setValue] = useState('')

    const ref = useRef(null)

    const handleClick = () => ref.current.focus();

    const pressEnter = (event) => {

        if (event.key === 'Enter') {
            setValue(event.target.value)
        }

    }

    return (
        <div>
            <input type='text' ref={ref} onClick={handleClick} onKeyDown={pressEnter} />
            <button onClick={handleClick}>Focus input</button>
            {value && <p className="ref">{value}</p>}
        </div>
    )
}

export default Ref;