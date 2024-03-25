import React from 'react'
// import FaPlay from "react-icons/fa"
import review from "../assets/review.jpeg"
import pro from "../assets/pro.png"
import text from "../assets/text.png"
const projects = [
    {
        title: "The Productive Champion",
        description: "An open source Chrome Extension that helps you stay focused by blocking access to popular social media websites during your designated focus periods. It has has modes like ADHD",
        pic: pro,
        tech: ["React", "Chrome Tools"],
        link: "https://github.com/pritipsingh/The-Productive-Champion"
    },
    {
      title: "Collaborate Now over Editor",
      description: "This text-editor is like a google-docs that lets you collaborate in real time.It creates a room with random room and if people share the same room they can see the changes in real time. ",
      pic: text,
      tech: ["React", "MongoDB", "Socket.io" , "ExpressJS"],
      link: "https://github.com/pritipsingh/text-editor"
  },
  {
    title: "Decentralized Omegle",
    description: "It's a dapp buillt on top of ThirdWeb sdk and video call is powered by Huddle01 sdk. You can post about anything and like minded people can join the call to discuss it.",
    pic: text,
    tech: ["React", "MongoDB", "Socket.io" , "ExpressJS"],
    link: "https://github.com/pritipsingh/Decentralized_Omegle"
},
]

const Projects = () => {
  return (
    <div className='w-[80vw] mx-auto mt-[5vh]'>
    <div
      onClick={() => {}} 
      className="
        relative 
        group 
        w-[30vw]
        h-[300px]
        flex 
        flex-col https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-5
      "
    >
      <div 
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <img
          className="object-cover"
          src={ review}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full text-xl">
        "no"
        </p>
        <p 
          className="
            text-neutral-400 
            text-md 
            pb-4 
            w-full 
            truncate
          "
        >
          By "uo"
        </p>
       
      </div>
      <div 
        className="
          absolute 
          bottom-28 
          right-5
        "
      >
           <button 
        className="
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-green-500 
          p-4 
          drop-shadow-md 
          group-hover:opacity-100 
          hover:scale-110
        "
      >
        {/* <FaPlay className="text-black" /> */}
      </button>
      </div>
    </div>
    </div>
  )
}

export default Projects