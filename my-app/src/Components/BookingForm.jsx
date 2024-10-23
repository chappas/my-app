import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { submitAPI } from '../api.js';


const CheersIcon = () => (
    <svg fill="#fff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 512.001 512.001" xmlSpace="preserve">
    <g>
        <g>
            <path d="M255.999,0c-9.336,0-16.9,7.565-16.9,16.9v33.8c0,9.336,7.565,16.9,16.9,16.9s16.9-7.565,16.9-16.9V16.9
                C272.899,7.565,265.335,0,255.999,0z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M200.345,50.018l-33.8-33.8c-6.601-6.601-17.297-6.601-23.898,0c-6.601,6.596-6.601,17.301,0,23.898l33.801,33.8
                c3.301,3.301,7.625,4.952,11.948,4.952s8.648-1.651,11.948-4.952C206.947,67.32,206.947,56.615,200.345,50.018z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M369.348,16.217c-6.601-6.601-17.297-6.601-23.898,0l-33.8,33.8c-6.601,6.596-6.601,17.301,0,23.898
                c3.301,3.301,7.625,4.952,11.95,4.952c4.324,0,8.648-1.651,11.948-4.952l33.8-33.8C375.95,33.52,375.95,22.814,369.348,16.217z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M493.602,458.297c-2.256-9.061-11.443-14.578-20.482-12.312l-49.2,12.267l-24.812-99.524
                c57.552-23.203,85.164-86.744,64.273-146.68c-4.489-12.875-1.209-5.694-61.206-118.365c-3.647-6.843-11.525-10.288-19.007-8.456
                l-127.177,31.707L128.83,85.228c-7.536-1.903-15.36,1.612-19.007,8.456c-8.529,16.016-48.536,91.147-53.897,101.214h0.006
                c-3.399,6.383-6.013,13.063-8.203,19.851c-19.297,59.777,8.924,121.276,65.163,143.975l-24.813,99.529l-49.195-12.267
                c-9.055-2.277-18.226,3.252-20.487,12.312c-2.256,9.055,3.257,18.226,12.312,20.487l131.186,32.711
                c9.089,2.263,18.232-3.284,20.488-12.312c2.256-9.055-3.257-18.226-12.312-20.487l-49.193-12.266l24.813-99.527
                c45.849,4.841,87.899-17.723,110.312-55.978c22.401,38.274,64.497,60.808,110.31,55.977l24.814,99.529l-49.193,12.266
                c-9.055,2.261-14.568,11.431-12.312,20.488c2.26,9.046,11.412,14.571,20.487,12.312l131.196-32.711
                C490.357,476.522,495.869,467.352,493.602,458.297z M95.616,192.282l37.839-71.065l105.643,26.341v82.057l0.012,0.003
                L95.616,192.282z M272.914,226.68l0.052-79.138l105.577-26.324l36.472,68.49L272.914,226.68z"/>
        </g>
    </g>
    </svg>
    )
    function CustomSelect({icon, options, onchange}) {
      const [currentOption, setCO] = useState(options[0]);
      const [vis, setIsVis] = useState(false);
      const handleOptChange = (opt) => {
        setIsVis(false);
        setCO(opt);
        onchange(opt);
      }
      return (
        <div className={`cs ${vis ? "vis" : "not-vis"}`}>
          <div className="bd" onClick={()=>setIsVis(false)}></div>
          <button type="button" onClick={()=>setIsVis(!vis)}>
            {icon}
            {currentOption}
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </span>
          </button>
          <div className="ops">
            {
              options.map((a, b) => <button type="button" key={"op-"+b} onClick={()=>handleOptChange(a)}>{a}</button>)
            }
          </div>
        </div>
      )
    }


function BookingForm({availableTimes, onDateChange, submitForm}) {
const [name, setName] = useState('');
const [nameError, setNameError] = useState('');
const [date, setDate] = useState('');
const [dateError, setDateError] = useState('');
const [time, setTime] = useState('17:00');
const [guests, setGuests] = useState(1);
const [guestsError, setGuestsError] = useState('');
const [occasion, setOccasion] = useState('Birthday');
const navigate = useNavigate();


const handleSubmit = (event) => {
event.preventDefault();
if (!(name.length > 2 && name.length < 50)){
setNameError('Your name must be more than 2 characters')

} if(!date){
setDateError('Please select a date')

} if(guests <= 1) {
setGuestsError('Must have more than 1 guests to place a booking')

}
if((!(name.length > 2 && name.length < 50)) || (!date) ||(guests <= 1) ) {
return
}

submitForm({name, date, time, guests, occasion})
console.log('Reservation details:', {name}, {date}, {time}, {guests}, {occasion}, {availableTimes});

console.log("Data being passed:", { name, date, time, guests, occasion });
// navigating to the confirmation page with state
navigate('/confirmed', {
state: {
name: name ,
date: date,
time: time,
guests: guests,
occasion: occasion
}
});
}


return (
<form className="res-form" role="form" onSubmit={handleSubmit} noValidate>
<label htmlFor="res-name">Name</label>
<input type="name" id="name" data-testid="name" required value={name} onChange={(e) => (setName(e.target.value), setNameError(""))} />
<span className="error">{nameError}</span>
<label htmlFor="res-date">Choose date</label>
<input type="date" id="res-date" data-testid="res-date" min={new Date().toISOString().slice(0, 10)} required value={date} onChange={(e) => {setDate(e.target.value); setDateError(""); onDateChange(e.target.value)}} />
<span className="error">{dateError}</span>
<label htmlFor="res-time">Choose time</label>
<select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
{availableTimes.map((time) => (
<option key={time}>{time}</option>
))}
</select>

<label htmlFor="guests">Number of guests</label>
<input type="number" placeholder="1" min="2" max="10" data-testid="guests" required id="guests" value={guests} onChange={(e) => (setGuests(e.target.value), setGuestsError(""))} />
<span className="error">{guestsError}</span>
<label htmlFor="occasion">Occasion</label>
{/* <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
<option>Birthday</option>
<option>Anniversary</option>
</select> */}
<CustomSelect options={["Birthday", "Anniversary"]} onchange={(occasion)=>setOccasion(occasion)} icon={<CheersIcon />} />
<input aria-label="Submit Form" type="submit" value="Make Your reservation" />
</form>
);
}

export default BookingForm;