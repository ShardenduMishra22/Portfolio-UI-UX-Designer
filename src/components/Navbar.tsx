import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold"
        >
          <Link to="/">Vasini Singh</Link>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Link to="/about" className="text-white hover:text-blue-300 transition-colors">
              About
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Link to="/work" className="text-white hover:text-blue-300 transition-colors">
              Work
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Link to="/resume" className="text-white hover:text-blue-300 transition-colors">
              Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;