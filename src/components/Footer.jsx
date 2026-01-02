import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Send, ArrowRight, Sparkles, Award, Users, Globe, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const { colors } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About App', path: '/about-app' },
    { title: 'About Us', path: '/about-us' },
    // { title: 'Courses', path: '/courses' },
    // { title: 'Mentors', path: '/mentors' },
  ];
  
  const legalLinks = [
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms of Service', path: '/terms' },
    { title: 'Refund Policy', path: '/refund' },
    { title: 'Disclaimer', path: '/disclaimer' }
  ];

  const resources = [
    { title: 'Blog & Articles', path: '/blog' },
    { title: 'Tutorials', path: '/tutorials' },
    { title: 'Documentation', path: '/docs' },
    { title: 'Community', path: '/community' },
    { title: 'Support Center', path: '/support' },
  ];

  const contactInfo = [
    { icon: <Phone size={18} />, text: '+91 6393430756', label: 'Call Us' },
    { icon: <Mail size={18} />, text: 'abhay@codersadda.com', label: 'Email Us' },
    { icon: <MapPin size={18} />, text: 'Tech Park, Silicon Valley, CA', label: 'Visit Us' },
    { icon: <Clock size={18} />, text: 'Mon - Fri, 9:00 AM - 6:00 PM', label: 'Working Hours' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, label: 'Twitter', color: '#1DA1F2' },
    { icon: Instagram, label: 'Instagram', color: '#E4405F' },
    { icon: Linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: Globe, label: 'Website', color: colors.primary },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: colors.white }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: colors.secondary }}
        ></div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative -top-12">
          <div className="rounded-3xl p-8 lg:p-12 overflow-hidden shadow-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              border: `1px solid ${colors.border}30`
            }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Send size={24} className="text-white" />
                  <span className="text-sm font-semibold tracking-wider text-white opacity-90">STAY UPDATED</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white opacity-90 max-w-md">
                  Get the latest updates on new courses, tutorials, and tech insights delivered to your inbox.
                </p>
              </div>
              
              <div className="flex-1 w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl text-base bg-white/10 backdrop-blur-sm border border-white/20 
                             text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 
                             transition-all duration-300"
                  />
                  <button
                    className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 
                             hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-3"
                    style={{ 
                      backgroundColor: 'white',
                      color: colors.primary
                    }}
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column - Full width on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  >
                    <span className="text-2xl font-bold text-white">C</span>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles size={16} className="text-yellow-500" fill="currentColor" />
                  </div> */}
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight" style={{ color: colors.textPrimary }}>
                    CodersAdda
                  </h2>
                  <p className="text-sm opacity-70" style={{ color: colors.textSecondary }}>
                    Empowering Developers Worldwide
                  </p>
                </div>
              </div>
              
              <p className="text-base leading-relaxed opacity-80 max-w-md" 
                 style={{ color: colors.textSecondary }}>
                Transforming careers through cutting-edge technology education. Join 50,000+ developers 
                mastering in-demand skills with industry experts.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                    <Users size={20} style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>50K+</div>
                    <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Active Learners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                    <Award size={20} style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>4.9/5</div>
                    <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column - 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h4 className="font-bold text-lg tracking-wide uppercase" style={{ color: colors.textPrimary }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <NavLink 
                      to={link.path}
                      className="group flex items-center gap-2 text-base transition-all duration-300 py-2"
                      style={{ 
                        color: colors.textSecondary,
                        textDecoration: 'none'
                      }}
                    >
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.title}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources Column - 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h4 className="font-bold text-lg tracking-wide uppercase" style={{ color: colors.textPrimary }}>
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((link, idx) => (
                  <li key={idx}>
                    <NavLink 
                      to={link.path}
                      className="group flex items-center gap-2 text-base transition-all duration-300 py-2"
                      style={{ 
                        color: colors.textSecondary,
                        textDecoration: 'none'
                      }}
                    >
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.title}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column - 4 columns on desktop */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <h4 className="font-bold text-lg tracking-wide uppercase" style={{ color: colors.textPrimary }}>
                Contact Info
              </h4>
              
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg mt-1" style={{ backgroundColor: `${colors.primary}10` }}>
                      <div style={{ color: colors.primary }}>
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: colors.textPrimary }}>{info.text}</p>
                      <p className="text-sm opacity-70" style={{ color: colors.textSecondary }}>{info.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-70" style={{ color: colors.textSecondary }}>
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 
                               hover:scale-110 hover:-translate-y-1 active:scale-95"
                      style={{ 
                        backgroundColor: `${social.color}15`,
                        color: social.color
                      }}
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px opacity-20"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`
          }}
        ></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left">
            <p className="text-sm opacity-80" 
               style={{ color: colors.textSecondary }}>
              © {new Date().getFullYear()} CodersAdda. All rights reserved.
            </p>
            <p className="text-xs opacity-60 mt-1" style={{ color: colors.textSecondary }}>
              Made with ❤️ for developers worldwide
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            {legalLinks.map((link, idx) => (
              <NavLink 
                key={idx}
                to={link.path}
                className="text-sm transition-all duration-300 hover:opacity-100 opacity-70 
                         hover:scale-105 active:scale-95"
                style={{ color: colors.textSecondary }}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm opacity-70" style={{ color: colors.textSecondary }}>
            <Globe size={14} />
            <span>English</span>
            <span className="opacity-50">•</span>
            <span>🇺🇸</span>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="mt-8 pt-8 border-t border-dashed flex flex-wrap justify-center gap-8 items-center"
          style={{ borderColor: `${colors.border}30` }}
        >
          <div className="flex items-center gap-2 text-sm opacity-70" style={{ color: colors.textSecondary }}>
            🔒 SSL Secured
          </div>
          <div className="flex items-center gap-2 text-sm opacity-70" style={{ color: colors.textSecondary }}>
            ⭐ Trustpilot 4.9
          </div>
          <div className="flex items-center gap-2 text-sm opacity-70" style={{ color: colors.textSecondary }}>
            🏆 Award Winning
          </div>
          <div className="flex items-center gap-2 text-sm opacity-70" style={{ color: colors.textSecondary }}>
            💯 100% Secure
          </div>
        </div> */}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl flex items-center justify-center 
                   transition-all duration-500 hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-lg animate-float
                   ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ 
          backgroundColor: colors.primary,
          color: colors.white
        }}
        aria-label="Back to top"
      >
        <ArrowLeft size={20} className="rotate-90" />
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;