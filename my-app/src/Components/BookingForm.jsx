import React, { useState } from 'react';

function BookingForm({availableTimes, dispatch, submitForm}) {
console.log(dispatch)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    });

    function changeHandler(e) {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleDateChange = async (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }))
       dispatch({ type: 'UPDATE_TIMES', payload: value })
      }

    function submitHandler(e) {
        e.preventDefault();
        submitForm(formData);
    }

    const currentDate = new Date().toISOString().split("T")[0]
    const options = availableTimes.map(time => <option key={time}>{time}</option>)

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={submitHandler}>
   <label htmlFor="first-name">First Name</label>
   <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={changeHandler} />
   <label htmlFor="last-name">Last Name</label>
   <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={changeHandler} />
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate} />
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " value={formData.time} onChange={changeHandler} required >
      {options}
      </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={changeHandler} />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" name="occasion" value={formData.occasion} onChange={changeHandler}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" />
</form>
    );
}

export default BookingForm;