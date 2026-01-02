import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const { colors } = useTheme();

  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About App', path: '/about-app' },
    { title: 'About Us', path: '/about-us' },
  ];
  
  const legalLinks = [
    { title: 'Privacy', path: '/privacy' },
    { title: 'Terms', path: '/terms' },
    { title: 'Refund', path: '/refund' },
    { title: 'Disclaimer', path: '/disclaimer' }
  ];

  return (
    <footer style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Column - First column */}
            <div className="lg:col-span-1">
              <div className="space-y-6 max-w-xs">
                <h2 className="text-3xl font-bold tracking-tight" style={{ color: colors.textPrimary }}>
                  CodersAdda.
                </h2>
                <p className="text-base leading-relaxed opacity-80" 
                   style={{ color: colors.textSecondary }}>
                  Connect with your members with the community, resources.
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center gap-3 pt-2">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Mail, label: 'Email' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 
                               hover:scale-110 hover:-translate-y-0.5"
                      style={{ 
                        backgroundColor: colors.textPrimary,
                        color: colors.white
                      }}
                      aria-label={social.label}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links - Second column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg tracking-wide" style={{ color: colors.textPrimary }}>
                  Quick Links
                </h4>
                <ul className="space-y-2.5">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.path}
                        className="text-base transition-all duration-300 hover:translate-x-1.5 inline-block py-1"
                        style={{ 
                          color: colors.textSecondary,
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.target.style.color = colors.primary}
                        onMouseOut={(e) => e.target.style.color = colors.textSecondary}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal Links - Third column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg tracking-wide" style={{ color: colors.textPrimary }}>
                  Legal
                </h4>
                <ul className="space-y-2.5">
                  {legalLinks.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.path}
                        className="text-base transition-all duration-300 hover:translate-x-1.5 inline-block py-1"
                        style={{ 
                          color: colors.textSecondary,
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.target.style.color = colors.primary}
                        onMouseOut={(e) => e.target.style.color = colors.textSecondary}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us - Fourth column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg tracking-wide" style={{ color: colors.textPrimary }}>
                  Contact US
                </h4>
                <div className="space-y-4">
                  <button 
                    className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 
                             hover:shadow-lg hover:-translate-y-0.5 active:scale-95 shadow-md w-full sm:w-auto"
                    style={{ 
                      backgroundColor: colors.primary
                    }}
                  >
                    Get in touch
                  </button>
                  <p className="text-sm opacity-70 leading-relaxed" style={{ color: colors.textSecondary }}>
                    Have questions? We're here to help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-6" style={{ borderColor: colors.border }}></div>

        {/* Bottom Bar */}
        <div className="pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80 text-center md:text-left order-2 md:order-1" 
               style={{ color: colors.textSecondary }}>
              © Copyright codersadda.com. All right reserved
            </p>
            <div className="flex items-center gap-4 md:gap-6 order-1 md:order-2 mb-4 md:mb-0">
              {legalLinks.map((links,i)=>(
                <NavLink 
                to={links.path} 
                className="text-sm transition-all duration-300 hover:opacity-100 opacity-70"
                style={{ color: colors.textSecondary }}
              >
                {links.title}
              </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;