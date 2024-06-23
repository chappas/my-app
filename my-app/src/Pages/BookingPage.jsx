import React, { useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../api';
import BookingForm from '../Components/BookingForm';
import { useNavigate } from 'react-router';

function BookingPage() {

    const [date, setDate] = useState(new Date())

    function initializeTimes(date) {
        return fetchAPI(date);
    }

    function updateTimes(date) {
        const dateSet = new Date(date)
        return fetchAPI(dateSet);
    }

    const navigate = useNavigate();

    function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

    function availableTimesReducer(state, action) {
        let newState
        switch (action.type) {
            case 'UPDATE_TIMES':
                const newDate = new Date(action.payload);
                newState = updateTimes(newDate)
                break;
                default:
                    throw new Error();
        }
        return newState;
    }

    const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes(date))

  return (
<div>
    <h1>Little Lemon Reserve a Table</h1>
<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
</div>
  );
};

export default BookingPage;