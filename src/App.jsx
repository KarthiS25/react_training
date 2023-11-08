import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  function CallMethod() {
    let variation = 5;
    const a = 5 + count
    setCount(a)
   console.log(a)
  }
  return (
    <>
      <div className="card">
        <button onClick={()=>CallMethod()}>Click me</button>
        {count}
      </div>
    </>
  )
}

export default App
