import React from 'react';
import outdoorRestaurant from '../assets/restaurant.jpg';
import marioAndAdrianA from '../assets/Mario and Adrian A.jpg';

function Description() {
  return (
    <div>
    <section className="about">
     <article className="about-text">
      <p className="about-title">Little Lemon</p>
      <p className="about-subtitle">Chicago</p>
      <p className="about-description">The Little Lemon is a family owned mediterranean restaurant that takes immense price in its food offerings and service</p>
     </article>
     <article className="about-images">
      <img src={outdoorRestaurant} className="outdoor-image img" />
      <img src={marioAndAdrianA} className="mario-adrian-a-image img" />
     </article>
    </section>
   </div>
  );
}

export default Description;
