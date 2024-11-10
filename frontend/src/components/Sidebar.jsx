import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const [rcOpen, setRcOpen] = useState(false);
  const [hallsOpen, setHallsOpen] = useState(false);
  const [housesOpen, setHousesOpen] = useState(false);
  const [residencesOpen, setResidencesOpen] = useState(false);

  return (
    <aside className="w-[250px] h-screen bg-gray-100 text-gray-700 font-poppins p-4 text-m text-center justify-between">
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
            <Link to="/college1" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Tembusu College
            </Link>
            <Link to="/college2" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Residential College 4
            </Link>
            <Link to="/college3" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              College of Alice & Peter Tan
            </Link>
            <Link to="/college3" className="block p-2 text-start hover:bg-blue-50 hover:bg-opacity-80 rounded-lg text-sm">
              Ridgeview Residential College
            </Link>
          </div>
        )}
      </div>
      <div role="button" class="flex items-center w-full p-3 rounded-lg text-start transition-all
        hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80
        hover:text-NUSOrange focus:text-NUSOrange active:text-NUSOrange">
          <Link to="/">Halls of Residence</Link>
      </div>
      <div role="button" class="flex items-center w-full p-3 rounded-lg text-start transition-all
        hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80
        hover:text-NUSOrange focus:text-NUSOrange active:text-NUSOrange">
          <Link to="/">Houses</Link>
      </div>
      <div role="button" class="flex items-center w-full p-3 rounded-lg text-start transition-all
        hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80
        hover:text-NUSOrange focus:text-NUSOrange active:text-NUSOrange" >
          <Link to="/">Student Residences</Link>
      </div>
    </aside>
  )
}

export default Sidebar