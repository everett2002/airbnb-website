import { useState, useEffect } from 'react'
import room from './assets/room.jpg'
import './App.css'
import { FaWifi, FaTree  } from 'react-icons/fa';
import { AiFillHome  } from 'react-icons/ai';
import { MdTravelExplore, MdOutlineKitchen  } from 'react-icons/md';
import { PiToiletBold  } from 'react-icons/pi';
import Imagebar from './Imagebar';
import ImageSlider from './ImageSlider';

function App() {
  const [showNav, changeShowNav] = useState(true);
  let lastScroll: number = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY >= lastScroll) {
      
      // console.log(window.scrollY + " going down...");
      changeShowNav(false);
    } else {
      // console.log(window.scrollY + " going up...");
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
  
    <nav className='fixed bg-primary-dark min-w-full top-0 text-primary-light flex items-center justify-between p-3 px-5 z-10 scroll-smooth duration-300'
    style={{ transform: `translateY(${showNav ? 0 : -100}%)` }}>
      <h2 className='text-3xl'>Harmony Airbnb</h2>
      <ul className='flex space-x-8 items-center'>
        <li className='hover:text-primary-medium'>
          <a  href="#home">HOME</a> 
        </li>
        <li className='hover:text-primary-medium'>
          <a  href="#about-us">ABOUT</a> 
        </li>
        <li className='hover:text-primary-medium'>
          <a  href="#attractions">ATTRACTIONS</a>
        </li>
        <li className='hover:text-primary-medium'>
          <a  href="#things-to-do">THINGS TO DO</a>
        </li>
        <li className='hover:text-primary-medium p-1 border-gray-50 border-2'>
          <a href="#contact">CONTACT</a> 
        </li>
        {/* To be Implemented */}
        {/* <li>
          <span className='border-2 border-gray-50 p-1 hover:text-primary-medium hover:border-primary-text'>BOOK NOW</span>
        </li> */}
      </ul>
    </nav>


    <div id='home' className={`min-h-screen flex items-center justify-center bg-coast bg-no-repeat bg-cover bg-fixed`}>
      <h1 className='text-4xl text-primary-light'>Welcome to Sunshine Coast</h1>
    </div>

    <div id='about-us' className=' bg-primary-dark text-primary-light grid items-center justify-center h-screen'>
      <div className='grid grid-cols-2 items-center justify-center m-[10vw] gap-10'>   
      <div className=''>
        <h2 className='mb-5 text-3xl font-handlee'>Greetings from Lily & Paul</h2>
        <p className='text-16'>We enjoy traveling around the world but fell in love with Sunshine Coast at the first sight and don't want to leave. So we think, what can be a better way to share this love than run a B&B here to help people better enjoy this place while making the coast even more enjoyable. Harmany Stays was designed to make your visit a unique, comfortable and fun experience. Our rooms are spacious and thoughtfully set up to make you feel convenient and at-home</p> 
      </div>   
      <div className=''>        
        <img src={room} className='' alt="..." />
      </div> 
      </div>
    </div>

     {/* <ImageBar /> */}
    <div id='attractions' className='h-[110vh] flex items-center justify-center text-primary-dark'>
     <div className='grid grid-cols-3 grid-row-2 h-[75vh] w-[75vw]'>
        <div className='flex items-center   flex-col'>
          <FaTree className='text-4xl'/>  
          <h3 className='text-xl'>Backyard</h3>
          <p>fully fenced backyard with a gas BBQ range, a fire pit, and some outdoor furniture</p>
        </div>
        <div className='flex items-center   flex-col'>
          <PiToiletBold className='text-4xl'/>
          <h3 className='text-xl'>Room Supplies</h3>
          <p>bed linens, bathroom essentials, hair dryer, iron, drying rack, portable fans, baby bath</p>
        </div>
        <div className='flex items-center  flex-col'>
          <MdOutlineKitchen className='text-4xl'/>
          <h3 className='text-xl'>Kitchen</h3>
          <p>refrigerator, stove & oven, mirowave, toaster, keurig coffee manchine, electric kettle, coffee/tea, cookware, tableware, wine glasses</p>
        </div>
        <div className='flex items-center   flex-col'>
          <FaWifi className='text-4xl'/>
          <h3 className='text-xl'>Free Wifi</h3>
          <p>Telus PureFibre Internet 75/75Mbps</p>
        </div>
        <div className='flex items-center   flex-col'>
          <AiFillHome className='text-4xl'/>
          <h3 className='text-xl'>Heating & Cooling</h3>
          <p>There are wall mounted heat fan in each room and portable fan for the summer. The well insulated buildling was able to keep our guests cool and comfortable even during the 2021 heat dome</p>
        </div>
        <div className='flex items-center  flex-col'>
          <MdTravelExplore className='text-4xl'/>
          <h3 className='text-xl'>Excursions</h3>
          <p>We will organize seasona excursion throughout the year. For example bioluminescence tour, mushroom foraging, guided hiking, winery and brewry touring</p>
        </div>
     </div>
    </div>

    <Imagebar/>




    <div id='things-to-do'>
      <div>
        <ImageSlider/>
      </div>
    </div>
    

    <div id='contact' className='grid justify-center items-center bg-blue-900 h-[100vh]'>
      <div className='space-y-7'>
        <h2 className='text-3xl text-center'>Contact Us</h2>

        <form className='flex flex-col space-y-5 w-[60vw]'>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 '>
            <div className='space-y-4'>
              <div className='flex flex-col'>
              <label htmlFor="email">Email</label>
              <input id='email' type="text" className='border p-2 focus:outline-none' required />
              </div >
              <div className='flex flex-col'>
              <label htmlFor="name">Name</label>
              <input id='name' type="text" className='border p-2 focus:outline-none' required/>
              </div>
              <div className='flex flex-col'>
              <label htmlFor="subject">Subject</label>
              <input id='subject' type="text" className='border p-2 focus:outline-none' required/>
              </div>
              </div>
              <div className='flex flex-col md:h-[100%] h-[25vh]'>
              <label htmlFor="msg">Message</label>
              <textarea id='msg' className='border h-[100%] flex text-start focus:outline-none p-2' required  placeholder='Your Message...'/>
              </div>
            </div>
            <input type="submit" className='bg-primary-medium border-none p-2 w-auto cursor-pointer' />
        </form>
    </div>
    </div>
  </> 
}

export default App
