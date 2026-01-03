import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import { 
  Smartphone, Download, Play, Apple, BookOpen,
  Briefcase, Video, Sparkles, Zap, Clock,
  Users, ArrowRight, TabletSmartphone,
  TrendingUp, Star
} from 'lucide-react';
import img10 from '../assets/new/img10.png'

const FeatureCard = memo(({ feature, colors }) => (
  <div 
    className="group p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl will-change-transform"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${colors.border}20`,
    }}
  >
    <div className="flex items-start gap-6">
      <div className="p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
      >
        {feature.icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: colors.textPrimary }}>
          {feature.title}
        </h3>
        <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.textSecondary }}>
          {feature.description}
        </p>
      </div>
    </div>
  </div>
));

const BenefitCard = memo(({ benefit, colors }) => (
  <div 
    className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 will-change-transform"
    style={{ 
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}20`
    }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}
      >
        {benefit.icon}
      </div>
      <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>{benefit.title}</h3>
    </div>
    <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>{benefit.description}</p>
  </div>
));

const PlatformButton = memo(({ platform, activePlatform, onClick, colors }) => {
  const isActive = activePlatform === platform;
  const Icon = platform === 'android' ? Play : Apple;
  
  return (
    <button
      onClick={() => onClick(platform)}
      className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
        isActive ? 'scale-105 shadow-lg' : ''
      }`}
      style={{ 
        backgroundColor: isActive ? colors.white : 'transparent',
        color: isActive ? colors.textPrimary : colors.textSecondary,
      }}
    >
      <Icon size={24} style={{ color: isActive ? colors.primary : colors.textSecondary }} />
      {platform === 'android' ? 'Android' : 'iOS'}
    </button>
  );
});

const DownloadApp = () => {
  const { colors } = useTheme();
  const [activePlatform, setActivePlatform] = useState('android');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlatformChange = useCallback((platform) => {
    setActivePlatform(platform);
  }, []);

  const features = useMemo(() => [
    {
      icon: <BookOpen size={28} />,
      title: 'Structured Courses',
      description: 'Access courses designed for different skill levels',
      color: colors.primary
    },
    {
      icon: <Video size={28} />,
      title: 'Short Learning Videos',
      description: 'Quick and effective understanding',
      color: colors.secondary
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Job Opportunities',
      description: 'Explore jobs and internships related to your skills',
      color: '#10B981'
    },
    {
      icon: <Download size={28} />,
      title: 'E-Books & Resources',
      description: 'Download and read for learning and revision',
      color: '#F59E0B'
    }
  ], [colors.primary, colors.secondary]);

  const benefits = useMemo(() => [
    {
      icon: <Clock size={20} />,
      title: 'Learn at Your Pace',
      description: 'Flexible access anytime, anywhere'
    },
    {
      icon: <Zap size={20} />,
      title: 'All-in-One Platform',
      description: 'Courses and resources in one place'
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Stay Updated',
      description: 'Latest learning content and opportunities'
    },
    {
      icon: <Star size={20} />,
      title: 'User-Friendly',
      description: 'Smooth and intuitive learning experience'
    }
  ], []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.white }}>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <Smartphone size={18} style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                DOWNLOAD APP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: colors.textPrimary }}>
              Download <span style={{ color: colors.primary }}>DigiCoders</span>
              <br />
              <span style={{ color: colors.textPrimary }}>Mobile App</span>
            </h1>
            
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-80 max-w-2xl"
              style={{ color: colors.textSecondary }}>
              Complete access to all learning resources in one place. Learn anytime, anywhere 
              with your mobile device—no desktop required.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Users size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>50K+</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Active Users</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Star size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>4.9★</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>App Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <TabletSmartphone size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>2 Platforms</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Android & iOS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:max-w-lg">
            <div className="relative" style={{
              transform: `translateY(${scrollY * 0.02}px)`,
              transition: 'transform 0.3s ease-out'
            }}>
              <div className="relative mx-auto max-w-lg">
                <div className="relative overflow-hidden rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
                    padding: '20px'
                  }}
                >
                  <img 
                    src={img10} 
                    alt="DigiCoders Mobile App" 
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 will-change-transform"
                    loading="lazy"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))',
                      maxHeight: '500px'
                    }}
                  />
                </div>
                
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center animate-float will-change-transform"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    animationDelay: '0.2s'
                  }}
                >
                  <Play size={28} style={{ color: colors.primary }} />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl flex items-center justify-center animate-float will-change-transform"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    animationDelay: '0.8s'
                  }}
                >
                  <Apple size={28} style={{ color: colors.textPrimary }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            What You Can Do with the <span style={{ color: colors.primary }}>DigiCoders App</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Everything you need for learning and career growth in one mobile app
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} colors={colors} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ 
              backgroundColor: `${colors.primary}15`,
              border: `1px solid ${colors.primary}30`
            }}
          >
            <Download size={16} style={{ color: colors.primary }} />
            <span className="text-sm font-semibold" style={{ color: colors.primary }}>
              DOWNLOAD OPTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            Choose Your <span style={{ color: colors.primary }}>Platform</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Available on both major mobile platforms
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex border rounded-2xl p-1 mb-8"
            style={{ borderColor: colors.border + '20', backgroundColor: `${colors.border}10` }}>
            <PlatformButton platform="android" activePlatform={activePlatform} onClick={handlePlatformChange} colors={colors} />
            <PlatformButton platform="ios" activePlatform={activePlatform} onClick={handlePlatformChange} colors={colors} />
          </div>

          <div className={`transition-all duration-500 will-change-transform ${activePlatform === 'android' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="p-8 rounded-3xl text-center"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
                border: `1px solid ${colors.border}20`
              }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: colors.white, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Play size={40} style={{ color: '#3DDC84' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>Download for Android</h3>
              <p className="text-lg mb-6 opacity-80" style={{ color: colors.textSecondary }}>
                Available on Google Play. Access all learning features directly on your Android smartphones or tablets.
              </p>
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ 
                  backgroundColor: '#3DDC84',
                  color: colors.white
                }}
              >
                <Play size={20} />
                Download on Google Play
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>

          <div className={`transition-all duration-500 will-change-transform ${activePlatform === 'ios' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="p-8 rounded-3xl text-center"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
                border: `1px solid ${colors.border}20`
              }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: colors.white, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Apple size={40} style={{ color: colors.textPrimary }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>Download for iOS</h3>
              <p className="text-lg mb-6 opacity-80" style={{ color: colors.textSecondary }}>
                Available on the Apple App Store. Enjoy optimized performance on iPhone and iPad devices.
              </p>
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ 
                  backgroundColor: colors.textPrimary,
                  color: colors.white
                }}
              >
                <Apple size={20} />
                Download on App Store
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="rounded-3xl p-8 lg:p-12"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
            border: `1px solid ${colors.border}20`
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              Why Download the <span style={{ color: colors.primary }}>DigiCoders App</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} colors={colors} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: colors.border + '20' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <TabletSmartphone size={24} style={{ color: colors.primary }} />
              <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>Device Compatibility</h3>
            </div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
              Compatible with most modern Android and iOS devices. Active internet required for 
              online content; downloaded resources available offline.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Start Learning On The Go
            </h2>
            <p className="text-lg lg:text-xl opacity-90 mb-10 max-w-2xl mx-auto text-white">
              Download the DigiCoders app today and transform your learning experience. 
              Perfect for students, professionals, and self-learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl 
                       font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.primary,
                }}
              >
                <Play size={20} />
                Download Android App
              </button>
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl 
                       font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Apple size={20} />
                Download iOS App
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: 'white' }}></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full" style={{ backgroundColor: 'white' }}></div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(DownloadApp);
