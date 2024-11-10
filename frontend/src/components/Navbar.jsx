import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (   
    <nav class="w-screen bg-black h-fit overflow-hidden">
        <div class="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between font-poppins"> 
            <div>
                <h1 class="lg:text-2xl text-xl cursor-pointer font-semibold">
                    <Link to="/">NUSDormReviews</Link>
                </h1>
            </div>
            <div class="flex lg:gap-8 gap-6 uppercase tracking-wider text-lg items-center">
                <div role="button" class="hover:pb-2 hover:border-b-4 hover:border-NUSOrange hover:text-NUSOrange">
                    <span>
                        <Link to="/about">About</Link>
                    </span>
                </div>
                <div role="button" class="hover:pb-2 hover:border-b-4 hover:border-NUSOrange hover:text-NUSOrange">
                    <span>
                        <Link to="/contact">Contact</Link>
                    </span>
                </div>
            </div>
            
        </div>


    </nav>
  )
}

export default Navbar;
