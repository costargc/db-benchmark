import React from 'react';

const Navbar = () => (
    <nav className="w-full flex items-center p-4 bg-white shadow-md">
        <ul className="text-left">
            <li className="text-sm font text-blue-900">
                ULL Colocation - Bank on Tech 2025<br />
                <span>Deutsche Bank</span>
            </li>
        </ul>
        <img src="/logo.svg" alt="Deutsche Bank" className="h-9 ml-auto" />
    </nav>
);

export default Navbar;