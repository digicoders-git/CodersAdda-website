import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import { 
  AlertTriangle, FileText, Target, BookOpen, ExternalLink,
  Shield, AlertCircle, Scale, Mail, ChevronRight, CheckCircle,
  XCircle, TrendingUp, Briefcase, Users, Clock, Globe
} from 'lucide-react';
import img9 from '../assets/new/img9.png'

const Disclaimer = () => {
  const { colors } = useTheme();

  const disclaimerPoints = [
    {
      icon: <Target size={20} />,
      title: 'No Job Guarantee',
      description: 'No guarantees of job placements or earnings',
      color: '#EF4444'
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Educational Purpose Only',
      description: 'Content for learning and skill development',
      color: colors.primary
    },
    {
      icon: <ExternalLink size={20} />,
      title: 'External Links',
      description: 'Third-party content not controlled by us',
      color: colors.secondary
    },
    {
      icon: <Shield size={20} />,
      title: 'Limitation of Liability',
      description: 'Use at your own risk',
      color: '#F59E0B'
    }
  ];

  const noGuaranteeFactors = [
    'Individual skills and learning efforts',
    'Prior knowledge and experience',
    'Consistency and practice',
    'Market demand and industry conditions',
    'External factors beyond our control'
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
              <AlertTriangle size={18} style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                DISCLAIMER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: colors.textPrimary }}>
              Important <span style={{ color: colors.primary }}>Disclaimer</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-80 max-w-2xl"
              style={{ color: colors.textSecondary }}>
              Clear understanding of limitations, responsibilities, and scope of DigiCoders services.
              Please read carefully before using our platform.
            </p>

            {/* Important Notice */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg mb-8"
              style={{ 
                backgroundColor: `${colors.primary}10`,
                color: colors.primary,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <AlertCircle size={18} />
              <div>
                <span className="text-sm font-bold">Critical: </span>
                <span className="text-sm">Understanding these terms is essential</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <FileText size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>Legal Notice</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Binding terms</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Scale size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>Limitations</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Clear boundaries</div>
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
                    src={img9} 
                    alt="Disclaimer Notice" 
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
                  <AlertTriangle size={24} style={{ color: colors.primary }} />
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

      {/* General Disclaimer Card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
        <div className="p-6 sm:p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: `${colors.primary}08`,
            borderColor: colors.primary,
            borderStyle: 'dashed'
          }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl mt-1" style={{ backgroundColor: colors.white }}>
              <AlertTriangle size={24} style={{ color: colors.primary }} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.textPrimary }}>
                General Disclaimer
              </h3>
              <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.textSecondary }}>
                DigiCoders provides educational content strictly for learning and skill development purposes only. 
                We do not guarantee any specific results, outcomes, job placements, earnings, or career success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disclaimerPoints.map((point, index) => (
            <div 
              key={index}
              className="group p-6 shadow hover:shadow-2xl rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${colors.border}20`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                style={{ 
                  backgroundColor: `${point.color}15`,
                  color: point.color
                }}
              >
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                {point.title}
              </h3>
              <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* No Guarantee Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
        <div className="p-8 rounded-2xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
            border: `1px solid ${colors.border}20`
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <XCircle size={24} style={{ color: '#EF4444' }} />
            <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>No Guarantee of Job or Earnings</h3>
          </div>
          <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: colors.textSecondary }}>
            Job opportunities, earnings, and results depend on multiple factors:
          </p>
          
          <div className="space-y-4">
            {noGuaranteeFactors.map((factor, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: colors.white }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: colors.primary }}></div>
                <span className="font-medium" style={{ color: colors.textSecondary }}>{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
        <div className="space-y-6">
          {/* Educational Purpose */}
          <div className="p-6 rounded-2xl" style={{ 
            backgroundColor: `${colors.primary}08`,
            border: `1px solid ${colors.primary}20`
          }}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={20} style={{ color: colors.primary }} />
              <h3 className="text-lg font-bold" style={{ color: colors.textPrimary }}>Educational Purpose Only</h3>
            </div>
            <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>
              Content is for educational and informational purposes only. Not professional, legal, 
              financial, or career advice. Apply your own judgment and seek professional guidance 
              where necessary.
            </p>
          </div>

          {/* Content Accuracy */}
          <div className="p-6 rounded-2xl" style={{ 
            backgroundColor: `${colors.secondary}08`,
            border: `1px solid ${colors.secondary}20`
          }}>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={20} style={{ color: colors.secondary }} />
              <h3 className="text-lg font-bold" style={{ color: colors.textPrimary }}>Content Accuracy</h3>
            </div>
            <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>
              While we make reasonable efforts to ensure accuracy, we do not guarantee completeness, 
              reliability, or accuracy. Content may be updated, modified, or removed at any time 
              without prior notice.
            </p>
          </div>
        </div>
      </section>

      {/* Acceptance & Legal */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Acceptance */}
          <div className="p-8 rounded-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
              border: `1px solid ${colors.border}20`
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle size={24} style={{ color: colors.primary }} />
              <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>Acceptance of Disclaimer</h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>
              By accessing or using DigiCoders platform, you acknowledge that you have read, 
              understood, and agreed to this Disclaimer. If you disagree, discontinue use immediately.
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

          {/* Legal & Contact */}
          <div className="p-8 rounded-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              color: colors.white
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Scale size={24} />
              <h3 className="text-2xl font-bold">Legal & Contact</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              DigiCoders reserves the right to modify this Disclaimer anytime. Changes become 
              effective immediately upon publication.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="opacity-80" />
                <span className="font-medium">Contact official support</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="opacity-80" />
                <span className="font-medium">Immediate effect of changes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Transparency Note */}
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
            Transparency & Protection
          </h3>
          <p className="text-lg opacity-80" style={{ color: colors.textSecondary }}>
            This Disclaimer is intended to ensure transparency and protect both DigiCoders 
            and its users by clearly defining the scope and limitations of services provided.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;