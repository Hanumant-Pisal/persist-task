import React from 'react';
import { motion } from 'framer-motion';

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 rounded-lg shadow-md bg-zinc-800 mt-8 text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-200"><strong>Date:</strong> {event.date}</p>
          <p className="text-gray-300"><strong>Location:</strong> {event.location}</p>
          <p className="text-gray-300"><strong>Category:</strong> {event.category}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default EventList;