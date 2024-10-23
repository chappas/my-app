import React from 'react';
import restaurantFoodImage from '../assets/restauranfood.jpg';

function Hero() {
  return (
    <main>
        <div>
          <div className="hero">
            <div className="hero-content">
              <div className="hero-description">
                <p className="title">Little Lemon</p>
                <p className="subtitle">Chicago</p>
                <p className="description"> The little Lemon is a family owned miditerranean restaurant that takes immense pride in its food offerings and service.</p>
                <button className="reserve-a-table btn">Reserve a Table</button>
              </div>
              <div className="img-wrapper">
              <img src={restaurantFoodImage} alt="hero image" className="hero-img" />
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}

export default Hero;