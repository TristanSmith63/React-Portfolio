import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <header className="bg-gradient-to-r from-gray-800 to-black py-6">
          <div className="container mx-auto text-center flex items-center justify-between">
            <div className="flex items-center">
              {/* <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10 mr-4"/> */}
              <h1 className='font-serif font-bold text-5xl'>Tristan Smith</h1>
            </div>
            <nav className='space-x-4'>
              <NavLink to="/" end className="font-sans text-lg hover:text-gray-400 transition duration-300" activeClassName="text-blue-400">About Me</NavLink>
              <NavLink to="/portfolio" className="font-sans text-lg hover:text-gray-400 transition duration-300" activeClassName="text-blue-400">Portfolio</NavLink>
              <NavLink to="/contact" className="font-sans text-lg hover:text-gray-400 transition duration-300" activeClassName="text-blue-400">Contact</NavLink>
              <NavLink to="/resume" className="font-sans text-lg hover:text-gray-400 transition duration-300" activeClassName="text-blue-400">Resume</NavLink>
            </nav>
          </div>
        </header>
        <main className='container mx-auto py-12 flex-grow'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 py-6">
          <div className="container mx-auto text-center">
            <p className="font-sans text-gray-400 mb-4">Connect with me:</p>
            <div className="space-x-4">
              <a href="https://github.com/TristanSmith63" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-github"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/tristan-smith-26b09a302/" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
