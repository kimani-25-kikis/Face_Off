import React from 'react';

const Footer = () => {
  return (
    <footer 
      // Set dark background and generous vertical padding
      className="bg-zinc-950 py-10 text-gray-400 border-t border-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        {/* First line: Copyright and Name */}
        <p className="text-sm font-sans tracking-wide mb-1">
          &copy; 2025 Face Off Model & Cast Management. All rights reserved.
        </p>
        {/* Second line: Tagline (slightly smaller, lighter, and uppercase for emphasis) */}
        <p className="text-xs text-gray-600 uppercase tracking-widest">
          Talent that drives brands.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
