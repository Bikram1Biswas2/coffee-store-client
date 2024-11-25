
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'



function App() {
  const coffees = useLoaderData()


  return (
    <>
      <h1 className='text-5xl text-purple-500 text-center'>Hot Hot Cold Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
