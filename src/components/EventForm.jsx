import React, { useState } from "react";
import { motion } from "framer-motion";

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Religious");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, date, category, location });
    setTitle("");
    setDate("");
    setCategory("Religious");
    setLocation("");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-zinc-800 p-8 rounded-xl shadow-lg max-w-md mx-auto border border-zinc-700"
    >
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Add New Event
      </h3>

     
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Title</label>
        <input
          type="text"
          placeholder="Enter event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-zinc-900 text-white placeholder-gray-400"
          required
        />
      </div>

     
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-zinc-900 text-white"
          required
        />
      </div>

     
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-zinc-900 text-white"
        >
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Location</label>
        <input
          type="text"
          placeholder="Enter event location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-zinc-900 text-white placeholder-gray-400"
          required
        />
      </div>

    
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
      >
        Add Event
      </motion.button>
    </motion.form>
  );
};

export default EventForm;