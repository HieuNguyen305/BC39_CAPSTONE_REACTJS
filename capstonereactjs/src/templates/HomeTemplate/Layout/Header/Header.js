import React from 'react'
import {NavLink} from 'react-router-dom';


export default function Header(props) {
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" activeClassName="border-b-1 border-white">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" activeClassName="border-b-1 border-white">Contact</NavLink>
                    </li>
                    
                </ul>
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="CGV Cinemas" className="large"/>
                </a>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" activeClassName="border-b-1 border-white">News</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/aboutUS" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" activeClassName="border-b-1 border-white">About Us</NavLink>
                    </li>
                    
                </ul>
                <button title="Button" type="button" className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
