import React, {useState} from 'react'
import push from '../assets/push.jpeg'
import mvp from "../assets/mvp.jpeg"
import codeparrot from "../assets/parrot.jpeg"
import review from "../assets/review.jpeg"
const Collection = () => {
    const [currentState, setCurrentState] = useState(0)
  return (
    <div className="flex justify-center items-center text-lg mx-12  overflow-scroll">
        <div class="smartphone h-auto" onClick={(e) => {
            e.stopPropagation();
            setCurrentState(0)
        }}>
  <div class="content p-8 relative flex flex-col justify-between">
    <div>
    <h1 className='text-center text-lg font-head  font-bold'>My Experience & About Me 🌷</h1>

    {
        currentState === 0 ?
        
            <div className='mt-[2vh] text-md'>
                Hi I am Priti! I am Full stack Developer (frontend heavy). 
                <br/>
                <br/>
                Here's what I am currently working on:
                <br/>
                <br/>
                1. Serving my notice period at <a href='https://push.org/' rel="noreferrer" target='_blank' className='text-pink-400'>Push Protocol</a> (communication layer of Web3)
                <br/>
                <br/>
                2. Working on a website called <span className='text-blue-500'>The Book Club for getdevkit.com</span> which essentially scrapes over 10k+ data from LibriVox stores it in Postgres Database and gives a super clean spotify kinda modern User Experience. LibriVox has over 400k+ users monthly but lacks the modern UX.
                <p className='pl-2'>
                    🌟Techstack I used: Wrote a script in Javascript used PostgresSQL and Prisma to store data and mp3s. For frontend NextJS App router + Framer.
                </p>
               
                <br/>
                3. Building a Chrome Extention called The Productive Champion which has features like Focus Mode, ADHD mode, etc. It's open source and already has 60+ stars and 20+ contributors
            </div>
            : currentState === 1 ? <div className='mt-[5vh] text-md'>

             <p className='text-bold text-pink-500 text-lg'>🌟 Push Protocol (Prev: Ethereum Push Notifications Services)</p>
             <div className='mt-3'>🗓 07/2023 - Present (March 31st last day)</div>
             <div className='mt-3'>👩🏾‍💻 Frontend Engineer</div>
             <p className='mt-3'>
             • Working on creating and revamping composable components- ”uiweb sdk” that reduced the integration time
by hours <br/>
• Worked on revamping the existing components, fixing bugs and building design <br/>
• Writing docs for sdks and integrations
             </p>
            </div> :  currentState === 2 ? <div onClick={(e) => e.stopPropagation()}  className='mt-[5vh] text-md'>

             <p className='text-bold text-pink-500 text-lg'>🌟 021 MVP Labs</p>
             <div className='mt-3'>🗓 04/2023 - Present (March 31st last day)</div>
             <div className='mt-3'>👩🏾‍💻 Full Stack Developer and Con-founder</div>
             <div className='mt-3'>👩🏾💪🏾 Worked on many projects including a big SAAS for the direct of microsoft set to launch next month. Built a 6 digit business by providing software solutions.</div>
             <p className='mt-3'>
                <h1 className='text-lg'>🚀 EasyPhish</h1>
                • Designed, Tested and Implemented an Architecture from scratch of a phishing web-app for B2B for organi-
zation to test their employees immunity from phishing .
<br/>
• Leveraged Auth0 sdks for authentication, Stripe for monthly subscriptions and AWS email for mass emailing
employees of an organization and get their phishing reports<br/>
• Tech Stack: React, MongoDb, ExpressJS, NodeJS, Auth0, AWS, Stripe, Redux, React Query<br/>
<br/>

<img src={review}></img>
             </p>
            </div> : currentState === 3 &&
            <div className='mt-[5vh] text-md'>

            <p className='text-bold text-pink-500 text-lg'>🌟 Code Parrot</p>
            <div className='mt-3'>🗓 01/2024 - Present </div>
            <div className='mt-3'>👩🏾‍💻 Technical Content Writer</div>
            <p className='mt-3'>
            
               • Writing and making videos on complicated Frontend Concept.
<br/>
• Read my recent writing on Webpack: <a className='text-blue-500 cursor-pointer' onClick={(e) => e.stopPropagation()}  href='https://10xdev.codeparrot.ai/webpack' rel="noreferrer" target='_blank' >Mastering Webpack- The Frontend Developer's Ultimate Guide</a><br/>
• Watch my recent video on binary addition in Javascript: <a className='text-blue-500 cursor-pointer' href='https://www.linkedin.com/feed/update/urn:li:activity:7175864666106060801/?actorCompanyId=89933786' rel="noreferrer" target='_blank' >Can you guess the output of console.log(0.1 + 0.2 === 0.3) in JavaScript?</a><br/> <br/>
<br/>


            </p>
           </div>
        
    }
   
    </div>
    <div className='sticky bottom-[7vh] pb-2 b-[rgb(246, 247, 235)]'>
    <h1 className='text-center text-lg my-[5vh] font-head  font-bold'>Click on these Icons to learn about my experiences at these companies:🌷</h1>
   
     
    <div className='flex justify-center items-end  gap-4'>
        <img src={push } alt="Push Protocol" className='w-[5vw] h-[5vh] cursor-pointer' onClick={(event) => {
             event.stopPropagation();
            setCurrentState(1)}}/>
        <img src={mvp} alt="Push Protocol" className='w-[5vw] h-[5vh] cursor-pointer' onClick={(event) => {
            event.stopPropagation();
            setCurrentState(2)}}/>
        <img src={codeparrot} alt="Push Protocol" className='w-[5vw] h-[5vh] cursor-pointer' onClick={(event) => {
            event.stopPropagation();
            setCurrentState(3)}}/>
    </div> </div>
  </div>
</div>
</div>
  )
}

export default Collection