import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12"
      >
        <motion.div 
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10"
        >
          <motion.h1 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-12 drop-shadow-lg"
          >
            Communion App
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl leading-relaxed text-gray-300 text-center mb-12"
          >
            Welcome to <strong className="font-semibold text-teal-300">Communion App</strong>, a platform designed to connect people of all faiths and interests through meaningful events and community support. Our mission is to foster unity, understanding, and collaboration among individuals and groups.
          </motion.p>

          <div className="space-y-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-zinc-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-4xl font-bold text-pink-400 mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Our mission is to bridge gaps between communities by providing a platform that encourages inclusivity, collaboration, and shared experiences. We believe that by bringing people together, we can create a more connected and compassionate world.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-zinc-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-4xl font-bold text-pink-400 mb-6">Features</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-300 pl-4">
                <li className="text-lg transition-all hover:text-teal-300">Discover events tailored to your interests.</li>
                <li className="text-lg transition-all hover:text-teal-300">Filter events by category (Religious, Social, Charity).</li>
                <li className="text-lg transition-all hover:text-teal-300">Create and manage your own events.</li>
                <li className="text-lg transition-all hover:text-teal-300">Connect with like-minded individuals and communities.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-zinc-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-4xl font-bold text-pink-400 mb-6">Join Us</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Whether you're an event organizer or a participant, we invite you to join our growing community. Together, we can make a difference and build lasting connections.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;