
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'
import Header from './Components/Header'



function App() {
  const loadedCoffees = useLoaderData()
  const[coffees,setCoffees] = useState(loadedCoffees)


  return (
    <>
    <Header></Header>
      <h1 className='text-5xl text-purple-500 text-center'>Hot Hot Cold Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id}
             coffee={coffee}
             coffees={coffees}
             setCoffees={setCoffees}
             ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
