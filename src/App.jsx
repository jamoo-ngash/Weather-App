import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@nextui-org/button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black w-screen h-screen text-white'>
      Hello world
      <Button>Press me</Button>
    </div>
  )
}

export default App
