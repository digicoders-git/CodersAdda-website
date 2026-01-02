import React from 'react';
import { useTheme } from '../context/ThemeContext';
import hero from '../assets/12.png';
import { Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { colors } = useTheme();

  const stats = [
    { value: '24,654', label: 'Worldwide Students' },
    { value: '300+', label: 'Best Courses' },
    { value: '2.5k+', label: 'Professional Mentor' },
    { value: '95%', label: 'Positive Feedback' },
  ];

  return (
    <header className="relative overflow-hidden" style={{ backgroundColor: colors.white }}>
      {/* Background Accent Shape - Responsive */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0" 
        style={{ 
          backgroundColor: colors.bgAccent,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      >
        {/* Mobile Gradient Overlay */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30"></div>
      </div>

      {/* Hero Content Area - Image on bottom for mobile */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-[5%] pt-8 sm:pt-10 lg:pt-10 pb-8 sm:pb-[60px] items-center relative z-10 min-h-[90vh] lg:min-h-[80vh]">
        {/* Left Section - Content on top for mobile */}
        <div className="flex-1 max-w-full lg:max-w-[550px] w-full lg:order-1 mt-0 lg:mt-0">
          <h4 className="text-base sm:text-[1.1rem] md:text-[1.2rem] font-semibold mb-3 sm:mb-4" style={{ color: colors.textPrimary }}>
            Learning with <span style={{ color: colors.primary }}>CodersAdda App</span>
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] leading-tight sm:leading-[1.1] font-extrabold mb-4 sm:mb-6" style={{ color: colors.textPrimary }}>
            Start <span style={{ color: colors.primary }}>Learning</span> <br className="hidden sm:block" />
            From the Best <br className="hidden sm:block" />
            <span style={{ color: colors.primary }}>Platform</span>
          </h1>
          <p className="text-sm sm:text-base md:text-[1.1rem] leading-relaxed mb-6 sm:mb-10 max-w-full lg:max-w-[450px]" style={{ color: colors.textSecondary }}>
            When you have a million things to do, you don't have time to write high-quality content. When you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <NavLink to="/download" 
              className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-4.5 border-none rounded-lg sm:rounded-[10px] text-base sm:text-lg md:text-[1.25rem] font-semibold cursor-pointer transition-all w-full sm:w-auto text-center"
              style={{ 
                backgroundColor: colors.primary, 
                color: colors.white,
                boxShadow: `0 10px 25px ${colors.primary}66`
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryHover}
              onMouseOut={(e) => e.target.style.backgroundColor = colors.primary}
            >
              Download App
            </NavLink>
            {/* <div className="flex items-center gap-3 sm:gap-4">
              <div 
                className="w-12 h-12 sm:w-[65px] sm:h-[65px] rounded-xl sm:rounded-[15px] flex items-center justify-center shadow-sm flex-shrink-0"
                style={{ backgroundColor: '#EFF2FF' }}
              >
                <Play size={20} className="sm:w-7 sm:h-6" style={{ color: '#5D5FEF' }} />
              </div>
              <span className="text-sm sm:text-base font-medium" style={{ color: colors.textPrimary }}>
                Watch Video
              </span>
            </div> */}
          </div>
        </div>

        {/* Right Section (Image) - Bottom for mobile */}
        <div className="flex-1 relative flex justify-center w-full mt-8 lg:mt-0 lg:order-2">
          {/* Stats Icon - Position Responsively */}
          {/* <div 
            className="absolute top-4 sm:top-8 lg:top-[25%] left-4 sm:left-8 lg:left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] rounded-lg sm:rounded-xl z-10 flex items-center justify-center"
            style={{ 
              backgroundColor: colors.secondary,
              boxShadow: `0 15px 30px ${colors.secondary}66`
            }}
          >
            <div className="flex gap-[2px] sm:gap-[3px] items-end h-4 sm:h-5 md:h-[22px]">
               <div className="w-[3px] sm:w-[4px] md:w-[5px] h-2 sm:h-2.5 md:h-2.5 bg-white rounded-[1px]"></div>
               <div className="w-[3px] sm:w-[4px] md:w-[5px] h-3 sm:h-4 md:h-[22px] bg-white rounded-[1px]"></div>
               <div className="w-[3px] sm:w-[4px] md:w-[5px] h-2.5 sm:h-3 md:h-4 bg-white rounded-[1px]"></div>
            </div>
          </div> */}

          <img 
            src={hero} 
            alt="Student" 
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px] lg:w-[90%] rounded-bl-[80px] sm:rounded-bl-[100px] lg:rounded-bl-[120px] z-[5] relative"
          />
        </div>
      </div>

      {/* Stats Section - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-[5%] pt-6 sm:pt-10 lg:pt-10 pb-10 sm:pb-16 lg:pb-20 relative z-10">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="px-4 sm:px-6 py-6 sm:py-8 lg:py-10 rounded-xl sm:rounded-2xl text-center"
            style={{ 
              backgroundColor: colors.white,
              boxShadow: colors.cardShadow 
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-1 sm:mb-2" style={{ color: colors.primary }}>
              {stat.value}
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-medium" style={{ color: colors.statsLabel }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;