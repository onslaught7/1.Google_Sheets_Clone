import React, { useEffect } from 'react'

const App = () => {
  // Dynamically update the title section
  useEffect(() => {
    document.title = "Dynamic"
  }, []);

  return (
    <div>App</div>
  )
}

export default App