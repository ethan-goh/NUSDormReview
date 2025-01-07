import React from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import HostelsDropdown from './HostelsDropdown';

const Navbar = ({ onFormClick }) => {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleLogout = () => {
        logout()
    }
  return (   
    <nav class="w-full top-0 z-50 bg-black h-fit fixed">
        <div class="py-4 w-full px-8 h-16 m-auto text-white flex items-center justify-between font-poppins"> 
            <div>
                <h1 class="lg:text-2xl text-xl cursor-pointer items-left font-semibold">
                    <Link to="/">NUSDormReviews</Link>
                </h1>
            </div>
            <div class="flex lg:gap-8 gap-6 tracking-wider text-base items-right">
                <HostelsDropdown />
                {user && (
                    <div class="flex gap-6">
                        <button class="flex transition-all transform hover:scale-105 hover:text-NUSOrange" onClick={onFormClick}>New Review</button>
                        <button class="flex transition-all transform hover:scale-105 hover:text-NUSOrange" onClick={handleLogout}>Log out</button>
                        <span class="text-sm my-0.5">{user.email}</span>                       
                    </div>
                )}
                {!user && (
                    <div class="flex gap-6">
                        <Link role="button" to="/login" class="flex transition-all transform hover:scale-105 hover:text-NUSOrange">Login</Link>                   
                        <Link role="button" to="/signup" class="flex transition-all transform hover:scale-105 hover:text-NUSOrange">Signup</Link>                   
                    </div>
                )}
                
            </div>
            
        </div>


    </nav>
  )
}

export default Navbar;
