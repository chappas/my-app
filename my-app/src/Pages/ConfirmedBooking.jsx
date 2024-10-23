import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();

  useEffect(() => {
    console.log("Component mounted. Location:", location);
    console.log("State received:", location.state);
  }, [location]);

  const { name, date, time, guests, occasion } = location.state || {};

  return (
    <section className="confirmed-booking">
      <h2>Thank you for your booking, {name || 'Guest'}!</h2>
      <p>Booking Details:</p>
      <ul>
        <li>Date: {date || 'Not provided'}</li>
        <li>Time: {time || 'Not provided'}</li>
        <li>Number of Guests: {guests || 'Not provided'}</li>
        <li>Occasion: {occasion || 'Not provided'}</li>
      </ul>
      <div className="button-container">
            <button className="return-home btn" onClick={() => window.location.href = '/'}>
              Return Home
            </button>
          </div>
      {(!location.state || typeof location.state !== 'object') && (
        <div>
          <p>No booking data was received. Please try booking again.</p>
          <p>Debug info:</p>
          <pre>{JSON.stringify(location, null, 2)}</pre>

        </div>
      )}
    </section>
  );
}

export default ConfirmedBooking;