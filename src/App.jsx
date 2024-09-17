import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import DarkModeToggle from './components/DarkModeToggle'; 
// import IMAGES from './components/images';

const navLinkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    }
  }
};

const aboutVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="bg-gray-400 py-6 dark:bg-gray-600">
          <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className='font-serif font-bold text-3xl md:text-5xl text-white'>Tristan Smith</h1>
            </div>
            <nav className='flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0'>
              <NavLink to="/" end className="font-sans text-lg text-white hover:text-gray-300 transition duration-300" activeClassName="text-gray-300">
                <motion.div variants={navLinkVariants} whileHover="hover">About Me</motion.div>
              </NavLink>
              <NavLink to="/portfolio" className="font-sans text-lg text-white hover:text-gray-300 transition duration-300" activeClassName="text-gray-300">
                <motion.div variants={navLinkVariants} whileHover="hover">Portfolio</motion.div>
              </NavLink>
              <NavLink to="/contact" className="font-sans text-lg text-white hover:text-gray-300 transition duration-300" activeClassName="text-gray-300">
                <motion.div variants={navLinkVariants} whileHover="hover">Contact</motion.div>
              </NavLink>
              <NavLink to="/resume" className="font-sans text-lg text-white hover:text-gray-300 transition duration-300" activeClassName="text-gray-300">
                <motion.div variants={navLinkVariants} whileHover="hover">Resume</motion.div>
              </NavLink>
            </nav>
            <DarkModeToggle />
          </div>
        </header>
        
        <main className='container mx-auto py-12 flex-grow'>
          <Routes>
            <Route path="/" element={
              <motion.div initial="hidden" animate="visible" variants={aboutVariants}>
                <About />
              </motion.div>
            } />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        
        {/* Footer Section */}
        <footer className="bg-gray-400 py-6 dark:bg-gray-600">
          <div className="container mx-auto text-center">
            <p className="font-sans text-gray-300 mb-4">Connect with me:</p>
            <div className="space-x-4">
              <a href="https://github.com/TristanSmith63" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-github"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/tristan-smith-26b09a302/" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-linkedin"></i> LinkedIn</a>
              <a href="https://twitter.com/yourprofile" className="text-gray-300 hover:text-white transition duration-300"><i className="fab fa-twitter"></i> Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
