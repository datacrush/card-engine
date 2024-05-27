import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HandComponent from './components/HandComponent'
import CardComponent from './components/CardComponent'

import TableComponent from './components/TableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TableComponent />
    </>
  )
}

export default App
