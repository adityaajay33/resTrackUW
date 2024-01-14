import React from 'react'
import Link from "next/link"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='mainLinks'>
            <Link className='linksOnline' href='https://www.google.com/?client=safari'>
                Home
            </Link>
        </div>
        <div className='mainLinks'>
            <Link className='linksOnline' href='https://www.google.com/?client=safari'>
                About Us
            </Link>
        </div>
    </div>
  )
}

export default Navbar