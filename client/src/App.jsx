import React, { useEffect } from 'react'
import Spreadsheet from './pages/Spreadsheet'

const App = () => {
  // Dynamically update the title section
  useEffect(() => {
    document.title = "Dynamic"
  }, []);

  return (
    <div>
      <Spreadsheet/>
    </div>
  )
}

export default App