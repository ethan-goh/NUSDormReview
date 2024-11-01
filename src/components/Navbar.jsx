import React from 'react'

function Navbar () {
  return (   
    <nav class="w-screen bg-NUSOrange h-fit overflow-hidden">
        <div class="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between font-poppins"> 
            <div>
                <h1 class="lg:text-2xl text-xl cursor-pointer font-semibold">NUSDormReviews</h1>
            </div>
            <div class="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center">
                <div class="hover:pb-2 hover:border-b-4 hover:border-white">
                    <span class="group">
                        About
                    </span>
                </div>
                <div class="hover:pb-2 hover:border-b-4 hover:border-white">
                    <span class="group">
                        Contact
                    </span>
                </div>
            </div>
            
        </div>


    </nav>
  )
}

export default Navbar;
