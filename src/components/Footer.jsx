import React, { useState, useEffect, useMemo, memo } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Clock, ArrowRight, Globe, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

const FooterLink = memo(({ link, colors }) => (
  <li>
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
));

const ContactDetail = memo(({ info, colors }) => (
  <div className="flex items-start gap-3">
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
));

const SocialLink = memo(({ social }) => (
  <a 
    href={social.link}
    target='_blank'
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
));

const Footer = () => {
  const { colors } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = useMemo(() => [
    { title: 'Home', path: '/' },
    { title: 'About App', path: '/about-app' },
    { title: 'About Us', path: '/about-us' },
  ], []);
  
  const resources = useMemo(() => [
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms of Service', path: '/terms' },
    { title: 'Refund Policy', path: '/refund' },
    { title: 'Disclaimer', path: '/disclaimer' }
  ], []);

  const contactInfo = useMemo(() => [
    { icon: <Phone size={18} />, text: '+91 6393430756', label: 'Call Us' },
    { icon: <Mail size={18} />, text: 'digicodersteck@gmail.com', label: 'Email Us' },
    { icon: <MapPin size={18} />, text: 'Aliganj Sector O, Lucknow', label: 'Visit Us' },
    { icon: <Clock size={18} />, text: 'Mon - Fri, 9:00 AM - 6:00 PM', label: 'Working Hours' },
  ], []);

  const socialLinks = useMemo(() => [
    { icon: Facebook, link: 'https://www.facebook.com/DigiCodersTech/', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, label: 'Twitter', link:'https://x.com/DigiCodersTech/', color: '#1DA1F2' },
    { icon: Instagram, label: 'Instagram',link:'https://www.instagram.com/digicoderstech/', color: '#E4405F' },
    { icon: Linkedin, label: 'LinkedIn',link:'https://www.linkedin.com/company/digicoders/', color: '#0A66C2' },
    { icon: Globe, label: 'Website',link:'https://digicoders.in', color: colors.primary },
  ], [colors.primary]);

  return (
    <footer className="relative overflow-hidden bg-zinc-100">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: colors.secondary }}
        ></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
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
              
              <div className="pt-4">
                <p className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-70" style={{ color: colors.textSecondary }}>
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <SocialLink key={index} social={social} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-2">
              <h4 className="font-bold text-lg tracking-wide uppercase" style={{ color: colors.textPrimary }}>
                Quick Links
              </h4>
              <ul className="space-y-1">
                {quickLinks.map((link, idx) => (
                  <FooterLink key={idx} link={link} colors={colors} />
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-2">
              <h4 className="font-bold text-lg tracking-wide uppercase" style={{ color: colors.textPrimary }}>
                Legal Links
              </h4>
              <ul className="space-y-1">
                {resources.map((link, idx) => (
                  <FooterLink key={idx} link={link} colors={colors} />
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="space-y-6">
              <h4 className="font-bold text-lg tracking-wide uppercase" style={{ color: colors.textPrimary }}>
                Contact Info
              </h4>
              
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <ContactDetail key={idx} info={info} colors={colors} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 h-px opacity-20"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`
          }}
        ></div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center w-full">
            <p className="text-sm opacity-80" 
               style={{ color: colors.textSecondary }}>
              © {new Date().getFullYear()} CodersAdda. All rights reserved. Design and Developed by <a style={{color:colors.primary}} target='_blank' href="https://digicoders.in" rel="noreferrer">#TeamDigiCoders</a>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl flex items-center justify-center 
                   transition-all duration-500 hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-lg animate-float will-change-transform
                   ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ 
          backgroundColor: colors.primary,
          color: colors.white
        }}
        aria-label="Back to top"
      >
        <ArrowLeft size={20} className="rotate-90" />
      </button>

      <style>{`
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

export default memo(Footer);
