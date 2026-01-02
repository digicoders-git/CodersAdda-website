import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { routes } from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={route.element} 
            />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
