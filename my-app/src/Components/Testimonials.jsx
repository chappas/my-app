import React from 'react';

function Testimonials() {
  return (
    <testimonials>
<section className="testimonials">
<h2 className="test-title">Testimonials</h2>
<article className="testimonial">
<h3>Rating: <span className="rating">4.5</span> stars</h3>
<p className="testimonial-name">John Doe</p>
<p className="testimonial-text">This is a great restaurant! I highly recommend it.</p>
</article>

<article className="testimonial">
<h3>Rating: <span className="rating">5</span> stars</h3>
<p className="testimonial-name">Jane Smith</p>
<p className="testimonial-text">This restaurant exceeded my expectations. Very satisfied!</p>
</article>

<article className="testimonial">
<h3>Rating: <span className="rating">4</span> stars</h3>
<p className="testimonial-name">Michael Chen</p>
<p className="testimonial-text">Overall a good restaurant, but could use some more flavour.</p>
</article>

<article className="testimonial">
<h3>Rating: <span className="rating">4.8</span> stars</h3>
<p className="testimonial-name">Alice Garcia</p>
<p className="testimonial-text">Very friendly restaurant. Highly recommend!</p>
</article>
</section>
</testimonials>
  );
}

export default Testimonials;


