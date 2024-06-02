import React from 'react';
import outdoorRestaurant from '../assets/restaurant.jpg';
import marioAndAdrianA from '../assets/Mario and Adrian A.jpg';

function Description() {
  return (
    <about>
    <section class="about">
     <article class="about-text">
      <p class="about-title">Little Lemon</p>
      <p class="about-subtitle">Chicago</p>
      <p class="about-description">The Little Lemon is a family owned mediterranean restaurant that takes immense price in its food offerings and service</p>
     </article>
     <article class="about-images">
      <img src={outdoorRestaurant} alt="outdoor-image" class="outdoor-image img" />
      <img src={marioAndAdrianA} alt="mario-and-adrian-a-image" class="mario-adrian-a-image img" />
     </article>
    </section>
   </about>
  );
}

export default Description;
