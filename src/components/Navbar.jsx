import React, { useState, useEffect, useMemo, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Download } from 'lucide-react';

const NavItem = memo(({ link, colors, isActive, pathname, toggleMenu }) => (
  <NavLink 
    to={link.path}
    onClick={toggleMenu ? () => toggleMenu() : undefined}
    className={`relative px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 
    group ${isActive ? '' : 'hover:scale-105'}`}
    style={{
      color: isActive ? colors.primary : colors.textSecondary,
    }}
  >
    <span className="relative z-10">
      {link.title}
    </span>
    
    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
      pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
    }`}
      style={{ 
        backgroundColor: colors.primary + '15',
        boxShadow: `inset 0 0 0 1px ${colors.primary}30`
      }}
    ></div>
    
    {pathname === link.path && (
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{ 
          backgroundColor: colors.primary,
        }}
      ></div>
    )}
  </NavLink>
));

const MobileNavItem = memo(({ link, colors, isActive, pathname, toggleMenu }) => (
  <NavLink 
    to={link.path}
    onClick={toggleMenu}
    className={`block relative py-3 px-4 rounded-lg transition-all duration-300 active:scale-95 ${
      isActive ? '' : 'hover:bg-gray-50'
    }`}
    style={{
      color: isActive ? colors.primary : colors.textSecondary,
    }}
  >
    <div className="flex items-center justify-between">
      <span className="font-medium">{link.title}</span>
      {pathname === link.path && (
        <div className="w-2 h-2 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></div>
      )}
    </div>
    
    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
      pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
    }`}
      style={{ 
        backgroundColor: colors.primary + '15',
      }}
    ></div>
  </NavLink>
));

const Navbar = () => {
  const { colors } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = useMemo(() => [
    { title: 'Home', path: '/' },
    { title: 'About App', path: '/about-app' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Privacy', path: '/privacy' },
    { title: 'Terms', path: '/terms' },
    { title: 'Refund', path: '/refund' },
    { title: 'Disclaimer', path: '/disclaimer' }
  ], []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <nav 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-xl' : 'py-4'
        }`}
        style={{ 
          backgroundColor: colors.white,
          borderBottom: `1px solid ${colors.border}20`,
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center gap-3">
              <div 
                className="text-xl font-bold cursor-pointer"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.textPrimary} 0%, ${colors.primary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                CodersAdda
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <NavItem 
                  key={index}
                  link={link}
                  colors={colors}
                  isActive={location.pathname === link.path}
                  pathname={location.pathname}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <NavLink 
                to="/download"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold 
                         transition-all duration-300 hover:scale-105 active:scale-95 
                         group relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.white,
                }}
              >
                <Download size={18} className="relative z-10" />
                <span className="relative z-10">Download App</span>
              </NavLink>

              <button 
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center 
                         transition-all duration-300 hover:scale-110 active:scale-95"
                style={{ 
                  backgroundColor: colors.border + '20',
                  color: colors.textPrimary
                }}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={toggleMenu}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-full z-50 lg:hidden 
                   transition-transform duration-300 ease-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          backgroundColor: colors.white,
          boxShadow: '-4px 0 20px rgba(0,0,0,0.1)'
        }}
      >
        <div className="sticky w-full top-0 z-10 flex justify-between items-center p-5 border-b"
          style={{ 
            backgroundColor: colors.white,
            borderColor: colors.border + '20'
          }}>
          <div className="flex items-center gap-3">
            <div 
              className="text-xl font-bold"
              style={{ 
                background: `linear-gradient(135deg, ${colors.textPrimary} 0%, ${colors.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CodersAdda
            </div>
          </div>
          <button 
            onClick={toggleMenu}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: colors.border + '20',
              color: colors.textPrimary
            }}
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-5">
          <NavLink 
            to="/download"
            onClick={toggleMenu}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold mb-6
                     transition-all duration-300 active:scale-95"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              color: colors.white,
            }}
          >
            <Download size={18} />
            Download App
          </NavLink>

          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider mb-3 px-2 opacity-60"
               style={{ color: colors.textSecondary }}>
              Menu
            </p>
            {navLinks.map((link, index) => (
              <MobileNavItem 
                key={index}
                link={link}
                colors={colors}
                isActive={location.pathname === link.path}
                pathname={location.pathname}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>

          <div className="mt-8 pt-6 border-t text-center"
            style={{ borderColor: colors.border + '20' }}>
            <p className="text-sm opacity-70 mb-4" style={{ color: colors.textSecondary }}>
              Start your learning journey today
            </p>
          </div>
        </div>
      </div>

      <div className="h-16"></div>
    </>
  );
};

export default memo(Navbar);
