import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    
    <nav className="bg-[#1E2432] text-white py-4 shadow-2xl fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wider"
        >
          <Link to="/" className="text-[#4A90E2] hover:text-[#5FBAAF] transition-colors">
            Vasini Singh
          </Link>
        </motion.div>

        <div className="hidden md:flex space-x-8 items-center">
          {[
            { name: 'About', path: '/about' },
          ].map(({ name, path }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Link 
                to={path} 
                className="text-white hover:text-[#4A90E2] transition-colors tracking-wider uppercase text-sm font-medium"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;