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
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {/* Icon for social media */}
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {/* Icon for social media */}
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {/* Icon for social media */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
