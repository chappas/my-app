import React from 'react';
import greekSaladImage from '../assets/greeksalad.jpg';
import bruschetta from '../assets/bruchetta.svg';

function Menu() {
  return (
    <specials>
    <section className="specials">
    <section className="specials-heading-content">
      <p className="specials-heading">Specials</p>
      <button className="order-btn btn">Order now</button>
    </section>
      <article className="special">
        <img src={greekSaladImage} alt="special item 1"></img>
        <article className="special-name-price">
        <p className="special-title">Greek Salad</p>
        <p className="special-price">$12.90</p>
        </article>
        <p className="special-description">Description of the lovely Greek Salad goes here</p>
        <p className="special-delivery">Order a delivery for $4</p>
      </article>
      <article className="special">
        <img src={bruschetta} alt="special item 2"></img>
        <article className="special-name-price">
        <p className="special-title">Bruschetta</p>
        <p className="special-price">$12.90</p>
        </article>
        <p className="special-description">Description of the lovely Bruschetta goes here</p>
        <p className="special-delivery">Order a delivery for $4</p>
      </article>
      <article className="special">
        <img src={greekSaladImage} alt="special item 3"></img>
        <article className="special-name-price">
        <p className="special-title">Lemon Dessert</p>
        <p className="special-price">$12.90</p>
        </article>
        <p className="special-description">Description of the Lemon Dessert goes here</p>
        <p className="special-delivery">Order a delivery for $4</p>
      </article>
    </section>
  </specials>
  );
}

export default Menu;