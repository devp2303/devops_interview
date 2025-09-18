import { useState } from 'react'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>🚀 React + Docker Challenge</h1>
      <p>Your task is to containerize this app!</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default App
