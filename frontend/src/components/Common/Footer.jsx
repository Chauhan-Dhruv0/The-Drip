import React from 'react'
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-white  text-black py-10 px-6 md:px-16 min-h-[300px] flex flex-col justify-center">
      <div className="max-w-7xl text-center mx-auto grid md:grid-cols-3 gap-10 h-full">

        {/* Email section */}
        <div>
          <h3 className="text-lg font-semibold uppercase">
            Get updates on New clothes you probably want to know about in your inbox.
          </h3>
          <div className="mt-4 flex border-b border-black w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent outline-none flex-1 py-2 px-3"
            />
            <button className="px-3">➡</button>
          </div>

        </div>


        <div>
          {/* <h4 className="text-lg font-semibold">Menu</h4> */}
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/collections/all" className="hover:underline">Shop All</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><a href="#" className="hover:underline italic">Community (Vibes)</a></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold">Support</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="my-orders" className="hover:underline">Shipping & Returns</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Help & FAQ</Link></li>
            <li><Link to="/Terms-conditions"  className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/Terms-conditions" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center border-t border-black pt-6">
        <div className="flex space-x-4">
          <a href="#" className="text-2xl">
            <TbBrandMeta className='w-8 h-8' />
          </a>
          <a href="#" className="text-2xl"><IoLogoInstagram className='w-8 h-8' /></a>
          <a href="https://x.com/elonmusk" target="_blank" className="text-2xl"><RiTwitterXLine className='w-8 h-8'/></a>
        </div>
        {/* <a href="#" className="text-2xl">▲</a> */}
      </div>
    </footer>
  )
}

export default Footer