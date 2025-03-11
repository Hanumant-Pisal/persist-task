import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const EventForm = ({ addEvent, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Religious");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, description, date, category, location });
    onClose(); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <motion.form
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-zinc-900/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10"
      >
        
        <button
          type="button"
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <X size={28} className="drop-shadow-md" />
        </button>

       
        <h3 className="text-3xl font-bold text-center text-white mb-6">Add New Event</h3>
        <div className="space-y-4">
         
          <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-300">Title</label>
            <input
              type="text"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-700 bg-zinc-800 text-white placeholder-gray-400 shadow-md focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>


          <div>
  <label className="text-sm font-medium text-gray-300">Description</label>
  <textarea
    placeholder="Enter event description"
    value={description} 
    onChange={(e) => setDescription(e.target.value)} 
    className="w-full p-3 rounded-xl border border-gray-700 bg-zinc-800 text-white placeholder-gray-400 shadow-md focus:ring-2 focus:ring-teal-500"
    rows={4} 
    required
  />
</div>

          <div>
            <label className="text-sm font-medium text-gray-300">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-700 bg-zinc-800 text-white shadow-md focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-700 bg-zinc-800 text-white shadow-md focus:ring-2 focus:ring-teal-500"
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300">Location</label>
            <input
              type="text"
              placeholder="Enter event location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-700 bg-zinc-800 text-white placeholder-gray-400 shadow-md focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
        </div>
        </div>

        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition duration-300"
        >
          Add Event
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default EventForm;