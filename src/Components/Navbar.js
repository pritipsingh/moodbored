import React from 'react'
import daisy from '../assets/daisy.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='max-w-screen flex flex-wrap items-center justify-between p-5'>
        <div>

        </div>
        <div className='flex items-center justify-center gap-2 md:gap-6 xl:gap-8 font-head'>
            <img src={daisy} className='xl:h-[3.4rem] z-50 h-[2.3rem] hover:motion-safe:animate-spin '  />
            <h1 className='text-xl '>MoodBored</h1>
        </div>
        <div className=''>
            <Link to="/discovery">
            <button className='py-3 px-6 font-normal xl:px-8 border rounded-md bg-blue-100 hover:bg-blue-300  transition linear duration-25'>Login now</button>
            </Link>
        </div>
    
    </div>
  )
}

export default Navbar