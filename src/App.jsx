import { useState } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import States from './components/States'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <header className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <States></States>
      </section>
    </div>
    </>
  )
}

export default App
