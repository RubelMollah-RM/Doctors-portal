import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const menuitem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li><Link to={"/appointment"}>Appointment</Link></li>
        <li><Link to={'reviews'}>Reviews</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitem}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl  ml-6 justify-center align-middle text-white">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal  text-white  hover:border-b-secondary">
                    {menuitem}
                </ul>
            </div>          
        </div>
    );
};

export default Navbar;