import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <h1>Hello</h1>
      <img src={assets.logo} className="w-36" alt="Logo" />
    </div>
  )
}

export default Navbar



