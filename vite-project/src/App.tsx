import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='xl:h-[100vh] flex justify-center '>
        <div className='xl:w-11/12 text-center '>

        <h1 className=' xl:mb-10 text-sm font-thin font-sans xl:text-4xl'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h1>
        <img className=' xl:w-full  mt-5' src="src/assets/img.png" alt="fortnite" />
          <p className='text-sm xl:text-xl mt-8 xl:mx-16 font-normal text-gray-300 xl:pt-10 xl:pb-10'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
          <button className='h-8 text-sm w-40 mt-5 mb-5 bg-white text-black font-medium xl:w-72 xl:h-14'>Visit Website</button>


        <div className='xl:mt-20 xl:w-12/12 block w-full    md:flex  md:justify-around'>
          <div className='md:w-full xl:w-72  text-center   '>
            

            <img src="src/assets/img1.png" className='xl:h-64 h-56 ml-12 md:ml-10 ' alt="img1" />
            <p className='xl:mt-5 font-thin mx-10  md:mx-0' >Explore large, destructible environments where no two games are ever the same.</p>

          </div>
          <div className='xl:w-72 md:w-full text-center  '>
            <img src="src/assets/img2.png" className='xl:h-64  h-56 ml-12 md:ml-10 xl:ml-0' alt="img1" />
            <p className='xl:mt-5 font-thin mx-10 md:mx-0 xl:mx-0' >Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
          </div>
          <div className='xl:w-72 md:w-full text-center  '>
            <img src="src/assets/img3.png" className='xl:h-64 h-56 w-52 ml-12 md:ml-10   xl:w-64' alt="img1" />
            <p className='xl:mt-5 font-thin mx-10 md:mx-0' >Discover even more ways to play across thousands of creator-made game genres</p>
          </div>
        </div>

        <div className='xl:mt-28 mt-14'>
          <h1 className='text-4xl font-thin mb-10'>Our Contribution</h1>
          <p className='xl:mt-6 xl:mx-28 text-sm xl:text-xl font-thin'>
Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
          <div className='block  xl:flex justify-around xl:mt-20 '>
            <div className='xl:w-40 mt-5'>
              <h1 className='text-6xl font-thin xl:mb-3 '>5M</h1>
              <p className='mx-20 xl:mx-0'>Daily user Engagement</p>
            </div>
            <div className='xl:w-40 mt-5'>
              <h1 className='text-6xl font-thin xl:mb-3 '>$500K</h1>
              <p className='mx-20 xl:mx-0'>Revenue Surge for an Platform</p>
            </div>
            <div className='xl:w-40 mt-5'>
              <h1 className='text-6xl font-thin xl:mb-3 '>10X</h1>
              <p className='mx-20 xl:mx-0'>ROAS on all our 
marketing campaigns</p>
            </div>
          </div>
        </div>


        <div className='xl:mt-64'>
          <h1 className='text-2xl mt-5 mb-5 xl:text-4xl'>Interested in delving deeper into the project?</h1>
          <p className='text-sm xl:mx-52 xl:text-xl font-thin xl:mt-10'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span className='font-semibold'>hello@abc.com</span> or give us a call at <span className='font-semibold'>+91 480 20802730.</span></p>
          <div className='block xl:flex xl:justify-center xl:mt-20'>
          <button className='bg-black border w-full mb-5 mt-5 xl:mt-0 xl:mb-0 text-sm h-8 border-white text-white  font-medium xl:w-72 xl:h-12 xl:mr-10'>Ring us on Skype</button>
          <button className='bg-white text-black w-full h-8  font-medium xl:w-72 xl:h-12'>Contact us</button>




          </div>
          <p className='font-thin xl:mt-52 mt-20 text-sm'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>







        </div>

      </div>
    </>
  )
}

export default App
