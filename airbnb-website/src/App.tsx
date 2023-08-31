import { useState } from 'react'
import './App.css'

function App() {
  return  <>
    <div className='fixed bg-gray-900 min-w-full h-10 top-0 text-gray-50 flex items-center justify-between px-2'>
      <h2>Harmony Airbnb</h2>
      <ul className='flex space-x-2'>
        <li>About</li>
        <li>Amenities</li>
        <li>Attractions</li>
        <li>Contact Us</li>
      </ul>
    </div>

    <div className='min-h-screen flex items-center justify-center bg-coast bg-no-repeat bg-cover'>
      <h1 className='text-3xl text-gray-50'>Welcome to Sunshine Coast</h1>
    </div>
    </>
  
}

export default App
