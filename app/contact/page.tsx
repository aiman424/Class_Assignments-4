import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='bg-sky-600 text-center w-full h-full'>
      <Header/>
      <h1 className='text-black font-semibold flex justify-center'>Contact Me</h1>
      <input className='border-separate border-2 mt-1  border-purple-800 placeholder-black' type="text" name="text" id="text" placeholder='Enter Your Name' required/>
      <br/>
      <input  className='border-separate border-2 mt-5 border-green-700 placeholder-black' type="Email" name="Email" id="Email" placeholder='Enter your Email' required/>
      <br/>
      <input className='border-separate border-2 mt-5 border-yellow-600 placeholder-black' type="number" name="phone" id="phone" placeholder='Enter Your Phone Number' required/>
      <br/>
      <textarea className='border-separate border-2 mt-5 border-amber-600 placeholder-black' name="textarea" id="textarea" placeholder='Anythimg Write For Me'></textarea>
      <Footer/>
    </div>
  )
}


export default Contact
