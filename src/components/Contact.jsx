import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-zinc-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <div className="flex flex-col items-center space-y-8">
        
          <div className="space-y-6 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
                Phone Number
              </h3>
              <p className="text-base text-white">+91 9322781813</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
                Email Address
              </h3>
              <p className="text-base text-white">info@communionapp.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
                Address
              </h3>
              <p className="text-base text-white">
                123 Faith Avenue, <br />
                Pune, Maharashtra, 414110
              </p>
            </div>
          </div>

         
          <div className="w-full max-w-2xl rounded-lg overflow-hidden">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531615!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a5a9f4c5c1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633033228934!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;