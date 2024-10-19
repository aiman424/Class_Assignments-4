import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Skills = () => {
  return (
    <div className='bg-sky-700 text-center w-full h-full'>
      <Header/>
      <h1 className='text-black font-semibold flex justify-center'>My Skills</h1>
      <ul className='font-normal text-pretty text-gray-900 flex-auto'>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Skills
