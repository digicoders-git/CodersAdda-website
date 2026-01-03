import React, { useState, useEffect, useMemo, memo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import Lottie from 'lottie-react';
import softwareAnimation from '../animtedSVG/Software.json';
import { 
  Smartphone, BookOpen, Users, Target, Video, FileText, Briefcase, 
  PlayCircle, TrendingUp, CheckCircle, Download, Sparkles,
  Award, Clock, Zap, ArrowRight, Layers
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TargetUserCard = memo(({ user, colors }) => (
  <div 
    className="group shadow relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer will-change-transform"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${colors.border}20`,
    }}
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ 
          backgroundColor: `${user.color}15`,
          color: user.color
        }}
      >
        {user.icon}
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: colors.textPrimary }}>{user.title}</h3>
      <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>{user.description}</p>
    </div>
  </div>
));

const FeatureCard = memo(({ feature, colors }) => (
  <div 
    className="group shadow relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl will-change-transform"
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
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3" style={{ color: colors.textPrimary }}>
          {feature.title}
        </h3>
        <p className="text-lg leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>
          {feature.description}
        </p>
        <ul className="space-y-2">
          {feature.points.map((point, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckCircle size={18} style={{ color: colors.primary }} />
              <span className="font-medium" style={{ color: colors.textSecondary }}>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
));

const SubscriptionPlanCard = memo(({ plan, colors }) => (
  <div 
    className={`relative shadow rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl will-change-transform ${
      plan.popular ? 'border-2' : 'border'
    }`}
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderColor: plan.popular ? plan.color : `${colors.border}20`
    }}
  >
    {plan.popular && (
      <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl font-bold text-sm"
        style={{ 
          backgroundColor: plan.color,
          color: colors.white
        }}
      >
        MOST POPULAR
      </div>
    )}
    
    <div className="p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2" style={{ color: colors.textPrimary }}>
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold" style={{ color: colors.textPrimary }}>
            {plan.price}
          </span>
          <span className="text-lg opacity-70" style={{ color: colors.textSecondary }}>
            {plan.period}
          </span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <CheckCircle size={18} style={{ color: colors.primary }} />
            <span className="font-medium" style={{ color: colors.textSecondary }}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <NavLink 
        to="/subscribe"
        className="block w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 
                 hover:scale-105 hover:shadow-lg active:scale-95"
        style={{ 
          backgroundColor: plan.popular ? plan.color : `${colors.primary}10`,
          color: plan.popular ? colors.white : colors.primary
        }}
      >
        {plan.popular ? 'Get Started' : 'Choose Plan'}
      </NavLink>
    </div>
  </div>
));

const WhyChooseUsCard = memo(({ item, colors }) => (
  <div 
    className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl will-change-transform"
    style={{ 
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}20`
    }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}
      >
        {item.icon}
      </div>
      <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>{item.title}</h3>
    </div>
    <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>{item.description}</p>
  </div>
));

