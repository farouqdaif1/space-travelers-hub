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
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/missions">Missions</Link>
      </li>
      <li>
        <Link to="/my-profile">My Profile</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
