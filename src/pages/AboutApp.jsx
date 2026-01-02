import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import { 
  BookOpen, 
  Video, 
  Briefcase, 
  Zap, 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  CheckCircle2,
  Download,
  Award,
  Globe,
  Clock
} from 'lucide-react';
import aboutAppImg from '../assets/about_app_overview.png';

const AboutApp = () => {
  const { colors } = useTheme();

  const featureCards = [
    {
      title: 'Online Courses',
      desc: 'Structured courses from beginner to advanced levels with step-by-step video lessons and practical assignments.',
      icon: Video,
      items: ['Video Lessons', 'Assignments', 'Core Concepts', 'Specialization']
    },
    {
      title: 'E-Books & Resources',
      desc: 'Downloadable digital books designed for revision and deeper understanding, accessible anytime after download.',
      icon: BookOpen,
      items: ['Detailed Explanations', 'Structured Format', 'Quick Revision', 'Offline Access']
    },
    {
      title: 'Jobs & Internships',
      desc: 'Regularly updated job listings and internship opportunities to bridge the gap between learning and career.',
      icon: Briefcase,
      items: ['Regular Updates', 'Freshers Focus', 'Career Support', 'Direct Listings']
    },
    {
      title: 'Short Learning Reels',
      desc: 'Quick and engaging videos covering tips and concepts in just a few minutes, making learning time-efficient.',
      icon: Zap,
      items: ['Quick Concepts', 'Revision Tips', 'Engaging Content', 'Time Efficient']
    }
  ];

  const targetAudience = [
    { title: 'Students', desc: 'Learning new skills alongside academic studies.', icon: Award },
    { title: 'Beginners', desc: 'Starting their journey in technology and coding.', icon: Users },
    { title: 'Developers', desc: 'Upgrading or expanding existing skill sets.', icon: TrendingUp },
    { title: 'Professionals', desc: 'Preparing for career growth or role transitions.', icon: Globe }
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden pt-[80px]" style={{ backgroundColor: colors.white }}>
      
      {/* 1. Hero / Intro Section */}
      <section className="px-4 sm:px-[5%] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-10 pointer-events-none select-none" 
             style={{ backgroundColor: colors.primary, clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="flex-1">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-[3px]" style={{ color: colors.primary }}>Introducting</h4>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8" style={{ color: colors.textPrimary }}>
              About the <span style={{ color: colors.primary }}>Coders App</span>
            </h1>
            <p className="text-lg leading-[1.8] mb-10 opacity-80 max-w-2xl" style={{ color: colors.textSecondary }}>
              The Coders App by DigiCoders is a modern education platform built to help students, developers, and working professionals develop practical digital skills. We focus on structured learning, real-world use cases, and career-oriented content.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-10 py-4 rounded-xl font-bold text-white transition-all shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: colors.primary }}
              >
                Download App
              </button>
              <button 
                className="px-10 py-4 rounded-xl font-bold bg-transparent border-2 border-primary transition-all hover:bg-red-50"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative group">
               <div className="absolute -inset-4 rounded-[40px] blur-2xl opacity-20 transition-all group-hover:opacity-40" style={{ backgroundColor: colors.primary }}></div>
               <img src={aboutAppImg} alt="App Overview" className="w-full max-w-[450px] relative z-10 rounded-[35px] shadow-2xl transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is & Who is for Split Section */}
      <section className="px-4 sm:px-[5%] py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* What is it? */}
            <div className="p-10 rounded-3xl bg-white shadow-xl border border-gray-100 h-full">
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: colors.textPrimary }}>What Is the Coders App?</h2>
              <p className="text-base leading-[1.8] mb-8 opacity-80" style={{ color: colors.textSecondary }}>
                The Coders App brings multiple learning resources together into one powerful platform. Instead of using different apps or websites, learners can access courses, digital books, job updates, and short learning content in one place. Designed for flexibility, allowing users to learn at their own pace.
              </p>
              <div className="space-y-4">
                {['Structured Learning Paths', 'Industry-Ready Projects', 'Flexible Pacing', 'Latest Trend Updates'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} style={{ color: colors.primary }} />
                    <span className="font-semibold" style={{ color: colors.textPrimary }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is it for? */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8" style={{ color: colors.textPrimary }}>Who Is This App For?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {targetAudience.map((audience, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-12" style={{ backgroundColor: colors.bgAccent, color: colors.primary }}>
                       <audience.icon size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2" style={{ color: colors.textPrimary }}>{audience.title}</h4>
                    <p className="text-xs leading-relaxed opacity-60" style={{ color: colors.textSecondary }}>{audience.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Features Section */}
      <section className="px-4 sm:px-[5%] py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: colors.textPrimary }}>Core App Features</h2>
          <p className="text-sm opacity-60 uppercase tracking-[2px]" style={{ color: colors.textSecondary }}>Everything you need in one place</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-colors group-hover:text-white group-hover:bg-primary" style={{ backgroundColor: colors.divider, color: colors.primary }}>
                <card.icon size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>{card.title}</h3>
              <p className="text-sm opacity-60 mb-8 leading-relaxed flex-1" style={{ color: colors.textSecondary }}>{card.desc}</p>
              <div className="space-y-3 pt-6 border-t" style={{ borderColor: colors.divider }}>
                 {card.items.map((it, j) => (
                   <div key={j} className="flex items-center gap-2 text-[0.8rem] font-medium" style={{ color: colors.textSecondary }}>
                     <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                     {it}
                   </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Subscription Section */}
      <section className="px-4 sm:px-[5%] py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[40px] p-10 sm:p-20 text-white relative flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
           <div className="flex-1">
             <h2 className="text-4xl font-extrabold mb-6">Flexible Subscription Plans</h2>
             <p className="opacity-70 text-lg mb-10 leading-relaxed font-light">
               The Coders App offers flexible subscription plans that provide access to premium courses, e-books, and exclusive learning content. Designed to be affordable for everyone.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary"><Clock size={24} /></div>
                  <span className="font-bold text-lg">Monthly Plans</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary"><TrendingUp size={24} /></div>
                  <span className="font-bold text-lg">Yearly Plans</span>
                </div>
             </div>
             <button className="px-12 py-5 rounded-xl font-extrabold transition-all hover:-translate-y-1 bg-white text-gray-900 shadow-xl">
               View All Plans
             </button>
           </div>
           <div className="flex-1 space-y-6">
              {[
                'Access to premium & exclusive resources',
                'Cost-effective learning solutions',
                'Continuous updates & new content',
                'Priority support for subscribers'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <CheckCircle2 size={24} className="text-green-400" />
                  <span className="font-medium text-lg">{benefit}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. Dashboard & Progress Section */}
      <section className="px-4 sm:px-[5%] py-24">
        <div className="flex flex-col lg:flex-row items-center gap-20">
           <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                 <div className="absolute -inset-10 rounded-[30%] opacity-10" style={{ backgroundColor: colors.primary }}></div>
                 <div className="grid grid-cols-2 gap-4 relative z-10 p-4">
                    <div className="p-10 rounded-3xl bg-white shadow-xl space-y-4">
                       <LayoutDashboard size={40} style={{ color: colors.primary }} />
                       <h4 className="font-bold text-xl">Track Progress</h4>
                    </div>
                    <div className="p-10 rounded-3xl bg-white shadow-xl space-y-4 mt-8">
                       <TrendingUp size={40} style={{ color: colors.primary }} />
                       <h4 className="font-bold text-xl">Skill LevelUP</h4>
                    </div>
                    <div className="p-10 rounded-3xl bg-white shadow-xl space-y-4">
                       <Download size={40} style={{ color: colors.primary }} />
                       <h4 className="font-bold text-xl">Buy Content</h4>
                    </div>
                    <div className="p-10 rounded-3xl bg-white shadow-xl space-y-4 mt-8">
                       <CheckCircle2 size={40} style={{ color: colors.primary }} />
                       <h4 className="font-bold text-xl">Certificates</h4>
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold mb-8 leading-tight" style={{ color: colors.textPrimary }}>
                User Dashboard & <br /> Progress Tracking
              </h2>
              <p className="text-lg leading-relaxed mb-10 opacity-70" style={{ color: colors.textSecondary }}>
                The user dashboard helps learners manage their complete learning journey from one place. It allows users to track progress, access purchased content, and manage subscriptions easily with clear completion metrics.
              </p>
              <div className="space-y-6">
                {[
                  'Tracking course completion metrics',
                  'Viewing purchased courses and e-books',
                  'Managing subscriptions and learning history'
                ].map((f, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10 text-primary mt-1">
                      <span className="text-xs font-bold">{i+1}</span>
                    </div>
                    <p style={{ color: colors.textSecondary }}>{f}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-[5%] py-24 bg-gray-50 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl text-pretty lg:text-5xl font-extrabold mb-8" style={{ color: colors.textPrimary }}>
            Start Learning with the Coders App
          </h2>
          <p className="text-lg opacity-70 mb-12" style={{ color: colors.textSecondary }}>
            Join thousands of learners using the Coders App to build practical skills, stay updated with industry trends, and grow their careers through structured digital education.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button 
              className="px-12 py-5 rounded-2xl font-bold text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
              style={{ backgroundColor: colors.primary }}
            >
              Get App on PlayStore
            </button>
          </div>
          <p className="mt-12 text-sm font-semibold opacity-40 uppercase tracking-[3px]" style={{ color: colors.textSecondary }}>
            Realistic Content • Career Growth • Secure Learning
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutApp;
