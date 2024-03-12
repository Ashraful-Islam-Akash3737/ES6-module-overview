// import { useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  // const [count, setCount] = useState(0)

  const watches= [
    {id:1, name: "Apple Watch", price: 234},
    {id:2, name: "Orange Watch", price: 244},
    {id:3, name: "Malta Watch", price: 134},
    {id:4, name: "Grape Watch", price: 294},
    {id:5, name: "Litchi Watch", price: 264},
  ]
  

  return (
    <>
      <h1>Vite + React</h1>

      {
        watches.map((watch)=><Watch key={watch.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
