import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const [rcOpen, setRcOpen] = useState(false);
  const [hallsOpen, setHallsOpen] = useState(false);
  const [housesOpen, setHousesOpen] = useState(false);
  const [residencesOpen, setResidencesOpen] = useState(false);

  return (
    <aside className="w-[250px] h-screen bg-gray-100 text-gray-700 font-poppins p-4 text-m text-center justify-between fixed top-16">
      <div>
        <div onClick={() => setRcOpen(!rcOpen)} role="button" class="flex items-center w-full p-3 rounded-lg text-start transition-all
          hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80
          hover:text-NUSOrange focus:text-NUSOrange active:text-NUSOrange">
            Residential Colleges
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9 l-7 7 -7 -7">
              </path>
            </svg>
        </div>
        {rcOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link to="/Tembusu-College/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Tembusu College
            </Link>
            <Link to="/Residential-College-4/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Residential College 4
            </Link>
            <Link to="/College-of-Alice-&-Peter-Tan/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              College of Alice & Peter Tan
            </Link>
            <Link to="/Ridge-View-Residential-College/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Ridge View Residential College
            </Link>
          </div>
        )}
      </div>
      <div onClick={() => setHallsOpen(!hallsOpen)} role="button" class="flex items-center w-full p-3 rounded-lg text-start transition-all
        hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80
        hover:text-NUSOrange focus:text-NUSOrange active:text-NUSOrange">
          Halls of Residence
        <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9 l-7 7 -7 -7">
            </path>
        </svg>
      </div>
      {hallsOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link to="/Eusoff-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Eusoff Hall
            </Link>
            <Link to="/Temasek-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Temasek Hall
            </Link>
            <Link to="/Raffles-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Raffles Hall
            </Link>
            <Link to="/Kent-Ridge-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Kent Ridge Hall
            </Link>
            <Link to="/Sheares-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Sheares Hall
            </Link>
            <Link to="/King-Edward-VII-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              King Edward VII Hall
            </Link>
          </div>
        )}
      <div onClick={() => setHousesOpen(!housesOpen)} role="button" class="flex items-center w-full p-3 rounded-lg text-start transition-all
        hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80
        hover:text-NUSOrange focus:text-NUSOrange active:text-NUSOrange">
          Houses
          <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9 l-7 7 -7 -7">
              </path>
          </svg>
      </div>
      {housesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link to="/Helix-House/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Helix House
            </Link>
            <Link to="/LightHouse/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              LightHouse
            </Link>
            <Link to="/Pioneer-House/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Pioneer House
            </Link>
          </div>
        )}
      <div onClick={() => setResidencesOpen(!residencesOpen)} role="button" class="flex items-center w-full p-3 rounded-lg text-start transition-all
        hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80
        hover:text-NUSOrange focus:text-NUSOrange active:text-NUSOrange" >
          Student Residences
          <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9 l-7 7 -7 -7">
              </path>
          </svg>
      </div>
      {residencesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link to="/PGP-Residence/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              PGP Residence
            </Link>
            <Link to="/UTown-Residence/reviews" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              UTown Residence
            </Link>
          </div>
        )}
    </aside>
  )
}

export default Sidebar