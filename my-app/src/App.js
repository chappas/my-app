import { Routes, Route } from 'react-router-dom';

import React from 'react';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ConfirmedBooking from './Pages/ConfirmedBooking';
import './App.css';


function App() {
  return (
    <>
<Header />
<Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
</Routes>
<Footer />
    </>
  );
}

export default App;