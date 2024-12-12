import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold gradient-text mb-4">Raum Network</h2>
        <p className="text-gray-600 mb-4">
          © {new Date().getFullYear()} Raum Network. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}