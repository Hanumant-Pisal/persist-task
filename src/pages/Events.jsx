import React, { useState } from 'react';
import Header from '../components/Header';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import { motion } from 'framer-motion';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Community Prayer',description:'Join us for a peaceful and uplifting community prayer session at St. Mary Church. This event is open to everyone, regardless of faith or background. Together,', date: '2023-10-15', category: 'Religious', location: 'St. Mary Church' },
    { id: 2, title: 'Charity Run',description:'Lace up your running shoes and join us for the annual Charity Run at Central Park! This fun and energetic event is dedicated to raising funds for local underprivileged families.', date: '2023-11-05', category: 'Charity', location: 'Central Park' },
    { id: 3, title: 'Random event', description:'Participants can choose between a 5K or 10K route. All proceeds will go directly to providing food, shelter, and education for those in need.',date: '2025-11-05', category: 'Social', location: 'Mumbai' },
  ]);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
    setIsModalOpen(false); 
  };

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto p-6"
      >
        <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Event List
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center mt-8">
            <label className="mr-2 text-white">Filter by Category:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border rounded bg-zinc-800 w-50 ml-8 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="All">All</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 w-full sm:w-auto"
          >
            + Add Event
          </motion.button>
        </div>
        <EventList events={filteredEvents} />
      </motion.div>

      
      {isModalOpen && (
        <EventForm
          addEvent={addEvent}
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Events;