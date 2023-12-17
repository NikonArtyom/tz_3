import React from 'react';
import './App.css'
import List from '../list/List';
import Ref from '../ref/Ref';
import Toggle from '../toggle/Toggle';

function App() {

  const array = [1, 2, 3]

  return (
    <div className="app">
      <List arr={array} />
      <Ref />
      <Toggle />
    </div>
  )
}

export default App;
