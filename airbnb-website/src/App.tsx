import { useState, useEffect } from 'react'
import room from './assets/room.jpg'
import './App.css'
// import ImageBar from './Imagebar'

function App() {
  const [showNav, changeShowNav] = useState(true);
  let lastScroll: number = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY >= lastScroll) {
      
      console.log(window.scrollY + " going down...");
      changeShowNav(false);
    } else {
      console.log(window.scrollY + " going up...");
      changeShowNav(true)
    }

    lastScroll = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return  <>
  
    <nav className='fixed bg-gray-800 min-w-full top-0 text-gray-50 flex items-center justify-between p-5 z-10 scroll-smooth duration-300'
    style={{ transform: `translateY(${showNav ? 0 : -100}%)` }}>
      <h2 className='text-3xl m-3'>Harmony Airbnb</h2>
      <ul className='flex space-x-8 '>
        <li className='hover:text-gray-500'>
          <a href="#home">Home</a> 
        </li>
        <li className='hover:text-gray-500'>
          <a href="#about-us">About</a> 
        </li>
        <li className='hover:text-gray-500'>
          <a href="#attractions">Attractions</a>
        </li>
        <li className='hover:text-gray-500'>Contact</li>
      </ul>
    </nav>


    <div id='home' className={`min-h-screen flex items-center justify-center bg-coast bg-no-repeat bg-cover bg-fixed`}>
      <h1 className='text-5xl text-gray-50'>Welcome to Sunshine Coast</h1>
    </div>



   


    <div id='about-us' className=' bg-gray-900 h-[100vh] text-gray-50 grid items-center justify-center '>
      <div className='grid md:grid-cols-2 grid-rows-2 w-[75vw] h-[60vh]'>   
      <div className='w-25 p-4'>
        <h2 className='mb-5 text-3xl'>Greetings from Lily & Paul</h2>
        <p className='text-16'>We enjoy traveling around the world but fell in love with Sunshine Coast at the first sight and don't want to leave. So we think, what can be a better way to share this love than run a B&B here to help people better enjoy this place while making the coast even more enjoyable. Harmany Stays was designed to make your visit a unique, comfortable and fun experience. Our rooms are spacious and thoughtfully set up to make you feel convenient and at-home</p> 
      </div>   
      <div className=''>        
        <img src={room} className='' alt="..." />
      </div> 
      </div>
    </div>

     {/* <ImageBar /> */}
    <div id='attractions' className='h-screen flex items-center justify-center'>
     <div className='grid grid-cols-3 grid-row-2 h-[75vh] w-[75vw]'>
        <div className='h-full  bg-gray-500'>Backyard</div>
        <div className='items-center justify-center'>Supply</div>
        <div className='h-full items-center justify-center bg-gray-500'>Kitchen</div>
        <div className='items-center justify-center'>Wifi</div>
        <div className='h-full items-center justify-center bg-gray-500'>Heating</div>
        <div className='items-center justify-center'>Attractions</div>
     </div>
    </div>
  </>


  
}

export default App
