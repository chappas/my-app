import React from 'react';
import logo from "../assets/logo.svg"
import Nav from "./Nav"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [menuActive, setMenuActive] = useState(false)
  useEffect(() => {
    if (menuActive) {
      document.body.classList.add("menuactive")
    }
    else {
      document.body.classList.remove("menuactive")
    }
  }, [menuActive])

  return (
    <header className={"header"+(menuActive?" active":"")} role="banner" >
<Link to="/"><img src={logo} alt="little lemon logo" className="logo" /></Link>
<div className="menu-toggle"><button onClick={() => setMenuActive(!menuActive) }>{menuActive ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>}</button></div>
<Nav onCloseMenu={() => setMenuActive(false)} />
    </header>
  );
};

export default Header;
