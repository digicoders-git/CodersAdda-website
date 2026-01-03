import React, { useRef, useMemo, memo, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

// Import assets
import aboutImg from '../assets/about_us_man.png';
import blogCoding from '../assets/blog_coding.png';
import blogUiux from '../assets/blog_uiux.png';
import blogWebdev from '../assets/blog_webdev.png';
import php from '../assets/php.png';
import wordpress from '../assets/worldpress.png';
import python from '../assets/python.png';
import javascript from '../assets/javascript.png';
import hero from '../assets/12.png';
import java from '../assets/java.png';
import dotnet from '../assets/dotnet.png';
import mern from '../assets/mern.png';
import flutter from '../assets/flutter.png';
import unity from '../assets/unity.png';
import unreal from '../assets/unreal.png';
import aspnet from '../assets/aspnet.png';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Play, Star, Clock, Users, TrendingUp, Award, BookOpen, GraduationCap, Sparkles, ArrowRight, Download } from 'lucide-react';

const yourCourses = [
  {
    title: 'PHP Development',
    category: 'Web Development',
    author: 'Er. Gopal sir',
    authorImg: hero,
    icon: php,
    iconColor: '#777BB4',
    progress: 68,
    stats: '19/26',
    rating: 4.8,
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    title: 'Wordpress Mastery',
    category: 'CMS Development',
    author: 'Hritik sir',
    authorImg: hero,
    icon: wordpress,
    iconColor: '#21759B',
    progress: 68,
    stats: '19/26',
    rating: 4.9,
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    title: 'Python Programming',
    category: 'Backend Development',
    author: 'Abhay',
    authorImg: hero,
    icon: python,
    iconColor: '#306998',
    progress: 68,
    stats: '19/26',
    rating: 4.7,
    duration: '12 weeks',
    level: 'Beginner'
  },
  {
    title: 'JavaScript ES6+',
    category: 'Frontend Development',
    author: 'Irshad',
    authorImg: hero,
    icon: javascript,
    iconColor: '#F7DF1E',
    progress: 68,
    stats: '19/26',
    rating: 4.8,
    duration: '10 weeks',
    level: 'Intermediate'
  },
  {
    title: 'Java Programming',
    category: 'Software Development',
    author: 'Ankit',
    authorImg: hero,
    icon: java,
    iconColor: '#007396',
    progress: 68,
    stats: '19/26',
    rating: 4.6,
    duration: '14 weeks',
    level: 'Advanced'
  },
  {
    title: '.NET Framework',
    category: 'Full Stack',
    author: 'Rajesh',
    authorImg: hero,
    icon: dotnet,
    iconColor: '#512BD4',
    progress: 68,
    stats: '19/26',
    rating: 4.5,
    duration: '12 weeks',
    level: 'Intermediate'
  }
];

const topCategories = [
  { title: 'Python Language', desc: 'Python is an interpreted high-level general-purpose programming language.', icon: python, iconColor: '#306998', courses: 42, students: '10K+' },
  { title: 'Php Language', desc: 'PHP is a general-purpose scripting language geared towards web development.', icon: php, iconColor: '#777BB4', courses: 38, students: '8.5K+' },
  { title: 'Wordpress', desc: 'WordPress is a free and open-source content management system written in PHP.', icon: wordpress, iconColor: '#21759B', courses: 28, students: '6.2K+' },
  { title: 'Java', desc: 'Java is a high-level, class-based, object-oriented programming language.', icon: java, iconColor: '#96bf48', courses: 35, students: '9.3K+' },
  { title: 'MERN Stack', desc: 'MERN Stack is a full-stack web development framework.', icon: mern, iconColor: '#61DAFB', courses: 24, students: '5.8K+' },
  { title: 'Dot Net', desc: 'Dot Net is a full-stack web development framework.', icon: dotnet, iconColor: '#512BD4', courses: 31, students: '7.1K+' },
];

