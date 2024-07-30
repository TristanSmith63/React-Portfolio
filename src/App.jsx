import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Tristan Smith</h1>
          <nav>
            <NavLink to="/" end>About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <footer>
          <p>Connect with me:</p>
          <a href="https://github.com/TristanSmith63">GitHub</a>
          <a href="https://www.linkedin.com/in/tristan-smith-26b09a302/">LinkedIn</a>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
