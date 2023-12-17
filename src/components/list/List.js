import React, { useState } from 'react';
import './List.css'
const List = ({ arr }) => {

    const [array, setArray] = useState(arr);

    const handleClick = (index) => {

        array.splice(index, 1, '№ ' + array[index]);
        console.log(array);
        setArray([...array]);
    };

    return (
        <div>
            <ul>
                {array.map((elem, index) =>
                    <li key={index.toString()}>
                        {elem}
                        <button onClick={() => handleClick(index)}>Изменить</button>
                    </li>)}
            </ul>
        </div>
    );
}

export default List;