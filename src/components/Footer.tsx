import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold gradient-text mb-4">Raum Network</h2>
          <p className="text-gray-600 mb-4">
            A comprehensive suite of Web3 infrastructure solutions designed for the next generation of decentralized applications.
          </p>
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} Raum Network. All rights reserved.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold gradient-text mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold gradient-text mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 24 24">
                {/* Discord Icon */}
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.25 3.438 9.688 8.207 11.188.6.113.793-.261.793-.577 0-.287-.011-1.045-.016-2.052-3.338.724-4.042-1.607-4.042-1.607-.546-1.38-1.333-1.749-1.333-1.749-1.086-.743.083-.728.083-.728 1.204.085 1.838 1.237 1.838 1.237 1.067 1.826 2.8 1.298 3.48.993.108-.773.418-1.298.76-1.598-2.665-.303-5.466-1.333-5.466-5.933 0-1.313.469-2.386 1.236-3.227-.124-.303-.536-1.53.117-3.187 0 0 1.008-.322 3.303 1.227.957-.266 1.986-.398 3.006-.403 1.02.005 2.049.137 3.006.403 2.295-1.549 3.303-1.227 3.303-1.227.653 1.657.241 2.884.118 3.187.767.841 1.236 1.914 1.236 3.227 0 4.608-2.805 5.63-5.475 5.925.43.37.815 1.099.815 2.22 0 1.604-.014 2.903-.014 3.293 0 .319.192.694.798.577C20.563 21.688 24 17.25 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M23.643 4.937c-.835.37-1.73.616-2.675.726a4.675 4.675 0 002.042-2.573 9.293 9.293 0 01-2.975 1.136A4.646 4.646 0 0016.616 4c-2.573 0-4.655 2.083-4.655 4.655 0 .365.042.72.125 1.063-3.872-.194-7.31-2.052-9.605-4.87a4.646 4.646 0 00-.628 2.34c0 1.617.823 3.043 2.073 3.88a4.63 4.63 0 01-2.107-.582v.058c0 2.253 1.604 4.134 3.733 4.563a4.675 4.675 0 01-2.1.08c.592 1.847 2.308 3.194 4.34 3.23a9.34 9.34 0 01-5.78 1.99c-.375 0-.743-.022-1.107-.065a13.186 13.186 0 007.157 2.1c8.588 0 13.292-7.113 13.292-13.292 0-.202-.005-.404-.014-.605a9.43 9.43 0 002.309-2.4z" />
              </svg>
              Twitter
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 23 24">
                {/* Telegram Icon */}
                <path d="M19.54 5.23c.35-.14.36-.27.03-.34L3.33 10.8c-.49.16-.49.47-.02.62l4.27 1.39 10.02-6.67c.17-.11.32-.06.2.09L10.3 13.54l.19 2.31c.02.25.15.25.34.16l2.34-1.33 4.09 2.82c.33.23.58.1.69-.24L19.54 5.23z"/>
              </svg>
              Telegram
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
