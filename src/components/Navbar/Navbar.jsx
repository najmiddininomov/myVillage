import React, { useState } from 'react';
import './Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Dehqonobod</div>

      <div className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <Link  to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/nature">Nature</Link>
        <Link to = "/gallery">Gallery</Link>
        <Link to="/contact" >Contact</Link>
      </div>

      <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
