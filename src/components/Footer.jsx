import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Communion App. All rights reserved.
        </p>
        <p className="text-sm sm:text-base mt-2">
          Made by Hanumant Pisal
        </p>
      </div>
    </footer>
  );
};

export default Footer;