const popularCourses = [
  { title: 'Flutter Development for Beginners', desc: 'Flutter is an open-source UI software development kit created by Google.', icon: flutter, iconColor: '#02569B', duration: '10 weeks', rating: 4.8, price: '$99' },
  { title: 'Unity Game Development For Beginners', desc: 'Unity is a cross-platform game engine developed by Unity Technologies.', icon: unity, iconColor: '#000000', duration: '12 weeks', rating: 4.7, price: '$129' },
  { title: 'Unreal Engine Game Development Course', desc: 'Unreal Engine is a game engine developed by Epic Games, first showcased in 1998.', icon: unreal, iconColor: '#0E1128', duration: '16 weeks', rating: 4.9, price: '$149' },
  { title: 'ASP.NET Web development Course', desc: 'ASP.NET is an open-source, server-side web-application framework designed for web dev.', icon: aspnet, iconColor: '#512BD4', duration: '14 weeks', rating: 4.6, price: '$119' },
];

const testimonials = [
  { name: 'Mehwish Khan', role: 'Full Stack Developer', text: 'The courses transformed my career. The hands-on projects gave me real-world experience that employers value.', img: 'https://i.pravatar.cc/150?u=mehwish', rating: 5 },
  { name: 'Elizabeth Jeff', role: 'Senior Developer', text: 'Best learning platform for developers. The mentorship program helped me transition to a senior role.', img: 'https://i.pravatar.cc/150?u=elizabeth', rating: 5, active: true },
  { name: 'Emily Thomas', role: 'UI/UX Designer', text: 'The design courses are exceptional. I learned industry-standard tools and processes that got me hired.', img: 'https://i.pravatar.cc/150?u=emily', rating: 5 },
  { name: 'Rajesh Kumar', role: 'Data Scientist', text: 'Python and ML courses are top-notch. The curriculum is perfectly structured for beginners to advanced.', img: 'https://i.pravatar.cc/150?u=rajesh', rating: 5 },
];

const blogs = [
  { title: 'What are 7 Essential Coding Languages for 2024?', desc: 'A comprehensive guide to the most in-demand programming languages and why you should learn them.', img: blogCoding, date: 'Mar 15, 2024', readTime: '5 min' },
  { title: 'Mastering UI/UX Design Process: Complete Guide', desc: "Learn the complete UI/UX design process from research to prototyping and user testing.", img: blogUiux, date: 'Mar 10, 2024', readTime: '8 min' },
  { title: 'Complete Web Development Roadmap 2024', desc: 'Step-by-step guide to becoming a full-stack developer with the latest technologies and frameworks.', img: blogWebdev, date: 'Mar 5, 2024', readTime: '10 min' },
];

const StatsCard = memo(({ stat, colors }) => (
  <div 
    className="group relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer will-change-transform"
    style={{
      background: 'rgba(255, 255, 255, 0.9)',
      border: `1px solid ${colors.border}20`,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
    }}
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ backgroundColor: `${colors.primary}10` }}
      >
        <div style={{ color: colors.primary }}>
          {stat.icon}
        </div>
      </div>
      <div>
        <h3 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: colors.primary }}>
          {stat.value}
        </h3>
        <p className="text-sm font-medium opacity-80" style={{ color: colors.textSecondary }}>
          {stat.label}
        </p>
      </div>
    </div>
  </div>
));

