import React from 'react'
import daisy from '../assets/daisy.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='max-w-screen flex flex-wrap items-center justify-between p-5'>
        <div>

        </div>
        <div className='flex items-center justify-center gap-4 md:gap-6 xl:gap-8 font-head'>
            <img src={daisy} className='xl:h-[3.4rem] z-50 h-[2.3rem] hover:motion-safe:animate-spin '  />
            <h1 className='text-xl '>MoodBored</h1>
        </div>
        <div className=''  target="_blank">
            <Link to="https://github.com/pritipsingh">
            <button  className='cursor1 py-3 px-6 font-normal xl:px-8 border text-sm font-semibold rounded-md bg-blue-100 hover:bg-blue-300  transition linear duration-75'>Follow Me On GitHub 🐼</button>
            </Link>
        </div>
    
    </div>
  )
}

export default Navbar