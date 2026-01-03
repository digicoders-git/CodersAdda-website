import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import { 
  FileText, Shield, User, Smartphone, Lock, AlertCircle,
  CreditCard, BookOpen, Scale, Mail, ChevronRight, CheckCircle,
  XCircle, Globe, Clock, TrendingUp, Bell, Target
} from 'lucide-react';
import img7 from '../assets/new/img7.png';

const Terms = () => {
  const { colors } = useTheme();

  const termsSections = [
    {
      icon: <User size={20} />,
      title: 'User Responsibilities',
      color: colors.primary,
      points: [
        'Provide accurate and up-to-date information',
        'Maintain confidentiality of login credentials',
        'Responsible for all account activities',
        'Use platform only for lawful, ethical purposes',
        'No harm to platform or other users'
      ]
    },
    {
      icon: <Smartphone size={20} />,
      title: 'App Usage Rules',
      color: colors.secondary,
      points: [
        'No sharing of login credentials',
        'No copying or reselling content',
        'No hacking or reverse engineering',
        'No fraudulent or harmful activities',
        'Personal learning purposes only'
      ]
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Content Ownership',
      color: '#10B981',
      points: [
        'All content is intellectual property',
        'Access granted for personal learning only',
        'No unauthorized use or distribution',
        'No commercial exploitation',
        'Ownership remains with DigiCoders'
      ]
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Subscription Terms',
      color: '#F59E0B',
      points: [
        'Monthly or yearly subscriptions',
        'Non-refundable fees',
        'Access valid for active period only',
        'Secure payment gateways',
        'Automatic renewal unless cancelled'
      ]
    },
    {
      icon: <AlertCircle size={20} />,
      title: 'Limitations',
      color: '#EF4444',
      points: [
        'No guarantee of specific results',
        'No job placement guarantees',
        'Limited liability for damages',
        'Use at own risk',
        'Individual results vary'
      ]
    },
    {
      icon: <Scale size={20} />,
      title: 'Legal & Changes',
      color: '#8B5CF6',
      points: [
        'Terms may be updated anytime',
        'Governing law: India',
        'Jurisdiction: Indian courts',
        'Immediate effect of changes',
        'Continued use means acceptance'
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.white }}>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <FileText size={18} style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                TERMS & CONDITIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: colors.textPrimary }}>
              Terms & <span style={{ color: colors.primary }}>Conditions</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-80 max-w-2xl"
              style={{ color: colors.textSecondary }}>
              These terms govern your access to and use of DigiCoders platform. 
              By using our services, you agree to comply with these conditions.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg mb-8"
              style={{ 
                backgroundColor: `${colors.primary}10`,
                color: colors.primary
              }}
            >
              <Clock size={18} />
              <div>
                <span className="text-sm font-medium">Effective: </span>
                <span className="text-sm font-bold">
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Target size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>Legal Agreement</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Binding Terms</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Shield size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>Protection</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Both Parties</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 relative w-full lg:max-w-lg">
            <div className="relative">
              <div className="relative mx-auto max-w-lg">
                <div className="relative overflow-hidden rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
                    padding: '20px'
                  }}
                >
                  <img 
                    src={img7} 
                    alt="Terms & Conditions" 
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))',
                      maxHeight: '500px'
                    }}
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                >
                  <FileText size={24} style={{ color: colors.primary }} />
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                >
                  <Scale size={24} style={{ color: colors.secondary }} />
                </div>
              </div>
              
              {/* Background Blur Effects */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: colors.secondary }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-10">
        <div className="p-6 sm:p-8 rounded-2xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
            border: `1px solid ${colors.border}20`
          }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl mt-1" style={{ backgroundColor: colors.white }}>
              <AlertCircle size={24} style={{ color: colors.primary }} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.textPrimary }}>
                Important Notice
              </h3>
              <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.textSecondary }}>
                By accessing, registering, or using the DigiCoders platform, you agree to comply with 
                and be bound by these Terms & Conditions. If you do not agree with any part of these 
                terms, you should discontinue using our platform immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {termsSections.map((section, index) => (
            <div 
              key={index}
              className="group shadow p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${colors.border}20`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{ 
                    backgroundColor: `${section.color}15`,
                    color: section.color
                  }}
                >
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
                  {section.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {section.title.includes('Limitations') ? (
                      <XCircle size={18} className="mt-1 flex-shrink-0" style={{ color: '#EF4444' }} />
                    ) : (
                      <CheckCircle size={18} className="mt-1 flex-shrink-0" style={{ color: section.color }} />
                    )}
                    <span className="text-sm opacity-80" style={{ color: colors.textSecondary }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notes */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
        <div className="space-y-6">
          {/* Account Suspension */}
          <div className="p-6 rounded-2xl" style={{ 
            backgroundColor: `${colors.primary}08`,
            border: `1px solid ${colors.primary}20`
          }}>
            <div className="flex items-center gap-3 mb-4">
              <User size={20} style={{ color: colors.primary }} />
              <h3 className="text-lg font-bold" style={{ color: colors.textPrimary }}>Account Suspension & Termination</h3>
            </div>
            <p className="text-sm opacity-80 mb-3" style={{ color: colors.textSecondary }}>
              DigiCoders reserves the right to suspend or terminate accounts without prior notice for:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                <span className="text-sm opacity-80" style={{ color: colors.textSecondary }}>Violation of Terms</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                <span className="text-sm opacity-80" style={{ color: colors.textSecondary }}>Platform misuse</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                <span className="text-sm opacity-80" style={{ color: colors.textSecondary }}>Unlawful activities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                <span className="text-sm opacity-80" style={{ color: colors.textSecondary }}>False information</span>
              </li>
            </ul>
          </div>

          {/* Third-Party Services */}
          <div className="p-6 rounded-2xl" style={{ 
            backgroundColor: `${colors.secondary}08`,
            border: `1px solid ${colors.secondary}20`
          }}>
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} style={{ color: colors.secondary }} />
              <h3 className="text-lg font-bold" style={{ color: colors.textPrimary }}>Third-Party Services</h3>
            </div>
            <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>
              DigiCoders may integrate with third-party services like payment gateways and analytics tools. 
              We are not responsible for their content, policies, or practices.
            </p>
            <p className="text-xs opacity-60 italic mt-2" style={{ color: colors.textSecondary }}>
              Users should review third-party terms independently.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Updates & Contact */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terms Updates */}
          <div className="p-8 rounded-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
              border: `1px solid ${colors.border}20`
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Bell size={24} style={{ color: colors.primary }} />
              <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>Updates to Terms</h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>
              DigiCoders reserves the right to modify or update these Terms & Conditions at any time 
              without prior notice. Any changes become effective immediately upon publication.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: colors.white,
                color: colors.textPrimary
              }}
            >
              <span className="text-sm font-medium">Continued use = Acceptance</span>
              <ChevronRight size={16} />
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="p-8 rounded-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              color: colors.white
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail size={24} />
              <h3 className="text-2xl font-bold">Contact & Legal Info</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              These terms are governed by Indian law. Any disputes shall be subject to the 
              exclusive jurisdiction of competent courts in India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Scale size={18} className="opacity-80" />
                <span className="font-medium">Governing Law: India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="opacity-80" />
                <span className="font-medium">Contact official support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-20">
        <div className="text-center p-8 rounded-2xl border"
          style={{ 
            backgroundColor: colors.white,
            borderColor: colors.border + '20'
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 8px 32px ${colors.primary}30`
            }}
          >
            <Shield size={28} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            Your Responsibility
          </h3>
          <p className="text-lg opacity-80" style={{ color: colors.textSecondary }}>
            Please read these Terms & Conditions carefully. Your use of DigiCoders platform 
            indicates your acceptance and agreement to be bound by all terms and conditions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;