const CourseCard = memo(({ course, colors }) => (
  <div className="group relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl will-change-transform"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${colors.border}20`,
    }}
  >
    <div className="p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          style={{ backgroundColor: `${colors.primary}10` }}
        >
          <img src={course.icon} alt={course.title} className="w-10 h-10 object-contain" loading="lazy" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold"
          style={{ backgroundColor: `${course.level === 'Beginner' ? '#10B981' : course.level === 'Intermediate' ? '#F59E0B' : '#EF4444'}20`, color: course.level === 'Beginner' ? '#10B981' : course.level === 'Intermediate' ? '#F59E0B' : '#EF4444' }}
        >
          {course.level}
        </div>
      </div>
      
      <div className="mb-6">
        <span className="text-sm font-semibold tracking-wider uppercase opacity-60 block mb-2" style={{ color: colors.textSecondary }}>
          {course.category}
        </span>
        <h3 className="text-xl font-bold mb-3" style={{ color: colors.textPrimary }}>{course.title}</h3>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(course.rating) ? colors.primary : 'none'} style={{ color: colors.primary }} />
            ))}
            <span className="text-sm font-semibold ml-1" style={{ color: colors.textPrimary }}>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-sm opacity-60" style={{ color: colors.textSecondary }}>
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold" style={{ color: colors.textPrimary }}>Progress</span>
          <span className="text-sm font-bold" style={{ color: colors.primary }}>{course.progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full transition-all duration-1000 rounded-full" style={{ width: `${course.progress}%`, backgroundColor: colors.primary }}></div>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: `${colors.border}30` }}>
        <div className="flex items-center gap-3">
          <img src={course.authorImg} alt={course.author} className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" loading="lazy" />
          <div>
            <span className="text-xs opacity-60 block" style={{ color: colors.textSecondary }}>Instructor</span>
            <span className="text-sm font-semibold" style={{ color: colors.textPrimary }}>{course.author}</span>
          </div>
        </div>
        <button className="p-2 rounded-full transition-all hover:scale-110"
          style={{ backgroundColor: `${colors.primary}10` }}
        >
          <Play size={16} style={{ color: colors.primary }} />
        </button>
      </div>
    </div>
  </div>
));

const CategoryCard = memo(({ cat, colors }) => (
  <div 
    className="group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer will-change-transform"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${colors.border}20`,
    }}
  >
    <div className="flex items-start justify-between mb-6">
      <div className="p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ backgroundColor: `${colors.primary}10` }}
      >
        <img src={cat.icon} alt={cat.title} className="w-12 h-12 object-contain" loading="lazy" />
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold" style={{ color: colors.primary }}>{cat.courses}</div>
        <div className="text-sm opacity-60" style={{ color: colors.textSecondary }}>Courses</div>
      </div>
    </div>
    
    <h3 className="text-xl font-bold mb-3" style={{ color: colors.textPrimary }}>{cat.title}</h3>
    <p className="text-sm leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>{cat.desc}</p>
    
    <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: `${colors.border}30` }}>
      <div className="flex items-center gap-2 text-sm">
        <Users size={16} className="opacity-60" />
        <span className="font-semibold" style={{ color: colors.textPrimary }}>{cat.students}</span>
        <span className="opacity-60" style={{ color: colors.textSecondary }}>students</span>
      </div>
    </div>
  </div>
));

const PopularCourseCard = memo(({ course, colors }) => (
  <div 
    className="group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer will-change-transform"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${colors.border}20`,
    }}
  >
    <div className="flex items-start gap-6">
      <div className="p-5 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{ backgroundColor: `${colors.primary}10` }}
      >
        <img src={course.icon} alt={course.title} className="w-16 h-16 object-contain" loading="lazy" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>{course.title}</h3>
          <div className="text-lg font-bold" style={{ color: colors.primary }}>{course.price}</div>
        </div>
        <p className="text-sm leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>{course.desc}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star size={16} fill={colors.primary} style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.textPrimary }}>{course.rating}/5</span>
            </div>
            <div className="flex items-center gap-1 text-sm opacity-70" style={{ color: colors.textSecondary }}>
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const BlogCard = memo(({ blog, colors }) => (
  <div 
    className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl will-change-transform"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${colors.border}20`,
    }}
  >
    <div className="overflow-hidden h-64">
      <img 
        src={blog.img} 
        alt={blog.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm opacity-60 mb-4" style={{ color: colors.textSecondary }}>
        <span>{blog.date}</span>
        <span>•</span>
        <span>{blog.readTime} read</span>
      </div>
      <h3 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>{blog.title}</h3>
      <p className="text-sm leading-relaxed mb-6 opacity-80" style={{ color: colors.textSecondary }}>{blog.desc}</p>
    </div>
  </div>
));

