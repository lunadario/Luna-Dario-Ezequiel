// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Routes/Home';
// import Contact from './Routes/Contact';
// import Favs from './Routes/Favs';
// import Detail from './Routes/Detail';
// import Footer from './Components/Footer';

// const App = ({ isDarkMode, toggleDarkMode }) => {
//   return (
//     <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
//       <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/favs" element={<Favs />} />
//         <Route path="/detail/:id" element={<Detail />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;



import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Footer from './Components/Footer';

const App = ({ isDarkMode, toggleDarkMode }) => {
  // Cambiar el tema globalmente en el body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]); // Este efecto se ejecutará cada vez que isDarkMode cambie

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
