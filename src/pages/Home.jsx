import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='h-screen bg-zinc-900'>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-zinc-900 h-screen from-blue-500 to-purple-600 text-center py-20 text-white"
      >
        <h1 className="text-5xl font-bold mb-4 mt-20 animate-bounce text-amber-300 bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">Connecting People Across Faiths & Interests!</h1>
        <p className="text-lg mb-8 mt-8 ml-18 bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent ">Connecting people of all faiths through events and community support.</p>
        <Link to="/events">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent text-2xl cursor-pointer  drop-shadow-lg border border-white text-blue-600 px-6 mt-10 py-2 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Explore Events
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;