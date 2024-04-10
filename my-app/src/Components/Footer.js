import React from 'react';

function Footer() {
  return (
    <footer>
        <h3>Doormat Navigation</h3>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order-online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li>
            <a href="/address">Address</a>
        </li>
        <li>
            <a href="/phone-number">Phone Number</a>
        </li>
        <li>
            <a href="/email">Email</a>
        </li>
        <h3>Social Media Links</h3>
        <ul>
        <li>
            <a href="/facebook">Facebook</a>
        </li>
        <li>
            <a href="/instagram">Instagram</a>
        </li>
        <li>
            <a href="twitter">Twitter</a>
        </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;