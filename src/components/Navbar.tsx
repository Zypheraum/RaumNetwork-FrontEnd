import React from 'react';
import { Menu, DiscIcon, GitBranchIcon, Twitter } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src='https://raw.githubusercontent.com/Raum-Network/RaumNetwork-FrontEnd/refs/heads/main/src/public/Group%2061.svg' 
              width={240} 
              alt="Raum Network"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {/* Products Menu */}
              <div className="relative group">
                <button className="flex items-center text-gray-600 transition-colors">
                  Products
                </button>
                <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <a 
                      href="/raumfi-dex" 
                      className="flex items-center px-4 py-3 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white transition-all duration-200"
                    >
                      RaumFi DEX
                    </a>
                    <a 
                      href="/chrysalis" 
                      className="flex items-center px-4 py-3 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white transition-all duration-200"
                    >
                      Chrysalis <span className="ml-2 text-sm text-gray-400 ">(Coming Soon)</span>
                    </a>
                    <a 
                      href="/raumstore" 
                      className="flex items-center px-4 py-3 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white transition-all duration-200"
                    >
                      RaumStore
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials Menu */}
              <div className="relative group">
                <button className="flex items-center text-gray-600 transition-colors">
                  Socials
                </button>
                <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <a 
                      href="https://discord.com" 
                      className="flex items-center px-4 py-3 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white transition-all duration-200"
                    >
                      <DiscIcon className="mr-2 h-4 w-4 " />
                      Discord
                    </a>
                    <a 
                      href="https://github.com" 
                      className="flex items-center px-4 py-3 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white transition-all duration-200"
                    >
                      <GitBranchIcon className="mr-2 h-4 w-4 " />
                      GitHub
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="flex items-center px-4 py-3 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white transition-all duration-200"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              <a 
                href="https://service.raum.network" 
                target='_blank' 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Solutions
              </a>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    <img 
                      src='https://raw.githubusercontent.com/Raum-Network/RaumNetwork-FrontEnd/refs/heads/main/src/public/Group%2061.svg' 
                      width={180} 
                      alt="Raum Network"
                      className="mx-0 mb-6"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="space-y-4 border-b pb-4">
                    <p className="text-sm font-bold text-black-500">Products</p>
                    <div className="space-y-2">
                      <a 
                        href="/raumfi-dex" 
                        className="block px-4 py-2 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white rounded-md transition-all duration-200"
                      >
                        RaumFi DEX
                      </a>
                      <a 
                        href="/chrysalis" 
                        className="block px-4 py-2 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white rounded-md transition-all duration-200"
                      >
                        Chrysalis <span className="text-sm text-gray-400 ">(Coming Soon)</span>
                      </a>
                      <a 
                        href="/raumstore" 
                        className="block px-4 py-2 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white rounded-md transition-all duration-200"
                      >
                        RaumStore
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-4 border-b pb-4">
                    <p className="text-sm font-bold text-black-500">Socials</p>
                    <div className="space-y-2">
                      <a 
                        href="https://discord.com" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white rounded-md transition-all duration-200"
                      >
                        <DiscIcon className="mr-2 h-4 w-4" />
                        Discord
                      </a>
                      <a 
                        href="https://github.com" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white rounded-md transition-all duration-200"
                      >
                        <GitBranchIcon className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                      <a 
                        href="https://twitter.com" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white rounded-md transition-all duration-200"
                      >
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a 
                      href="https://service.raum.network" 
                      target="_blank"
                      className="block px-4 py-2 text-black-500 hover:bg-gradient-to-br hover:bg-[#2563eb] hover:to-transparent hover:text-white rounded-md transition-all duration-200"
                    >
                      Solutions
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}