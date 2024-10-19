import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center bg-gray-900 text-white p-4'>
        <div >
        <p>© 2024 Governor House. All rights reserved.</p>
        <h2>Follow Me</h2>
        <ul>
            <div>
            <li><a href="https://github.com/aiman424" target="_blank" className='text-blue-700 hover:underline'>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/aiman-rizwan-3468112b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app" 
            target='_blank' className='text-blue-700 hover:underline'>LinkedIn</a></li>
            <li><a href="https://www.instagram.com/_aiman_rizwan/profilecard/?igsh=MTQ1ZGNyd3R1dnF3OQ==" target='_blank' className='text-blue-700 hover:underline'>Instagram</a></li>
            </div>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
