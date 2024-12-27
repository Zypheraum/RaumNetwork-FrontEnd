import React, { useState } from 'react';
import { Menu, ChevronDown, DiscIcon, GitBranchIcon, Twitter } from 'lucide-react';

export function Navbar() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSocialsDropdownOpen, setIsSocialsDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleSocialsDropdown = () => {
    setIsSocialsDropdownOpen(!isSocialsDropdownOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src='https://raw.githubusercontent.com/Raum-Network/RaumNetwork-FrontEnd/refs/heads/main/src/public/Group%2061.svg' width={240}></img>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={toggleProductsDropdown}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                    <a 
                      href="/raumfi-dex" 
                      className="flex items-center block px-4 py-3 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      {/* <DiscIcon className="mr-2 h-4 w-4" /> */}
                      RaumFi DEX
                    </a>
                    <a 
                      href="/chrysalis" 
                      className="flex items-center block px-4 py-3 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      {/* <DiscIcon className="mr-2 h-4 w-4" /> */}
                      Chrysalis <span className="text-sm text-gray-400">(Coming Soon)</span>
                    </a>
                    <a 
                      href="/raumstore" 
                      className="flex items-center block px-4 py-3 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      {/* <DiscIcon className="mr-2 h-4 w-4" /> */}
                      RaumStore
                    </a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={toggleSocialsDropdown}
                >
                  Socials
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isSocialsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                    <a 
                      href="https://discord.com" 
                      className="flex items-center block px-4 py-3 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      <DiscIcon className="mr-2 h-4 w-4" />
                      Discord
                    </a>
                    <a 
                      href="https://github.com" 
                      className="flex items-center block px-4 py-3 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      <GitBranchIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="flex items-center block px-4 py-3 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Solutions
              </a>
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