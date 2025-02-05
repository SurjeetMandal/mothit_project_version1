import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Course from './Pages/Course';
import Portfolio from './Pages/Portfolio';
import Calls from './Pages/Calls';
import Contact2 from "./Pages/Contact2"
import './index.css';
import { ToastContainer } from 'react-toastify';
import SessionContact from './Pages/SessionContact';
import PremiumTelegram from './Pages/PremiumTelegram';
import ContactPortfolio from './Pages/ContactPortfolio';
import CoureseBooking from "./Pages/CoureseBooking"

const App = () => {
  const location = useLocation();

  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]); 

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact2" element={<Contact2 />} />
        <Route path="/service" element={<Service />} />
        <Route path="/course" element={<Course />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/calls" element={<Calls />} />
        <Route path='/sessionContact' element={<SessionContact />} />
        <Route path='/premiumTelegram' element={<PremiumTelegram />} />
        <Route path='/contactPortfolio' element={<ContactPortfolio />} />
        <Route path="/courseBooking" element={<CoureseBooking />} />
      </Routes>
    </>
  );
};

export default App;
