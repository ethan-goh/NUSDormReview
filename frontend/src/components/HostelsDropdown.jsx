import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HostelsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveCategory('')
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? '' : category);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="hover:text-NUSOrange transition-all focus:outline-none"
      >
        Hostels
        <svg className="ml-2 h-4 w-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-slate-200 shadow-lg rounded-lg z-50 text-gray-700">
          <div>
            <div
              onClick={() => handleCategoryClick('residentialColleges')}
              className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              Residential Colleges
              <svg className="ml-2 h-4 w-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            {activeCategory === 'residentialColleges' && (
              <div className="m-4 mt-2 space-y-2">
                <Link to="/Tembusu-College/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Tembusu College
                </Link>
                <Link to="/Residential-College-4/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Residential College 4
                </Link>
                <Link to="/College-of-Alice-&-Peter-Tan/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  College of Alice & Peter Tan
                </Link>
                <Link to="/Ridge-View-Residential-College/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Ridge View Residential College
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => handleCategoryClick('halls')}
              className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              Halls of Residence
              <svg className="ml-2 h-4 w-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            {activeCategory === 'halls' && (
              <div className="m-4 mt-2 space-y-2">
                <Link to="/Eusoff-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Eusoff Hall
                </Link>
                <Link to="/Temasek-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Temasek Hall
                </Link>
                <Link to="/Raffles-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Raffles Hall
                </Link>
                <Link to="/Kent-Ridge-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Kent Ridge Hall
                </Link>
                <Link to="/Sheares-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Sheares Hall
                </Link>
                <Link to="/King-Edward-VII-Hall/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  King Edward VII Hall
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => handleCategoryClick('houses')}
              className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              Houses
              <svg className="ml-2 h-4 w-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            {activeCategory === 'houses' && (
              <div className="m-4 mt-2 space-y-2">
                <Link to="/Helix-House/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Helix House
                </Link>
                <Link to="/LightHouse/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  LightHouse
                </Link>
                <Link to="/Pioneer-House/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  Pioneer House
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => handleCategoryClick('studentResidences')}
              className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              Student Residences
              <svg className="ml-2 h-4 w-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            {activeCategory === 'studentResidences' && (
              <div className="m-4 mt-2 space-y-2">
                <Link to="/PGP-Residence/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  PGP Residence
                </Link>
                <Link to="/UTown-Residence/reviews" className="block p-2 text-start hover:bg-blue-50 rounded-lg text-sm">
                  UTown Residence
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelsDropdown;
