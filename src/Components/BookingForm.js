import React, { useEffect, useReducer, useState } from 'react';
import NavBar from "../Fragments/NavBar";
import Footer from '../Fragments/Footer';
import Main from "./Main";
import { fetchAPI, submitAPI } from "./bookingsAPI";
import { useNavigate } from 'react-router-dom';

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(date) {
  return fetchAPI(date);
}

function timesReducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE':
      return initializeTimes();
    case 'UPDATE':
      const newTimes = updateTimes(action.payload);
      return newTimes;
    case 'ADD':
      return [...state, action.payload];
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export default function BookingForm() {
  const [numGuests, setNumGuests] = useState(0);
  const [chosenDate, setChosenDate] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());
  const [isFormCompleted, setIsFormCompleted] = useState(false)
  const navigate = useNavigate();

  const handleNumGuestsChange = (event) => {
    const value = event.target.value;
    setNumGuests(value);
    event.target.setCustomValidity(value >= 1 && value <= 10 ? '' : 'Please enter a value between 1 and 10');
  };

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setChosenDate(date);
    dispatch({ type: 'UPDATE', payload: date });
    alert (`Selected date!!`)
  }

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  }

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    dispatch({ type: 'ADD', payload: selectedTime });
    alert(`Selected time is ${selectedTime} `);
  }
  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed');
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      numGuests,
      chosenDate,
      selectedTime: availableTimes[availableTimes.length - 1],
      selectedOccasion,
    };
    submitForm(formData);
  }

  useEffect(() => {
    setIsFormCompleted(numGuests >= 1 && chosenDate && availableTimes.length > 0 && selectedOccasion !== '');
  }, [numGuests, chosenDate, availableTimes, selectedOccasion]);


  return (
    <div>
      <NavBar />
      <div className="reservetable">
        <h1>Reserve your Table</h1>
      </div>
      <div className="restaurant">
        <img src={require('../assets/ReservePage/restaurant.jpg')} alt="restaurantable" className="restaurantable" />
      </div>
      <form className="formulary" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='input-fonts' htmlFor="res-date" required pattern="\d{4}-\d{2}-\d{2}">Choose date</label>
          <input className="action-confirmed2" type="date" id="res-date" value={chosenDate ? chosenDate.toISOString().substr(0, 10) : ''} onChange={handleDateChange} />
        </div>
        <div className="form-group">
          <label className='input-fonts' htmlFor="guests">Number of guests</label>
          <input
            className="action-confirmed2"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numGuests}
            onChange={handleNumGuestsChange}
            required
            aria-describedby="guests-validation-message"
          />
          {numGuests < 1 || numGuests > 10 ? (<span id="guests-validation-message" style={{ color: 'red' }}>Please enter a value between 1 and 10</span>) : null}
        </div>
        <div className="form-group">
          <label className='input-fonts' htmlFor="occasion" required>Occasion</label>
          <select className="action-confirmed2" id="occasion" value={selectedOccasion} onChange={handleOccasionChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        {isFormCompleted && (
          <Main availableTimes={availableTimes} handleTimeChange={handleTimeChange} />
        )}
        
        <div className="form-group">
          <button className="action-confirmed3" type="submit" disabled={!isFormCompleted}>
            Make your reservation
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}