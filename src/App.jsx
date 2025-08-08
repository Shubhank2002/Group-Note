import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PocketNotes from './Components/PocketNotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <PocketNotes/>
     </div>
    </>
  )
}

export default App
