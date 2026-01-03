import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { routes } from './routes';
import ScrollToTop from './ScrollToTop';


const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
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
      <style>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-slide {
          animation: fadeSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Stagger animations */
        section:nth-child(odd) .animate-fade-slide {
          animation-delay: 0.1s;
        }
        
        section:nth-child(even) .animate-fade-slide {
          animation-delay: 0.2s;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #FEF4EB;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #1F2937 0%, #FF4D59 100%);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default App;
