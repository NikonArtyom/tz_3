import React from 'react';
import './App.css'
import List from '../list/List';
import Ref from '../ref/Ref';
import Toggle from '../toggle/Toggle';
import { ThemeProvider } from '../../providers/ThemeProvider';

function App() {

  const array = [1, 2, 3]

  return (
    <ThemeProvider>
      <>
        <List arr={array} />
        <Ref />
        <Toggle />
      </>
    </ThemeProvider>
  )
}

export default App;
