import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='bg-sky-700 text-center  justify-center w-full'>
      <Header/>
      <h1 className='text-black font-semibold flex justify-center'>About Me</h1>
      <p className='font-medium flex justify-center'>I am an expert in JavaScript, HTML, CSS, TypeScript, and Next.js. 
      With a strong command of both frontend and backend technologies,I specialize in building dynamic, 
      responsive web applications. My expertise in these tools allows me to develop efficient, scalable,
      and user-friendly solutions that meet modern web development standards.</p>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default About
