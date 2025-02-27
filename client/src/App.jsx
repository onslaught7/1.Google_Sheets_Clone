import React, { useEffect } from 'react'
import Spreadsheet from './pages/Spreadsheet'
import Header from './components/Header';
import Toolbar from './components/Toolbar';

const App = () => {
  // Dynamically update the title section
  useEffect(() => {
    document.title = "Dynamic"
  }, []);

  return (
    <div>
      <Header/>
      <Toolbar/>
      <Spreadsheet/>
    </div>
  )
}

export default App