import React from 'react';
import logo from "../assets/logo.svg"
import Nav from "./Nav"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
<Link to="/"><img src={logo} alt="little lemon logo" className="logo" /></Link>
<Nav />
    </header>
  );
};

export default Header;
