import React from "react";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";
import {
  Shield,
  Lock,
  User,
  CreditCard,
  Cookie,
  Database,
  Eye,
  Trash2,
  Mail,
  AlertCircle,
  ChevronRight,
  CheckCircle,
  FileText,
  Settings,
  Bell,
  Smartphone,
} from "lucide-react";
import img6 from '../assets/new/img6.png'

const Privacy = () => {
  const { colors } = useTheme();

  const sections = [
    {
      icon: <User size={20} />,
      title: "Information We Collect",
      points: [
        "Personal details (name, email, phone, contact information)",
        "Account-related information for registration and login",
        "Course enrollment details and purchase history",
        "Device, browser, and basic technical information",
      ],
    },
    {
      icon: <Settings size={20} />,
      title: "How We Use Your Information",
      points: [
        "Create and manage user accounts",
        "Provide access to courses and services",
        "Process payments and transactions securely",
        "Improve platform quality and performance",
        "Send important updates and notifications",
      ],
    },
    {
      icon: <Lock size={20} />,
      title: "Protection of User Data",
      points: [
        "Technical and organizational security measures",
        "Secure systems and trusted third-party services",
        "No completely secure internet transmission",
        "Users advised to keep credentials confidential",
      ],
    },
    {
      icon: <CreditCard size={20} />,
      title: "Secure Payment Handling",
      points: [
        "Processed through secure payment gateways",
        "No storage of sensitive payment information",
        "Payment details handled by authorized providers",
        "Compliance with security standards",
      ],
    },
    {
      icon: <Cookie size={20} />,
      title: "Cookies and Analytics",
      points: [
        "Understand user behavior and analyze traffic",
        "Remember user preferences",
        "Enhance website functionality",
        "Manage or disable through browser settings",
      ],
    },
    {
      icon: <Eye size={20} />,
      title: "User Rights",
      points: [
        "Access personal information",
        "Request correction of inaccurate data",
        "Request account deletion",
        "Contact support for requests",
      ],
    },
  ];

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden"
      style={{ backgroundColor: colors.white }}
    >
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
              style={{
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}30`,
              }}
            >
              <Shield size={18} style={{ color: colors.primary }} />
              <span
                className="text-sm font-semibold"
                style={{ color: colors.primary }}
              >
                PRIVACY & SECURITY
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: colors.textPrimary }}
            >
              Your Privacy <br />
              <span style={{ color: colors.primary }}>Our Priority</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg lg:text-xl leading-relaxed mb-8 opacity-80 max-w-2xl"
              style={{ color: colors.textSecondary }}
            >
              CodersAdda respects your privacy and is committed to protecting
              your personal information. Learn how we collect, use, and
              safeguard your data with complete transparency.
            </p>

            {/* Last Updated */}
            <div
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg mb-8"
              style={{
                backgroundColor: `${colors.primary}10`,
                color: colors.primary,
              }}
            >
              <FileText size={18} />
              <div>
                <span className="text-sm font-medium">Last Updated: </span>
                <span className="text-sm font-bold">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Lock size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: colors.textPrimary }}
                  >
                    100% Secure
                  </div>
                  <div
                    className="text-sm opacity-70"
                    style={{ color: colors.textSecondary }}
                  >
                    Data Protection
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <CheckCircle size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: colors.textPrimary }}
                  >
                    No Sharing
                  </div>
                  <div
                    className="text-sm opacity-70"
                    style={{ color: colors.textSecondary }}
                  >
                    Personal Info
                  </div>
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
                    src={img6} 
                    alt="Privacy & Security" 
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))',
                      maxHeight: '500px'
                    }}
                  />
                </div>
                
                {/* Floating Elements */}
                <div
                  className="absolute top-4 left-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: colors.white,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <Shield size={24} style={{ color: colors.primary }} />
                </div>
                <div
                  className="absolute bottom-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: colors.white,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <Lock size={24} style={{ color: colors.secondary }} />
                </div>
              </div>
              
              {/* Background Blur Effects */}
              <div
                className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div
                className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: colors.secondary }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-10">
        <div
          className="p-6 sm:p-8 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
            border: `1px solid ${colors.border}20`,
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="p-3 rounded-xl mt-1"
              style={{ backgroundColor: colors.white }}
            >
              <AlertCircle size={24} style={{ color: colors.primary }} />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: colors.textPrimary }}
              >
                Introduction
              </h3>
              <p
                className="text-lg leading-relaxed opacity-80"
                style={{ color: colors.textSecondary }}
              >
                This Privacy Policy explains how CodersAdda collects, uses,
                stores, and safeguards your information when you access or use
                our website, mobile application, or services. By using the
                CodersAdda platform, you agree to the terms described in this
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group shadow p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: `1px solid ${colors.border}20`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{
                    backgroundColor: `${colors.primary}15`,
                    color: colors.primary,
                  }}
                >
                  {section.icon}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-1 flex-shrink-0"
                      style={{ color: colors.primary }}
                    />
                    <span
                      className="text-sm opacity-80"
                      style={{ color: colors.textSecondary }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
        <div className="space-y-6">
          {/* No Misuse */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: `${colors.primary}08`,
              border: `1px solid ${colors.primary}20`,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield size={20} style={{ color: colors.primary }} />
              <h3
                className="text-lg font-bold"
                style={{ color: colors.textPrimary }}
              >
                No Misuse of Personal Information
              </h3>
            </div>
            <p
              className="text-sm opacity-80"
              style={{ color: colors.textSecondary }}
            >
              CodersAdda does not sell, rent, trade, or misuse personal
              information of users. User data is used strictly for providing
              educational services and improving the platform experience.
            </p>
          </div>

          {/* Third-Party Services */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: `${colors.secondary}08`,
              border: `1px solid ${colors.secondary}20`,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Database size={20} style={{ color: colors.secondary }} />
              <h3
                className="text-lg font-bold"
                style={{ color: colors.textPrimary }}
              >
                Third-Party Services
              </h3>
            </div>
            <p
              className="text-sm opacity-80 mb-3"
              style={{ color: colors.textSecondary }}
            >
              CodersAdda may use third-party tools and services for hosting,
              analytics, communication, and payment processing. These services
              operate under their own privacy policies.
            </p>
            <p
              className="text-xs opacity-60 italic"
              style={{ color: colors.textSecondary }}
            >
              Users are encouraged to review the privacy policies of any
              third-party services they interact with.
            </p>
          </div>

          {/* Data Retention */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: `${colors.primary}08`,
              border: `1px solid ${colors.primary}20`,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Trash2 size={20} style={{ color: colors.primary }} />
              <h3
                className="text-lg font-bold"
                style={{ color: colors.textPrimary }}
              >
                Data Retention
              </h3>
            </div>
            <p
              className="text-sm opacity-80"
              style={{ color: colors.textSecondary }}
            >
              CodersAdda retains user information only for as long as necessary
              to fulfill the purposes outlined in this policy or as required by
              law. Once data is no longer required, it is securely deleted or
              anonymized.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Updates & Contact */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Policy Updates */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
              border: `1px solid ${colors.border}20`,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Bell size={24} style={{ color: colors.primary }} />
              <h3
                className="text-2xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                Policy Updates
              </h3>
            </div>
            <p
              className="text-lg leading-relaxed mb-6 opacity-80"
              style={{ color: colors.textSecondary }}
            >
              CodersAdda reserves the right to update or modify this Privacy
              Policy at any time. Any changes will be effective immediately upon
              being posted on the website or application.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{
                backgroundColor: colors.white,
                color: colors.textPrimary,
              }}
            >
              <span className="text-sm font-medium">
                Continued use indicates acceptance
              </span>
              <ChevronRight size={16} />
            </div>
          </div>

          {/* Contact Information */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              color: colors.white,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail size={24} />
              <h3 className="text-2xl font-bold">Contact Information</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, you may contact CodersAdda through the official
              support channels.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="opacity-80" />
                <span className="font-medium">abhay@CodersAdda.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone size={18} className="opacity-80" />
                <span className="font-medium">Official support page</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-20">
        <div
          className="text-center p-8 rounded-2xl border"
          style={{
            backgroundColor: colors.white,
            borderColor: colors.border + "20",
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 8px 32px ${colors.primary}30`,
            }}
          >
            <Shield size={28} className="text-white" />
          </div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Your Privacy Matters
          </h3>
          <p
            className="text-lg opacity-80"
            style={{ color: colors.textSecondary }}
          >
            This Privacy Policy is intended to provide transparency about how
            CodersAdda handles user information and is designed to protect the
            rights and privacy of all users.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
