import React from 'react';
import Hero from "../Components/Hero"
import Menu from "../Components/Menu"
import Testimonials from "../Components/Testimonials"
import Description from "../Components/Description"

function HomePage() {
  return (
    <main>
    <Hero />
    <Menu />
    <Testimonials />
    <Description />
   </main>
  );
}

export default HomePage;