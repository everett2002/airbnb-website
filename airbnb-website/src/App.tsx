import { useState } from 'react'
import room from './assets/room.jpg'
import whirlpool from './assets/whirlpool.jpg'
import forestwaterfall from './assets/forest-waterfall.jpg'
import golf from './assets/golf.jpg'
import './App.css'
import ImageBar from './Imagebar'

function App() {

  return  <>
  
    <div className='fixed bg-gray-800 min-w-full h-10 top-0 text-gray-50 flex items-center justify-between px-2 z-10'>
      <h2>Harmony Airbnb</h2>
      <ul className='flex space-x-2'>
        <li className='hover:text-gray-500'>Amenities</li>
        <li className='hover:text-gray-500'>Attractions</li>
        <li className='hover:text-gray-500'>About Us</li>
        <li className='hover:text-gray-500'>Contact Us</li>
      </ul>
    </div>


    <div className={`min-h-screen flex items-center justify-center bg-coast bg-no-repeat bg-cover bg-fixed`}>
      <h1 className='text-3xl text-gray-50'>Welcome to Sunshine Coast</h1>
    </div>
    <div className='bg-gray-900 min-w-full h-screen'>

</div>

    <ImageBar />


    <div className=' bg-gray-900 h-[100vh] text-gray-50 grid items-center justify-center '>
      <div className='grid md:grid-cols-2 grid-rows-2 w-[75vw] h-[60vh]'>       
        <h2>About Us</h2>
        <img src={room} alt="..." />
      </div>
    </div>
  </>


  
}

export default App
