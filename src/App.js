import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BookingForm from "./Components/BookingForm"
import ConfirmedBooking from "./Components/ConfirmedBooking";

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;