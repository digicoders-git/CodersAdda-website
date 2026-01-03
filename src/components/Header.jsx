import React, { useState, useEffect, useMemo, memo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Lottie from 'lottie-react';
import Welcome from '../animtedSVG/Welcome.json';
import { Download, Users, BookOpen, UserCheck, Star, Briefcase, CreditCard, FileText } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const StatsCard = memo(({ stat, idx, colors }) => (
  <div 
    className="group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${colors.border}20`,
    }}
  >
    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ 
        background: `radial-gradient(circle at center, ${colors.primary}05 0%, transparent 70%)`,
      }}
    ></div>
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
          style={{ backgroundColor: `${colors.primary}15` }}
        >
          <div style={{ color: colors.primary }}>
            {stat.icon}
          </div>
        </div>
      </div>
      
      <h3 className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 inline-block"
        style={{ color: colors.primary }}
      >
        {stat.value}
      </h3>
      
      <p className="text-base lg:text-lg font-medium opacity-80"
        style={{ color: colors.textSecondary }}
      >
        {stat.label}
      </p>
    </div>

    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        border: `2px solid transparent`,
        background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20) border-box`,
        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
        mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    ></div>
  </div>
));

const Header = () => {
  const { colors } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let requestRunning = false;
    const handleScroll = () => {
      if (!requestRunning) {
        requestRunning = true;
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          requestRunning = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = useMemo(() => [
    { value: '24,654', label: 'Worldwide Students', icon: <Users size={20} /> },
    { value: '300+', label: 'Best Courses', icon: <BookOpen size={20} /> },
    { value: '2.5k+', label: 'Professional Mentor', icon: <UserCheck size={20} /> },
    { value: '95%', label: 'Positive Feedback', icon: <Star size={20} /> },
  ], []);

  const trustAvatars = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <header className="relative -mt-5 md:-mt-5 lg:-mt-1 overflow-hidden" style={{ backgroundColor: colors.white }}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-white to-blue-50/30"></div>
        <div 
          className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full opacity-20 blur-3xl will-change-transform"
          style={{ 
            backgroundColor: colors.primary,
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        ></div>
        <div 
          className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full opacity-10 blur-3xl will-change-transform"
          style={{ 
            backgroundColor: colors.secondary,
            transform: `translateY(${scrollY * -0.03}px)`,
          }}
        ></div>
      </div>

      <div className="absolute top-10 left-5 w-4 h-4 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: colors.primary }}></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 rounded-full opacity-10 animate-pulse delay-300" style={{ backgroundColor: colors.secondary }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full opacity-15 animate-pulse delay-700" style={{ backgroundColor: colors.primary }}></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 sm:pt-14 lg:pt-10 pb-16 sm:pb-20 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 lg:max-w-xl xl:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-2 transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}20`
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }}></span>
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                Learning with <span className="font-bold">CodersAdda</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight mb-2">
              <span className="block" style={{ color: colors.textPrimary }}>
                Start Learning
              </span>
              <span className="block">
                <span style={{ color: colors.textPrimary }}>From the </span>
                <span 
                  className="relative inline-block"
                  style={{ color: colors.primary }}
                >
                  Best Platform
                  <svg className="absolute -bottom-2 left-0 w-full h-1" style={{ color: colors.primary }}>
                    <path d="M0,1 Q30,8 60,1 T120,1" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12 max-w-xl opacity-80 font-light"
              style={{ color: colors.textSecondary }}
            >
              Master in-demand skills with industry experts. Join thousands of learners transforming their careers through interactive, project-based learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16">
              <NavLink 
                to="/download"
                className="group relative flex items-center justify-center gap-3 px-8 py-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 overflow-hidden"
                style={{ 
                  backgroundColor: colors.primary,
                  color: colors.white,
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Download size={22} className="transition-transform duration-300 group-hover:translateY-1" />
                  Download App
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  }}
                ></div>
              </NavLink>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <div className="flex -space-x-3">
                {trustAvatars.map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    style={{ 
                      backgroundColor: i % 2 === 0 ? colors.primary : colors.secondary,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white font-bold">
                      {i}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold" style={{ color: colors.textPrimary }}>
                  Trusted by 50K+ learners worldwide
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} fill={colors.primary} style={{ color: colors.primary }} />
                  ))}
                  <span className="ml-2 text-sm opacity-80" style={{ color: colors.textSecondary }}>
                    4.9/5 average rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-xl lg:max-w-2xl">
            <div className="relative will-change-transform"
              style={{
                transform: `translateY(${scrollY * 0.03}px)`,
              }}
            >
              <div className="w-full rounded-[2rem] lg:rounded-[3rem] relative z-10 overflow-hidden">
                <Lottie 
                  animationData={Welcome}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl p-3 shadow-lg z-20 animate-float"
                style={{ 
                  backgroundColor: colors.white,
                  animationDelay: '0.5s'
                }}
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${colors.secondary}15` }}
                >
                  <Users size={20} style={{ color: colors.secondary }} />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-0 w-20 h-20 rounded-2xl p-3 shadow-lg z-20 animate-float"
                style={{ 
                  backgroundColor: colors.white,
                  animationDelay: '1s'
                }}
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <BookOpen size={20} style={{ color: colors.primary }} />
                </div>
              </div>

              <div className="absolute top-0 -right-0 w-18 h-18 rounded-2xl p-3 shadow-lg z-20 animate-float"
                style={{ 
                  backgroundColor: colors.white,
                  animationDelay: '1.5s'
                }}
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#10B98115' }}
                >
                  <Briefcase size={18} style={{ color: '#10B981' }} />
                </div>
              </div>

              <div className="absolute top-3/4 -left-6 w-18 h-18 rounded-2xl p-3 shadow-lg z-20 animate-float"
                style={{ 
                  backgroundColor: colors.white,
                  animationDelay: '2s'
                }}
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#F59E0B15' }}
                >
                  <FileText size={18} style={{ color: '#F59E0B' }} />
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 w-16 h-16 rounded-2xl p-2 shadow-lg z-20 animate-float"
                style={{ 
                  backgroundColor: colors.white,
                  animationDelay: '0.3s'
                }}
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#8B5CF615' }}
                >
                  <CreditCard size={16} style={{ color: '#8B5CF6' }} />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-[3rem] opacity-10 blur-xl"
              style={{ backgroundColor: colors.primary }}
            ></div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 opacity-20"
            style={{ backgroundColor: colors.border }}
          ></div>
          
          {stats.map((stat, idx) => (
            <StatsCard key={idx} stat={stat} idx={idx} colors={colors} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </header>
  );
};

export default memo(Header);