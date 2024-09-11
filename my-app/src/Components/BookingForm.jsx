import React, { useState } from 'react';
import { submitAPI } from '../api.js';


function BookingForm({availableTimes, onDateChange, submitForm}) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');



  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({name, date, time, guests, occasion})

    console.log('Reservation details:', {name}, {date}, {time}, {guests}, {occasion}, {availableTimes});
}

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit} >
      <label htmlFor="res-name">Name</label>
      <input type="name" id="name" minLength="2" maxLength="50" required value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" min={new Date().toISOString().slice(0, 10)} required value={date} onChange={(e) => {setDate(e.target.value); onDateChange(e.target.value)}} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="2" max="10" required id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;