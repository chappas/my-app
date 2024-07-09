
import React from 'react';
import restaurantFood from '../assets/restauranfood.jpg';

function Footer() {
  return (
    <footer>
        <section className='footer-content'>
            <section className="footer-image-container">
        <img src={restaurantFood} alt="footer image" className="footer-img" />
        </section>
        <section className="footer-nav">
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
      </section>
      <section className="footer-contact">
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
        </ul>
        </section>
        <section className="footer-social">
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
        </section>
        </section>
    </footer>
  );
}

export default Footer;
