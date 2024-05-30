import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Jobs from './components/Jobs';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';
import ToDo from './components/ToDo';
import ToDoDetail from './components/ToDoDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/skill">Skill</Link>
          <Link to="/todos">ToDo</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/todos" element={<ToDo />} />
            <Route path="/todos/:number" element={<ToDoDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;