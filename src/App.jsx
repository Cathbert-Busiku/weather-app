import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom"; 
import Navbar from "./Components/Navbar"; 
import WeatherNavbar from "./Components/WeatherNavbar"; 
import NewsBoard from "./Components/NewsBoard"; 
import Footer from "./Components/Footer"; 
import './App.css'; 
import WeatherApp from './WeatherApp'; 

const App = () => {
  const [category, setCategory] = useState('general'); 
  const [country, setCountry] = useState('us'); 
  const [input, setInput] = useState(''); 

  const location = useLocation(); 

  return (
    <div>
      {location.pathname.startsWith('/weather') ? (
        // Render WeatherNavbar if the current path starts with '/weather'
        <WeatherNavbar setCategory={setCategory} setCountry={setCountry} />
      ) : (
        // Render Navbar for other paths
        <Navbar setCategory={setCategory} setCountry={setCountry} setInput={setInput} />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/general/us" replace />} /> {/* Redirect from root to /general/us */}
        <Route path="/:category/:country" element={<NewsBoard />} /> {/* Dynamic route for category and country */}
        <Route path="/weather" element={<WeatherApp input={input} />} /> {/* Route for WeatherApp component */}
      </Routes>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App /> {/* Wrap App component in Router */}
  </Router>
);

export default AppWrapper;