
import React from 'react'
import logo from '../../assets/logo.png'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-gray-100 pt-7'>
      <div className='container'>
        <div className='flex flex-col sm:items-center'>
          <h1 className='flex items-center gap-2 text-2xl font-bold'><img src={logo} alt="" className='w-12' /> Burger King</h1>
          <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil ullam facilis nobis laboriosam aliquam.</p>

          <div className='flex gap-2 items-center mt-4'>
            <FaLocationArrow />
            <p className='font-medium'> 123 Street, City, Country</p>
          </div>
          <div className='flex gap-2 items-center  '>
            <FaMobileAlt />
            <p className='font-medium'>1234567890</p>
          </div>
          <div className='flex gap-3 mt-3 ml-3'>
            <a href=""><FaInstagram className='text-2xl' /></a>
            <a href=""><FaLinkedin className='text-2xl' /></a>
            <a href=""><FaFacebook className='text-2xl' /></a>
          </div>
        </div>
        <div className='text-center mt-4 py-5 border-t-2 border-gray-300/50
        '>
          @copyright 2024 || Suresh Jadhav
        </div>
      </div>
    </div>
  )
}

export default Footer