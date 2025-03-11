import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='min-h-screen bg-zinc-900'>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center text-white"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6  animate-bounce bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Connecting People Across Faiths & Interests!
        </h1>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Connecting people of all faiths through events and community support.
        </p>
        <Link to="/events">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent text-lg sm:text-2xl cursor-pointer drop-shadow-lg border border-white px-6 py-2 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Explore Events
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;