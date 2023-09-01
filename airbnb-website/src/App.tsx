import { useState, useEffect } from 'react'
import room from './assets/room.jpg'
import './App.css'
import { FaWifi, FaTree  } from 'react-icons/fa';
import { AiFillHome  } from 'react-icons/ai';
import { MdTravelExplore, MdOutlineKitchen  } from 'react-icons/md';
import { PiToiletBold  } from 'react-icons/pi';
import Imagebar from './Imagebar';

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
  
    <nav className='fixed bg-gray-800 min-w-full top-0 text-gray-50 flex items-center justify-between p-3 px-5 z-10 scroll-smooth duration-300'
    style={{ transform: `translateY(${showNav ? 0 : -100}%)` }}>
      <h2 className='text-3xl'>Harmony Airbnb</h2>
      <ul className='flex space-x-8 '>
        <li className='hover:text-gray-500'>
          <a  href="#home">Home</a> 
        </li>
        <li className='hover:text-gray-500'>
          <a  href="#about-us">About</a> 
        </li>
        <li className='hover:text-gray-500'>
          <a  href="#attractions">Attractions</a>
        </li>
        <li className='hover:text-gray-500'>
          <a  href="#things-to-do">Things To Do</a>
        </li>
        <li className='hover:text-gray-500'>Contact</li>
        <li>
          <span className='border-2 border-gray-50 p-1 hover:text-gray-500 hover:border-gray-500'>Book Now</span>
        </li>
      </ul>
    </nav>


    <div id='home' className={`min-h-screen flex items-center justify-center bg-coast bg-no-repeat bg-cover bg-fixed`}>
      <h1 className='text-4xl text-gray-50'>Welcome to Sunshine Coast</h1>
    </div>

    <div id='about-us' className=' bg-gray-900 text-gray-50 grid items-center justify-center h-screen'>
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
    <div id='attractions' className='h-[110vh] flex items-center justify-center'>
     <div className='grid grid-cols-3 grid-row-2 h-[75vh] w-[75vw]'>
        <div className='flex items-center  text-black flex-col'>
          <FaTree className='text-4xl'/>  
          <h3 className='text-xl'>Backyard</h3>
          <p>fully fenced backyard with a gas BBQ range, a fire pit, and some outdoor furniture</p>
        </div>
        <div className='flex items-center  text-black flex-col'>
          <PiToiletBold className='text-4xl'/>
          <h3 className='text-xl'>Room Supplies</h3>
          <p>bed linens, bathroom essentials, hair dryer, iron, drying rack, portable fans, baby bath</p>
        </div>
        <div className='flex items-center text-black flex-col'>
          <MdOutlineKitchen className='text-4xl'/>
          <h3 className='text-xl'>Kitchen</h3>
          <p>refrigerator, stove & oven, mirowave, toaster, keurig coffee manchine, electric kettle, coffee/tea, cookware, tableware, wine glasses</p>
        </div>
        <div className='flex items-center  text-black flex-col'>
          <FaWifi className='text-4xl'/>
          <h3 className='text-xl'>Free Wifi</h3>
          <p>Telus PureFibre Internet 75/75Mbps</p>
        </div>
        <div className='flex items-center  text-black flex-col'>
          <AiFillHome className='text-4xl'/>
          <h3 className='text-xl'>Heating & Cooling</h3>
          <p>There are wall mounted heat fan in each room and portable fan for the summer. The well insulated buildling was able to keep our guests cool and comfortable even during the 2021 heat dome</p>
        </div>
        <div className='flex items-center text-black flex-col'>
          <MdTravelExplore className='text-4xl'/>
          <h3 className='text-xl'>Excursions</h3>
          <p>We will organize seasona excursion throughout the year. For example bioluminescence tour, mushroom foraging, guided hiking, winery and brewry touring</p>
        </div>
     </div>
    </div>

    <Imagebar/>

    <div className='min-w-screen h-screen grid justify-center items-center m-32 bg-gray-500 grid-cols-2 rounded-3xl overflow-hidden'>
      <div className='p-10 space-y-5'>
        <h3 className='text-2xl'>Smuggler's Cove</h3>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae facilis consequatur vel animi dolore ipsa quod maiores quidem distinctio sequi, quas odit ipsam nihil nobis? Voluptates adipisci libero autem incidunt minus. Quis iure porro, dignissimos consequuntur molestias commodi, ipsam non ipsum ad tenetur inventore fuga enim ratione atque libero.</p>
      </div>
      <div className='w-full h-full bg-coast'></div>
    </div>

    <div className='p-10 h-screen grid justify-center items-center bg-blue-900 rounded-3xl' style={{display:"inline-block"}}>
      <form onSubmit={() => {}} className='flex flex-col space-y-5'>
          <div>
          <label htmlFor="email">Email</label>
          <input id='email' type="text" className='p-2 h-[2rem] rounded-md border-1 border-gray-900 w-[20vw]' required />
          </div>
          <>
          <label htmlFor="name">Name:</label>
          <input id='name' type="text" className='p-2 h-[2rem] rounded-md w-[20vw]' required/>
          </>
          <>
          <label htmlFor="msg">Message:</label>
          <input id='msg' type="text" className='p-2 rounded-md w-[32vw] h-[15vw]' required />
          </>
          <input type="submit" className='bg-' />
      </form>
    </div>
  </>


  
}

export default App
