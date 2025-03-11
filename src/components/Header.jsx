import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header className="bg-zinc-800 text-white p-4 flex justify-between items-center shadow-lg relative flex-col md:flex-row">
      <div className="flex justify-between w-full md:w-auto">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Communion App
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      <nav className={`w-full md:w-auto md:flex sm:ml-10 md:mr-10 md:space-x-6 bg-zinc-800 md:bg-transparent p-4 md:p-0 transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block md:inline hover:text-blue-400 transition duration-300 font-semibold py-2">Home</Link>
        <Link to="/events" className="block md:inline hover:text-blue-400 transition duration-300 font-semibold py-2">Events</Link>
        <Link to="/about" className="block md:inline hover:text-blue-400 transition duration-300 font-semibold py-2">About</Link>
      </nav>
    </motion.header>
  );
};

export default Header;