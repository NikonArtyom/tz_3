import '../App.css';
import List from './toDo/List';
import { useRef, useState } from 'react';

function App() {

  const array = [1, 2, 3]

  const [value, setValue] = useState(' ')

  const ref = useRef(null)

  const handleClick = () => ref.current.focus();

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value)
    }
  }

  return (
    <div className="App" >
      <List arr={array} />
      <input type='text' ref={ref} onClick={handleClick} onKeyDown={pressEnter} />
      <button onClick={handleClick}>Focus input</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
