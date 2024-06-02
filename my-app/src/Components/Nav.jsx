import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
          <Link to="/" className="navigation-item">Home</Link>
          <a href="#" className="navigation-item">About</a>
          <a href="#" className="navigation-item">Menu</a>
          <Link to="/booking" className="navigation-item">Reservations</Link>
          <a href="#" className="navigation-item">Order Online</a>
          <a href="#" className="navigation-item">Login</a>
    </nav>
  );
}

export default Nav;