import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ContextProvider>
          <App isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </ContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

root.render(<Index />, document.getElementById('root'));

