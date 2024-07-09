import React from 'react';
import outdoorRestaurant from '../assets/restaurant.jpg';
import marioAndAdrianA from '../assets/Mario and Adrian A.jpg';

function Description() {
  return (
    <about>
    <section className="about">
     <article className="about-text">
      <p className="about-title">Little Lemon</p>
      <p className="about-subtitle">Chicago</p>
      <p className="about-description">The Little Lemon is a family owned mediterranean restaurant that takes immense price in its food offerings and service</p>
     </article>
     <article className="about-images">
      <img src={outdoorRestaurant} alt="outdoor-image" className="outdoor-image img" />
      <img src={marioAndAdrianA} alt="mario-and-adrian-a-image" className="mario-adrian-a-image img" />
     </article>
    </section>
   </about>
  );
}

export default Description;