const AboutApp = () => {
  const { colors } = useTheme();
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

  const targetUsers = useMemo(() => [
    { title: 'Students', description: 'Building technical skills alongside academic studies', icon: <Users size={24} />, color: '#4F46E5' },
    { title: 'Beginners', description: 'Starting journey in coding and digital technologies', icon: <BookOpen size={24} />, color: '#10B981' },
    { title: 'Developers', description: 'Improving or expanding existing knowledge', icon: <Target size={24} />, color: '#F59E0B' },
    { title: 'Professionals', description: 'Preparing for career growth or role changes', icon: <Briefcase size={24} />, color: '#EF4444' },
    { title: 'Self-Learners', description: 'Prefer flexible, practical, and focused learning', icon: <TrendingUp size={24} />, color: '#8B5CF6' }
  ], []);

  const features = useMemo(() => [
    {
      icon: <Video size={28} />,
      title: 'Online Courses',
      description: 'Step-by-step video lessons with practical examples and assignments',
      color: colors.primary,
      points: ['Beginner to Advanced Levels', 'Structured Learning Path', 'Real-world Projects']
    },
    {
      icon: <FileText size={28} />,
      title: 'E-Books & Resources',
      description: 'Downloadable digital books for detailed concept explanations',
      color: colors.secondary,
      points: ['Easy-to-Understand Content', 'Structured Reference Material', 'Self-Study Friendly']
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Jobs & Internships',
      description: 'Connect skills with real opportunities in tech industry',
      color: '#10B981',
      points: ['Latest Job Openings', 'Internship Opportunities', 'Career Updates']
    },
    {
      icon: <PlayCircle size={28} />,
      title: 'Learning Reels',
      description: 'Short videos for quick concept understanding and revision',
      color: '#F59E0B',
      points: ['Quick Concept Learning', 'Time-Efficient Format', 'Engaging Content']
    }
  ], [colors.primary, colors.secondary]);

  const subscriptionPlans = useMemo(() => [
    {
      name: 'Monthly Plan',
      price: '$19',
      period: '/month',
      features: ['All Premium Courses', 'E-Book Library Access', 'Job Portal Access', 'Learning Reels'],
      popular: false,
      color: colors.primary
    },
    {
      name: 'Yearly Plan',
      price: '$199',
      period: '/year',
      features: ['Everything in Monthly', 'Save 15%', 'Priority Support', 'Certificate Access', 'Community Access'],
      popular: true,
      color: colors.secondary
    }
  ], [colors.primary, colors.secondary]);

  const whyChooseUs = useMemo(() => [
    { title: 'Practical Learning Focus', description: 'Real-world application over theoretical knowledge', icon: <Zap size={20} /> },
    { title: 'Industry-Aligned Skills', description: 'Curriculum designed with current market requirements', icon: <Target size={20} /> },
    { title: 'Flexible Learning', description: 'Learn at your own pace, anytime, anywhere', icon: <Clock size={20} /> },
    { title: 'Career Support', description: 'Jobs, internships, and career guidance', icon: <Briefcase size={20} /> }
  ], []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.white }}>
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-12">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute top-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: colors.primary }}
          ></div>
          <div 
            className="absolute bottom-20 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: colors.secondary }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <Smartphone size={16} style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                MODERN LEARNING PLATFORM
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span style={{ color: colors.textPrimary }}>About the</span>
              <br />
              <span 
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
              >
                Coders App
              </span>
            </h1>

            <p className="text-base lg:text-lg leading-relaxed mb-6 opacity-80 max-w-xl"
              style={{ color: colors.textSecondary }}>
              A modern education platform designed to help students, developers, and working professionals 
              upskill through structured learning and practical knowledge.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Users size={18} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ color: colors.textPrimary }}>50K+</div>
                  <div className="text-xs opacity-70" style={{ color: colors.textSecondary }}>Active Learners</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <BookOpen size={18} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ color: colors.textPrimary }}>300+</div>
                  <div className="text-xs opacity-70" style={{ color: colors.textSecondary }}>Courses</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Award size={18} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ color: colors.textPrimary }}>95%</div>
                  <div className="text-xs opacity-70" style={{ color: colors.textSecondary }}>Success Rate</div>
                </div>
              </div>
            </div>

            <NavLink 
              to="/download"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold 
                       transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color: colors.white
              }}
            >
              <Download size={18} />
              Download App
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
            </NavLink>
          </div>

          <div className="flex-1 relative">
            <div className="relative"
              style={{
                transform: `translateY(${scrollY * 0.03}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <div className="relative mx-auto max-w-sm lg:max-w-md">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Lottie 
                    animationData={softwareAnimation}
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto"
                    style={{ maxHeight: '350px' }}
                  />
                </div>
                
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl flex items-center justify-center animate-float will-change-transform"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    animationDelay: '0.2s'
                  }}
                >
                  <BookOpen size={18} style={{ color: colors.primary }} />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center animate-float will-change-transform"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    animationDelay: '0.8s'
                  }}
                >
                  <Video size={18} style={{ color: colors.secondary }} />
                </div>
                <div className="absolute top-1/2 -left-6 w-10 h-10 rounded-lg flex items-center justify-center animate-float will-change-transform"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                    animationDelay: '1.2s'
                  }}
                >
                  <Target size={16} style={{ color: colors.primary }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: colors.textPrimary }}>
            Who Can Use <span style={{ color: colors.primary }}>Coders App</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Designed for a wide range of users from beginners to experienced professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {targetUsers.map((user, index) => (
            <TargetUserCard key={index} user={user} colors={colors} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ 
              backgroundColor: `${colors.primary}15`,
              border: `1px solid ${colors.primary}30`
            }}
          >
            <Sparkles size={16} style={{ color: colors.primary }} />
            <span className="text-sm font-semibold" style={{ color: colors.primary }}>
              WHAT WE OFFER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            Comprehensive <span style={{ color: colors.primary }}>Learning</span> Features
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Everything you need for skill development in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} colors={colors} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            Flexible <span style={{ color: colors.primary }}>Subscription</span> Plans
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Choose the plan that fits your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionPlanCard key={index} plan={plan} colors={colors} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="rounded-3xl p-8 lg:p-16 overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
            border: `1px solid ${colors.border}20`
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              Why Choose <span style={{ color: colors.primary }}>Coders App</span>
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
              Building confidence, improving knowledge, and preparing for career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <WhyChooseUsCard key={index} item={item} colors={colors} />
            ))}
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 rounded-3xl opacity-10 blur-xl pointer-events-none"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border"
              style={{ borderColor: colors.border + '20' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers size={24} style={{ color: colors.primary }} />
                <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>User Dashboard & Progress Tracking</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl" style={{ backgroundColor: `${colors.primary}10` }}>
                  <div className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>Track Progress</div>
                  <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>Monitor course completion and skill development</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: `${colors.primary}10` }}>
                  <div className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>View Purchases</div>
                  <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>Access courses, e-books, and learning resources</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: `${colors.primary}10` }}>
                  <div className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>Manage Subscriptions</div>
                  <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>Handle subscription details and access history</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-2">
        <div className="rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Get Started with Coders App
            </h2>
            <p className="text-lg lg:text-xl opacity-90 mb-10 max-w-2xl mx-auto text-white">
              Whether you're starting from scratch or upgrading your skills, Coders App provides 
              the tools and resources needed to learn effectively and grow professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/download"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl 
                         font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.primary,
                }}
              >
                <Download size={20} />
                Download App
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </NavLink>
              <NavLink 
                to="/courses"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl 
                         font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <BookOpen size={20} />
                Browse Courses
              </NavLink>
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

export default memo(AboutApp);
