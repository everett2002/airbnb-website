import whirlpool from './assets/whirlpool.jpg'
import forestwaterfall from './assets/forest-waterfall.jpg'
import golf from './assets/golf.jpg'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {RxDotFilled} from 'react-icons/rx';


const slides = [
    whirlpool,
    forestwaterfall,
    golf
]


const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        // console.log('next slide is '+ (currentIndex+1));
        if (currentIndex>=slides.length-1) {
            return;
        }
        setCurrentIndex(currentIndex+1);
    }

    const prevSlide = () => {
        // console.log('prev slide is '+ (currentIndex-1))
        if (currentIndex===0) {
            return;
        }
        setCurrentIndex(currentIndex-1);
    }

    const goToSlide = (slideIndex:number) => {
        setCurrentIndex(slideIndex);
    }

    return ( 
        <div className='h-[100vh] w-[60vw] m-auto py-16 px-4 relative'>
            <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className='w-full h-full rounded-xl bg-center bg-cover duration-100'></div>
            {/* Left Arrow */}
            <div onClick={() => prevSlide()} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FaChevronLeft size={30} color="white" className={`bg-black/20 text-white`}/>
            </div>

            <div onClick={() => nextSlide()} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FaChevronRight size={30} color="white"/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default ImageSlider;