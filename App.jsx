import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/indexpage';
import About from './src/pages/aboutpage';
import ContactUs from './src/pages/contactuspage';
import InDoor from './src/pages/indoorproductspage';
import OutDoor from './src/pages/outdoorproductspage';
import Products_Details from './src/pages/productsdetailspage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/indoor" element={<InDoor />} />
      <Route path="/outdoor" element={<OutDoor />} />
      {/* Pass product id */}
      <Route path="/productsdetails/:page/:id" element={<Products_Details />} />
    </Routes>
  );
}

export default App;
