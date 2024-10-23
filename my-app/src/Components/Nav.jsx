import React from 'react';
import { Link } from 'react-router-dom';

function Nav({onCloseMenu}) {
  return (
    <nav>
          <Link onClick={onCloseMenu} to="/" className="navigation-item">Home</Link>
          <a onClick={onCloseMenu} href="#" className="navigation-item">About</a>
          <a onClick={onCloseMenu} href="#" className="navigation-item">Menu</a>
          <Link onClick={onCloseMenu} to="/booking" className="navigation-item">Reservations</Link>
          <a onClick={onCloseMenu} href="#" className="navigation-item">Order Online</a>
          <a onClick={onCloseMenu} href="#" className="navigation-item">Login</a>
    </nav>
  );
}

export default Nav;