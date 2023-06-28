import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Footer from './Components/Footer';

const App = () => {

  
  return (
  
    <div className= "App">
      <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
    </div>
        
   
  );
}

export default App;
