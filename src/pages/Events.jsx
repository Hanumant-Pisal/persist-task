import React, { useState } from 'react';
import Header from '../components/Header';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import { motion } from 'framer-motion';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Community Prayer', date: '2023-10-15', category: 'Religious', location: 'St. Mary Church' },
    { id: 2, title: 'Charity Run', date: '2023-11-05', category: 'Charity', location: 'Central Park' },
    {id: 3, title: 'Random event', date: '2025-11-05', category: 'Social', location: 'Mumbai' },
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
        <h1 className="text-5xl font-bold mb-8  text-center bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">Event List</h1>
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
            className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            + Add Event
          </motion.button>
        </div>
        <EventList events={filteredEvents} />
      </motion.div>

      {/* Modal for EventForm */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Add New Event</h2>
            <EventForm addEvent={addEvent} />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Events;