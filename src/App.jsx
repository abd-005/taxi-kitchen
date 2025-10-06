import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <header className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
      </header>

      <main>
        
      </main>
    </div>
    </>
  )
}

export default App
