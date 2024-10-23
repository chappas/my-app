import BookingForm from '../Components/BookingForm';
import { fetchAPI, submitAPI } from '../api.js';
import { useNavigate } from "react-router-dom";
import { useState, useReducer, useEffect } from 'react';

const date = new Date()

function BookingPage() {
// step 2 - create updateTimes function which will handle the state change, this will change availableTimes based on the date change. For now it can return the same available times regardless of the date.
function updateTimes(state, action){
       console.log(action)
        let newState

    switch (action.type) {
      case 'UPDATE_TIMES':
      const times = fetchAPI(new Date(action.payload));
      newState = times
      break;

      default:
        throw new Error()
    }
    return newState
    }
// step 3 - create a function called initializeTimes which will create the intial state for the availableTimes.
    function initializeTimes(){
        return fetchAPI(date)
    }

// step 4 - change availableTimes to a reducer providing the two previous functions as parameters.
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(date));

    const [ dateChange, setDateChange ] = useState(date);

    const navigate = useNavigate();

    function submitForm(formData){
        const formSubmission = submitAPI(formData)
    if (formSubmission === true) {
        navigate("/confirmed")
    }
    }

    useEffect(() => {
        const newDates = fetchAPI(new Date(dateChange))
        console.log(newDates)
    }, [dateChange])



  return (
    <div className="booking-heading">
      <h1>Your Booking</h1>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} onDateChange={(newDate) => {dispatch({type: 'UPDATE_TIMES', payload: newDate }); setDateChange(newDate)}}/>
    </div>
  );
}

export default BookingPage;