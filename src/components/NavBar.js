import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Navbar = () => (
  <nav>
    <div id="site-header">
      <img src={logo} alt="Logo" />

      <h2>Space Travelers&#39; Hub</h2>
    </div>
    <ul>
      <Link to="/">
        <li>Rockets</li>
      </Link>
      <Link to="/missions">
        <li>Missions</li>
      </Link>
      <Link to="/my-profile">
        <li>My Profile</li>
      </Link>
    </ul>
  </nav>
);
export default Navbar;
