import React from 'react';
import greekSaladImage from '../assets/greeksalad.jpg';
import bruschetta from '../assets/bruchetta.svg';

function Menu() {
  return (
    <specials>
    <section class="specials">
    <section class="specials-heading-content">
      <p class="specials-heading">Specials</p>
      <button class="order-btn btn">Order now</button>
    </section>
      <article class="special">
        <img src={greekSaladImage} alt="special item 1"></img>
        <article class="special-name-price">
        <p class="special-title">Greek Salad</p>
        <p class="special-price">$12.90</p>
        </article>
        <p class="special-description">Description of the lovely Greek Salad goes here</p>
        <p class="special-delivery">Order a delivery for $4</p>
      </article>
      <article class="special">
        <img src={bruschetta} alt="special item 2"></img>
        <article class="special-name-price">
        <p class="special-title">Bruschetta</p>
        <p class="special-price">$12.90</p>
        </article>
        <p class="special-description">Description of the lovely Bruschetta goes here</p>
        <p class="special-delivery">Order a delivery for $4</p>
      </article>
      <article class="special">
        <img src={greekSaladImage} alt="special item 3"></img>
        <article class="special-name-price">
        <p class="special-title">Lemon Dessert</p>
        <p class="special-price">$12.90</p>
        </article>
        <p class="special-description">Description of the Lemon Dessert goes here</p>
        <p class="special-delivery">Order a delivery for $4</p>
      </article>
    </section>
  </specials>
  );
}

export default Menu;