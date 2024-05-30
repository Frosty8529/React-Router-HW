import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/jobs">Jobs</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/skill">Skill</Link></li>
    </ul>
  </nav>
);

export default Navigation;