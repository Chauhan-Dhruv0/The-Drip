import React from 'react'
import TopBar from '../Layout/TopBar'
import Navbar from './Navbar'

function Header() {
    return (
        <header className='border-b border-gray-200'>
            <TopBar />
            {/* Topbar */}
            <Navbar />
            {/* Navbar */}
            
            {/* CartDraw */}
        </header>
    )
}

export default Header