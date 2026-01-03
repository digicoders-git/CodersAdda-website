import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Building2, Target, Rocket, Shield, Users, Award, 
  Code, Smartphone, Palette, Database, Globe, BookOpen,
  ChevronRight, Sparkles, TrendingUp, Zap, Lightbulb,
  GraduationCap, Briefcase, Star, ArrowRight
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import img5 from '../assets/new/img5.png';

const AboutUs = () => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('mission');

  const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Responsive and scalable websites and applications',
      color: '#3B82F6'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile App Development',
      description: 'Android and iOS platforms development',
      color: '#10B981'
    },
    {
      icon: <Palette size={24} />,
      title: 'Graphic & UI/UX Design',
      description: 'User-friendly and visually engaging interfaces',
      color: '#8B5CF6'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Analytics',
      description: 'Data-driven decision-making solutions',
      color: '#F59E0B'
    }
  ];

  const trainingPrograms = [
    'Practical, hands-on learning',
    'Project-based training with real-world use cases',
    'Beginner to advanced learning paths',
    'Skills aligned with current industry demands'
  ];

  const coreValues = [
    {
      title: 'Practical Learning',
      description: 'Focus on skills that can be applied in real projects',
      icon: <Zap size={20} />,
      color: colors.primary
    },
    {
      title: 'Quality & Integrity',
      description: 'Maintain high standards in both training and development',
      icon: <Shield size={20} />,
      color: '#10B981'
    },
    {
      title: 'Accessibility',
      description: 'Make learning and technology available to a wide audience',
      icon: <Users size={20} />,
      color: '#8B5CF6'
    },
    {
      title: 'Innovation',
      description: 'Continuously improve tools, content, and learning methods',
      icon: <Lightbulb size={20} />,
      color: '#F59E0B'
    }
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.white }}>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-1">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <Building2 size={16} style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                ABOUT DIGICODERS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span style={{ color: colors.textPrimary }}>Empowering </span>
              <span style={{ color: colors.primary }}>Learners</span>
              <br />
              <span style={{ color: colors.textPrimary }}>with </span>
              <span style={{ color: colors.primary }}>Digital Skills</span>
            </h1>

            {/* Description */}
            <p className="text-lg leading-relaxed mb-8 opacity-80 max-w-2xl"
              style={{ color: colors.textSecondary }}>
              An education-focused technology company committed to empowering learners with 
              practical digital skills and career-oriented knowledge at the intersection of 
              technology development and professional training.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Users size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>50K+</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Learners</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <BookOpen size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>300+</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Courses</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Briefcase size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>10+ Years</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Experience</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <NavLink 
              to="/download"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-xl font-semibold text-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: colors.primary,
                color: colors.white
              }}
            >
              {/* <Sparkles size={20} /> */}
              Start Learning
            </NavLink>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1">
            <div className="relative">
              <div className="relative mx-auto max-w-lg">
                <div className="relative overflow-hidden rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
                    padding: '20px'
                  }}
                >
                  <img 
                    src={img5} 
                    alt="DigiCoders Team" 
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))',
                      maxHeight: '450px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            Our <span style={{ color: colors.primary }}>Services</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Professional services in multiple technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 shadow rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${colors.border}20`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                style={{ 
                  backgroundColor: `${service.color}15`,
                  color: service.color
                }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.textPrimary }}>
                {service.title}
              </h3>
              <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
        <div className="rounded-3xl p-8 lg:p-12"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
            border: `1px solid ${colors.border}20`
          }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Vision */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${colors.primary}20` }}>
                  <Target size={24} style={{ color: colors.primary }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.textSecondary }}>
                To make quality technical education accessible, affordable, and practical for everyone. 
                We believe learning should be inclusive, flexible, and focused on real skills rather than theory alone.
              </p>
            </div>

            {/* Mission */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${colors.primary}20` }}>
                  <Rocket size={24} style={{ color: colors.primary }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>Our Mission</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Build industry-relevant learning content',
                  'Help students become job-ready',
                  'Provide affordable learning solutions',
                  'Encourage continuous learning'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                    <span className="font-medium" style={{ color: colors.textSecondary }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              Training & <span style={{ color: colors.primary }}>Skill Development</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: colors.textSecondary }}>
              Structured training programs designed to help learners gain practical experience 
              and job-ready skills, bridging the gap between academic learning and real-world requirements.
            </p>
            
            <div className="space-y-4">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: `${colors.primary}08` }}>
                  <GraduationCap size={20} style={{ color: colors.primary }} />
                  <span className="font-medium" style={{ color: colors.textSecondary }}>{program}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="p-8 rounded-3xl"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color: colors.white
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={28} />
                <h3 className="text-2xl font-bold">Why Choose DigiCoders</h3>
              </div>
              <p className="text-lg mb-6 opacity-90">
                Combines real software development experience with structured training programs. 
                Learners benefit from industry exposure, practical projects, and guidance that 
                helps them understand how technology works in real-world environments.
              </p>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Star size={16} fill="currentColor" />
                <span>Industry experts as instructors</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90 mt-2">
                <Star size={16} fill="currentColor" />
                <span>Real-world project experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90 mt-2">
                <Star size={16} fill="currentColor" />
                <span>Career-focused curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            Our <span style={{ color: colors.primary }}>Core Values</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            The principles that guide our approach to technology and education
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${colors.border}20`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{ 
                    backgroundColor: `${value.color}15`,
                    color: value.color
                  }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>{value.title}</h3>
              </div>
              <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
        <div className="rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Grow with DigiCoders
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-white">
              Whether you are a student, a professional, or an organization, DigiCoders 
              aims to support your growth through practical learning, modern technology, 
              and career-focused solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/courses"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl font-semibold 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.primary,
                }}
              >
                <BookOpen size={20} />
                Explore Courses
                <ArrowRight size={20} />
              </NavLink>
              <NavLink 
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl font-semibold 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Users size={20} />
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;