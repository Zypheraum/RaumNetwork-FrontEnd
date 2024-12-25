import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="gradient-text text-2xl font-bold tracking-tight">Raum.Network</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Socials
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Solutions
              </a>
              {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a> */}
            </div>
          </div>
          
          <button className="md:hidden text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}