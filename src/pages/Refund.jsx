import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import { 
  DollarSign, XCircle, Clock, AlertTriangle, Headphones, 
  Scale, FileText, Shield, CheckCircle, Mail, ChevronRight,
  Calendar, BookOpen, CreditCard, Smartphone, ArrowRight
} from 'lucide-react';
import img8 from '../assets/new/img8.png'

const Refund = () => {
  const { colors } = useTheme();

  const nonRefundableItems = [
    {
      icon: <BookOpen size={20} />,
      title: 'Online Courses',
      description: 'All course purchases',
      color: colors.primary
    },
    {
      icon: <Calendar size={20} />,
      title: 'Subscription Plans',
      description: 'Monthly & yearly subscriptions',
      color: colors.secondary
    },
    {
      icon: <FileText size={20} />,
      title: 'Digital Products',
      description: 'E-books & learning resources',
      color: '#10B981'
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Paid Services',
      description: 'All other paid services',
      color: '#F59E0B'
    }
  ];

  const nonRefundableCases = [
    'Change of mind after purchase',
    'Accidental or incorrect purchase',
    'Dissatisfaction with content',
    'Technical issues on user side',
    'Non-usage or incomplete usage'
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.white }}>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <DollarSign size={18} style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                REFUND POLICY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: colors.textPrimary }}>
              Refund & <span style={{ color: colors.primary }}>Cancellation</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-80 max-w-2xl"
              style={{ color: colors.textSecondary }}>
              Clear and transparent terms regarding refunds, returns, and cancellations for 
              all DigiCoders products and services.
            </p>

            {/* Important Notice */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg mb-8"
              style={{ 
                backgroundColor: `${colors.primary}10`,
                color: colors.primary,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <AlertTriangle size={18} />
              <div>
                <span className="text-sm font-bold">Important: </span>
                <span className="text-sm">Read before purchase</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <XCircle size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>No Refunds</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>All transactions final</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Shield size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.textPrimary }}>Transparent</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Clear terms</div>
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
                    src={img8} 
                    alt="Refund Policy" 
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
                  <DollarSign size={24} style={{ color: colors.primary }} />
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.white,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                >
                  <XCircle size={24} style={{ color: '#EF4444' }} />
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

      {/* Important Notice Card */}
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
                Strict No Refunds Policy
              </h3>
              <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.textSecondary }}>
                DigiCoders follows a strict no refunds, no returns, and no cancellations policy 
                for all products and services. Once payment is completed, the transaction is 
                considered final and non-refundable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Refundable Items */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            What's <span style={{ color: colors.primary }}>Non-Refundable</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            This policy applies to all our offerings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nonRefundableItems.map((item, index) => (
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
                  backgroundColor: `${item.color}15`,
                  color: item.color
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                {item.title}
              </h3>
              <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Refundable Cases */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
        <div className="p-8 rounded-2xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
            border: `1px solid ${colors.border}20`
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <XCircle size={24} style={{ color: '#EF4444' }} />
            <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>Non-Refundable Cases</h3>
          </div>
          <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: colors.textSecondary }}>
            Refunds will not be provided under any circumstances, including:
          </p>
          
          <div className="space-y-4">
            {nonRefundableCases.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: colors.white }}>
                <XCircle size={18} className="mt-1 flex-shrink-0" style={{ color: '#EF4444' }} />
                <span className="font-medium" style={{ color: colors.textSecondary }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Rules */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
        <div className="p-8 rounded-2xl border"
          style={{ 
            backgroundColor: colors.white,
            borderColor: colors.border + '20'
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock size={24} style={{ color: colors.primary }} />
            <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>Subscription Rules</h3>
          </div>
          <p className="text-lg leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>
            All subscriptions are time-based access services. Once activated, no refunds or 
            cancellations are eligible, regardless of usage duration or early termination.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl" style={{ backgroundColor: `${colors.primary}08` }}>
              <div className="text-xl font-bold mb-2" style={{ color: colors.primary }}>No Prorated Refunds</div>
              <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>Unused time is non-refundable</p>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: `${colors.primary}08` }}>
              <div className="text-xl font-bold mb-2" style={{ color: colors.primary }}>Final Transaction</div>
              <p className="text-sm opacity-80" style={{ color: colors.textSecondary }}>All purchases are final</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Legal Info */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Support */}
          <div className="p-8 rounded-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
              border: `1px solid ${colors.border}20`
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Headphones size={24} style={{ color: colors.primary }} />
              <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>Customer Support</h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>
              While refunds aren't offered, our support team is here to help with:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle size={18} style={{ color: colors.primary }} />
                <span className="font-medium" style={{ color: colors.textSecondary }}>Course content clarification</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={18} style={{ color: colors.primary }} />
                <span className="font-medium" style={{ color: colors.textSecondary }}>Technical assistance</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={18} style={{ color: colors.primary }} />
                <span className="font-medium" style={{ color: colors.textSecondary }}>Platform guidance</span>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div className="p-8 rounded-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              color: colors.white
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Scale size={24} />
              <h3 className="text-2xl font-bold">Legal Information</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Any disputes shall be subject to the exclusive jurisdiction of courts in 
              Lucknow, Uttar Pradesh, India.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield size={18} className="opacity-80" />
                <span className="font-medium">Binding agreement</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="opacity-80" />
                <span className="font-medium">Contact for queries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Clear Statement */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-20">
        <div className="text-center p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: colors.white,
            borderColor: colors.primary,
            borderStyle: 'solid'
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 8px 32px ${colors.primary}30`
            }}
          >
            <CheckCircle size={28} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            Clear & Transparent Terms
          </h3>
          <p className="text-lg opacity-80 mb-6" style={{ color: colors.textSecondary }}>
            ✔️ No hidden clauses &nbsp; • &nbsp; ✔️ Legally strong &nbsp; • &nbsp; ✔️ Production-ready
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100">
            <span className="text-sm font-bold" style={{ color: colors.textPrimary }}>Final Confirmation:</span>
            <span className="text-sm" style={{ color: colors.textSecondary }}>All transactions are final</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refund;