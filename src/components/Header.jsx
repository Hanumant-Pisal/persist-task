import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      
      className="bg-zinc-800 text-white p-4 flex justify-between items-center shadow-lg"
    >
      <Link to="/"  className="logo text-xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent  drop-shadow-lg">Communion App</Link>
      <nav className="space-x-4 mr-20">
        <Link to="/" className="hover:text-blue-400 transition duration-300 font-semibold">Home</Link>
        <Link to="/events" className="hover:text-blue-400 transition duration-300 ml-6 font-semibold">Events</Link>
        <Link to="/about" className="hover:text-blue-400 transition duration-300 ml-6 font-semibold">About</Link>
      </nav>
    </motion.header>
  );
};

export default Header;