import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center text-white"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-bounce bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Connecting People Across Faiths & Interests!
        </h1>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Connecting people of all faiths through events and community support.
        </p>
        <Link to="/events">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-400 to-pink-400 text-white text-lg sm:text-2xl cursor-pointer drop-shadow-lg border border-white px-6 py-2 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Explore Events
          </motion.button>
        </Link>
      </motion.div>

     
      <section className="py-12 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
           
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src="https://t3.ftcdn.net/jpg/07/16/61/74/360_F_716617451_g8NSrtzvYd2XAq3wZO7YbxkWntz12r6Z.jpg" 
                alt="Event 1"
                className="w-full h-48 object-cover "
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Community Gathering</h3>
                <p className="text-base text-gray-300 mb-4">
                  Join us for a community gathering where we share stories, food, and laughter.
                </p>
              
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src="https://img.freepik.com/premium-photo/worshipers-christian-faith-concept-raising-hands-praise-nighttime-music-event-concept-nighttime-praise-worship-christian-faith-music-event-raising-hands-spiritual-celebration_918839-39836.jpg" // Replace with your image URL
                alt="Event 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Faith & Music Night</h3>
                <p className="text-base text-gray-300 mb-4">
                  An evening of music and faith, featuring performances from talented artists.
                </p>
               
              </div>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src="https://thumbs.dreamstime.com/b/concept-de-dons-charit%C3%A9-avec-les-mains-vides-d-enfants-parent-familial-priant-ainsi-que-la-trajectoire-coupe-186159719.jpg" 
                alt="Event 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Charity Drive</h3>
                <p className="text-base text-gray-300 mb-4">
                  Help us make a difference by donating to those in need.
                </p>
               
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
      <Contact />

     
      <Footer />
    </div>
  );
};

export default Home;