const Home = () => {
  const { colors } = useTheme();
  const swiperRef = useRef(null);

  const stats = useMemo(() => [
    { value: '50K+', label: 'Active Learners', icon: <Users size={24} /> },
    { value: '500+', label: 'Expert Mentors', icon: <GraduationCap size={24} /> },
    { value: '95%', label: 'Success Rate', icon: <TrendingUp size={24} /> },
    { value: '4.9', label: 'Average Rating', icon: <Star size={24} /> },
  ], []);

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-white to-blue-50/30"></div>
      </div>
      {/* Hero Section */}
      <div className="relative z-10 mb-10">
        <Header />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-25 mb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <StatsCard key={idx} stat={stat} colors={colors} />
          ))}
        </div>
      </div>

      {/* Our Courses Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-indigo-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-50/50 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ 
                backgroundColor: `${colors.primary}10`,
                border: `1px solid ${colors.primary}20`
              }}
            >
              <Sparkles size={14} className="text-yellow-500" />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                FEATURED COURSES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: colors.textPrimary }}>
              Master In-Demand <br />
              <span style={{ color: colors.primary }}>Tech Skills</span>
            </h2>
            <p className="text-lg opacity-80 max-w-2xl" style={{ color: colors.textSecondary }}>
              Industry-relevant courses designed by tech leaders to help you advance your career
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 lg:mt-0">
            <button 
              className="p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg"
              style={{ backgroundColor: `${colors.primary}10` }}
              onClick={handlePrev}
            >
              <ChevronRight size={24} className="rotate-180" style={{ color: colors.primary }} />
            </button>
            <button 
              className="p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg"
              style={{ backgroundColor: `${colors.primary}10` }}
              onClick={handleNext}
            >
              <ChevronRight size={24} style={{ color: colors.primary }} />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={false}
          breakpoints={{ 
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="relative z-10 pb-16"
        >
          {yourCourses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} colors={colors} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Top Categories Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/50 via-emerald-50/50 to-teal-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-orange-50/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            Explore <span style={{ color: colors.primary }}>Categories</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Browse through our comprehensive collection of tech categories
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCategories.map((cat, idx) => (
            <CategoryCard key={idx} cat={cat} colors={colors} />
          ))}
        </div>
{/* 
        <div className="relative z-10 text-center mt-16">
          <NavLink to="/courses"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ 
              backgroundColor: colors.primary,
              color: colors.white,
            }}
          >
            <BookOpen size={20} />
            Browse All Categories
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
          </NavLink>
        </div> */}
      </section>

      {/* About Us Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/50 via-amber-50/50 to-yellow-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-pink-50/50 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src={aboutImg} 
                alt="About CodersAdda" 
                className="w-full rounded-[3rem] lg:rounded-[4rem] shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl p-4 shadow-2xl z-20"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}20`,
                }}
              >
                <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-2"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Award size={28} style={{ color: colors.primary }} />
                  <span className="text-xs font-bold" style={{ color: colors.textPrimary }}>Award Winning</span>
                  <span className="text-[10px] opacity-70" style={{ color: colors.textSecondary }}>Platform</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: `${colors.primary}10`,
                border: `1px solid ${colors.primary}20`
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }}></span>
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                ABOUT CODERSADDA
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8" style={{ color: colors.textPrimary }}>
              Transforming <span style={{ color: colors.primary }}>Learning</span> Experience
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.textSecondary }}>
                At CodersAdda, we believe in empowering individuals through cutting-edge technology education. Our platform bridges the gap between theoretical knowledge and practical implementation.
              </p>
              <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.textSecondary }}>
                With industry-expert instructors, hands-on projects, and personalized mentorship, we've helped thousands of learners transform their careers and achieve their professional goals.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <GraduationCap size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.primary }}>500+</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Expert Mentors</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <BookOpen size={20} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: colors.primary }}>1000+</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Courses</div>
                </div>
              </div>
            </div>
            
            <NavLink to="/about-app"
              className="group inline-flex items-center gap-3 text-lg font-semibold"
              style={{ color: colors.primary }}
            >
              Learn More About Us
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50/50 via-rose-50/50 to-red-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-orange-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-50/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            Most <span style={{ color: colors.primary }}>Popular</span> Courses
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Join thousands of learners in our top-rated courses
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {popularCourses.map((course, idx) => (
            <PopularCourseCard key={idx} course={course} colors={colors} />
          ))}
        </div>

        <div className="relative z-10 text-center">
          <NavLink to="/download"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ 
              backgroundColor: colors.primary,
              color: colors.white,
            }}
          >
            Download App & Start Learning
            <Download size={20} />
            {/* <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" /> */}
          </NavLink>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-blue-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-pink-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cyan-50/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            What Our <span style={{ color: colors.primary }}>Students</span> Say
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Join thousands of satisfied learners who transformed their careers
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.textPrimary }}>Success Stories</h3>
              <p className="text-lg leading-relaxed opacity-80 mb-8" style={{ color: colors.textSecondary }}>
                Our learners have gone on to work at top tech companies, start their own businesses, and achieve their dream careers.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="p-4 rounded-2xl" style={{ backgroundColor: `${colors.primary}10` }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>95%</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Job Placement</div>
                </div>
                <div className="p-4 rounded-2xl" style={{ backgroundColor: `${colors.primary}10` }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>4.9/5</div>
                  <div className="text-sm opacity-70" style={{ color: colors.textSecondary }}>Student Rating</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              className="pb-12"
            >
              {testimonials.map((test, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-8 rounded-3xl"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${colors.border}20`,
                    }}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <img src={test.img} alt={test.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover" />
                      <div>
                        <h4 className="font-bold text-xl mb-1" style={{ color: colors.textPrimary }}>{test.name}</h4>
                        <p className="text-sm opacity-70" style={{ color: colors.textSecondary }}>{test.role}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill={colors.primary} style={{ color: colors.primary }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed italic" style={{ color: colors.textSecondary }}>
                      "{test.text}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-50/50 via-sky-50/50 to-blue-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-violet-50/50 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              Latest <span style={{ color: colors.primary }}>Insights</span>
            </h2>
            <p className="text-lg opacity-80 max-w-2xl" style={{ color: colors.textSecondary }}>
              Stay updated with the latest trends, tips, and tutorials in tech
            </p>
          </div>
          <NavLink to="/blog"
            className="inline-flex items-center gap-2 text-lg font-semibold mt-6 lg:mt-0"
            style={{ color: colors.primary }}
          >
            View All Articles <ArrowRight size={20} />
          </NavLink>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} colors={colors} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-50/50 via-fuchsia-50/50 to-pink-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyan-50/50 to-transparent"></div>
        </div>
        <div className="relative z-10 rounded-[3rem] p-8 lg:p-16 text-center relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Start Your Learning Journey Today
            </h2>
            <p className="text-lg lg:text-xl opacity-90 mb-10 max-w-2xl mx-auto text-white">
              Join 50,000+ developers who have transformed their careers with CodersAdda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/signup"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.primary,
                }}
              >
                Start Free Trial
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </NavLink>
              <NavLink to="/download"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Download size={20} />
                Download App
              </NavLink>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: 'white' }}></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full" style={{ backgroundColor: 'white' }}></div>
          </div>
        </div>
      </section> */}
      

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default memo(Home);