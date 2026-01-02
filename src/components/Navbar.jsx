import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const { colors } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About App', path: '/about-app' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Privacy', path: '/privacy' },
    { title: 'Terms', path: '/terms' },
    { title: 'Refund', path: '/refund' },
    { title: 'Disclaimer', path: '/disclaimer' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav 
        className="flex justify-between items-center px-4 sm:px-6 lg:px-[5%] py-3 fixed w-full top-0 left-0 z-[1000] shadow-sm transition-all"
        style={{ backgroundColor: colors.white }}
      >
        {/* Logo */}
        <div 
          className="text-2xl font-bold flex items-center cursor-pointer"
          style={{ color: colors.primary }}
        >
          CodersAdda.
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <NavLink 
              key={index}
              to={link.path}
              className="no-underline font-medium text-[0.95rem] transition-colors relative group"
              style={({ isActive }) => ({
                color: isActive ? colors.primary : colors.textSecondary
              })}
            >
              {link.title}
              {/* Hover underline effect */}
              <span 
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: colors.primary }}
              />
            </NavLink>
          ))}
        </div>

        {/* Desktop Button & Mobile Download Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Download Button - Always Visible */}
          <button 
            className="lg:hidden px-4 py-2 rounded-lg border-[1.5px] bg-transparent font-semibold cursor-pointer transition-all flex items-center gap-2 hover:shadow-md"
            style={{ 
              borderColor: colors.primary, 
              color: colors.primary 
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.outlineHover;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <Download size={18} />
            <span className="hidden xs:inline">Download</span>
          </button>

          {/* Desktop Download Button */}
          <button 
            className="hidden lg:flex px-6 py-2.5 rounded-lg border-[1.5px] bg-transparent font-semibold cursor-pointer transition-all items-center gap-2 hover:shadow-md"
            style={{ 
              borderColor: colors.primary, 
              color: colors.primary 
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.outlineHover;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <Download size={18} />
            Download App
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md transition-all"
            onClick={toggleMenu}
            style={{ 
              color: colors.textSecondary,
              backgroundColor: isMenuOpen ? colors.outlineHover : 'transparent'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[999] transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-full z-[1000] transition-transform duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ 
          backgroundColor: colors.white,
          boxShadow: '-2px 0 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b"
          style={{ borderColor: colors.border }}>
          <div 
            className="text-2xl font-bold"
            style={{ color: colors.primary }}
          >
            CodersAdda.
          </div>
          <button 
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-md transition-all hover:bg-gray-100"
          >
            <X size={24} style={{ color: colors.textSecondary }} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="p-6">
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <NavLink 
                key={index}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block no-underline font-medium py-3 px-4 rounded-lg transition-all"
                style={({ isActive }) => ({
                  color: isActive ? colors.primary : colors.textSecondary,
                  backgroundColor: isActive ? colors.outlineHover : 'transparent'
                })}
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          {/* Additional Info for Mobile */}
          {/* <div className="mt-8 pt-6 border-t" style={{ borderColor: colors.border }}>
            <p className="text-sm text-center" style={{ color: colors.textSecondary }}>
              Start your learning journey today
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;