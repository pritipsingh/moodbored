import React from 'react'
import Tree from '../../assets/tree.png'
import yelloe from '../../assets/yellow.png'
import leaf from "../../assets/leaf2.png"
import leaf1 from '../../assets/leaf.png'
import leaf2 from '../../assets/leaves.png'
import leaf3 from '../../assets/leaves3.png'
import sunflower from '../../assets/sunflower.png'
import sky from '../../assets/sky.jpg'
import quote from '../../assets/quote.jpg'
import song from '../../assets/spotify.jpg'
import './Home.css'
const Home = () => {
  return (
    <div className='h-full'>
    <div className='relative main  h-screen w-screen flex flex-col justify-center items-center  mt-0'>
      <div className='flex justify-center items-center '>
            <h1 className='xl:text-[7rem] mb-20  lg:text-[8rem] text-[3rem] z-[99] md:text-[8rem] font-head'>Discover your aesthetic</h1>
        </div>
        <div className='absolute left-[-11rem] xl:left-[-10rem] xl:top-[-14rem] top-[-14rem]'>
            <img className='w-[20rem] ' src={yelloe} />
        
        </div>
        <div className='first'>
                      <div><img className='w-[3rem] z-0 h-[3rem]' src={leaf2}/></div>
        </div>
        <div className='set'>
            <div><img className='w-[3rem] z-0 h-[3rem]' src={leaf}/></div>
            <div><img className='w-[3rem] z-0 h-[3rem]' src={leaf1}/></div>
            <div><img className='w-[3rem] z-0 h-[3rem]' src={leaf2}/></div>
            <div><img className='w-[3rem] z-0 h-[3rem]' src={leaf3}/></div>
            <div><img className='w-[3rem] z-0 h-[3rem]' src={sunflower}/></div>
        </div>
        </div>
        {/* <div className='absolute overflow-clip xl:right-[-10rem]  md:right-[-10rem] md:right-[-10rem] top-[55vh] right-[-11rem]'>
            <img className='w-[20rem] z-50' src={yelloe} />
        
        </div> */}
        <div className='relative mb-[20%] grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2  sm:grid-cols-2  '>
       
          <div className='flex justify-center items-center text-center text-xl mx-12 font-head'>
               Discover or Share your aesthetics. Your favourite spotify, quotes,etc
          </div>
          <div className='relative flex justify-center items-center text-center text-xl mx-12 font-head mt-[45%] md:mt-0 xl:mt-0 lg:mt-0'>
           <img src={song} className='absolute w-[50%] h-[50vh] shadow-lg shadow-yellow-500/30   border border-black rounded-3xl left-[33%] top-[70%]'/>
           <img src={quote} className='relative w-[50%] h-[40vh] shadow-lg shadow-yellow-500/30  border border-black rounded-3xl z-[999] left-[5%]'/>
           <img src={sky} className='w-[80%] z-[99] h-[30vh] relative right-[5%] shadow-lg shadow-yellow-500/30   border border-black rounded-3xl'/>
          </div>
        </div>


          
    </div>
  )
}

export default Home