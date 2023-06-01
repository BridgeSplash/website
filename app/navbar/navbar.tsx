'use client';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-10 fixed left-0 top-0 ${isScrolled ? 'bg-dark transition duration-1000' : 'bg-transparent duration-500'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a className="text-white text-lg font-bold" href="/">
            BridgeSplash
          </a>

          <div className="flex items-center w-auto">
            <ul className="flex items-center justify-end space-x-4">
              <li>
                <a className="text-white hover:text-gray-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-300" href="https://store.bridgesplash.net">
                  Store
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-300" href="/profile">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
