import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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

const yourCourses = [
  {
    title: 'PHP',
    category: 'BEGINNERS',
    author: 'Er. Gopal sir',
    authorImg: hero,
    icon: php,
    iconColor: '#777BB4',
    progress: 68,
    stats: '19/26'
  },
  {
    title: 'Wordpress',
    category: 'BEGINNERS',
    author: 'Hritik sir',
    authorImg: hero,
    icon: wordpress,
    iconColor: '#21759B',
    progress: 68,
    stats: '19/26'
  },
  {
    title: 'Python',
    category: 'BEGINNERS',
    author: 'Abhay',
    authorImg: hero,
    icon: python,
    iconColor: '#306998',
    progress: 68,
    stats: '19/26'
  },
  {
    title: 'JavaScript',
    category: 'BEGINNERS',
    author: 'Irshad',
    authorImg: hero,
    icon: javascript,
    iconColor: '#F7DF1E',
    progress: 68,
    stats: '19/26'
  }
];

const topCategories = [
  { title: 'Python Language', desc: 'Python is an interpreted high-level general-purpose programming language.', icon: python, iconColor: '#306998' },
  { title: 'Php Language', desc: 'PHP is a general-purpose scripting language geared towards web development.', icon: php, iconColor: '#777BB4' },
  { title: 'Wordpress', desc: 'WordPress is a free and open-source content management system written in PHP.', icon: wordpress, iconColor: '#21759B' },
  { title: 'Java', desc: 'Java is a high-level, class-based, object-oriented programming language.', icon: java, iconColor: '#96bf48' },
  { title: 'MERN Stack', desc: 'MERN Stack is a full-stack web development framework.', icon: mern, iconColor: '#000000' },
  { title: 'Dot Net', desc: 'Dot Net is a full-stack web development framework.', icon: dotnet, iconColor: '#F24E1E' },
];

const popularCourses = [
  { title: 'Flutter Development for Beginners', desc: 'Flutter is an open-source UI software development kit created by Google.', icon: flutter, iconColor: '#02569B' },
  { title: 'Unity Game Development For Beginners', desc: 'Unity is a cross-platform game engine developed by Unity Technologies.', icon: unity, iconColor: '#000000' },
  { title: 'Unreal Engine Game Development Course', desc: 'Unreal Engine is a game engine developed by Epic Games, first showcased in 1998.', icon: unreal, iconColor: '#0E1128' },
  { title: 'ASP.NET Web development Course', desc: 'ASP.NET is an open-source, server-side web-application framework designed for web dev.', icon: aspnet, iconColor: '#512BD4' },
];

const testimonials = [
  { name: 'Mehwish', role: 'Student', text: 'Compliment interested discretion estimating on stimulated apartments oh.', img: 'https://i.pravatar.cc/150?u=mehwish' },
  { name: 'Elizabeth Jeff', role: 'Developer', text: 'Dear so sing when in find read of call. As distrusts behaviour abilities defective is.', img: 'https://i.pravatar.cc/150?u=elizabeth', active: true },
  { name: 'Emily Thomas', role: 'Designer', text: 'Never at water me might. On formed merits hunted unable merely by mr whence or.', img: 'https://i.pravatar.cc/150?u=emily' },
];

const blogs = [
  { title: 'What are 7 coding languages?', desc: 'A programming language is a formal language comprising a set of strings that produce various...', img: blogCoding },
  { title: 'What is UI and UX Process?', desc: "What's the difference between UI and UX? At the most basic level, UI is made up of all the elements...", img: blogUiux },
  { title: 'What is Web development?', desc: 'Web development is the work involved in developing a website for the main non-design aspects...', img: blogWebdev },
];

const Home = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full min-h-screen overflow-x-hidden pt-[80px]" style={{ backgroundColor: colors.white }}>
      {/* Hero Section */}
      <Header />

      {/* Your Courses Section */}
      <section className="px-[5%] py-20">
        <h2 className="text-3xl font-bold mb-10" style={{ color: colors.textPrimary }}>
          Our Courses
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
          className="pb-16"
        >
          {yourCourses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 rounded-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: colors.white, boxShadow: colors.cardShadow }}>
                <div className="flex gap-4 mb-6 items-start">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center p-2" style={{ backgroundColor: colors.divider }}>
                    <img src={course.icon} alt={course.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[0.7rem] font-bold tracking-widest uppercase opacity-40 block" style={{ color: colors.textSecondary }}>{course.category}</span>
                    <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>{course.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-sm opacity-60" style={{ color: colors.textSecondary }}>by</span>
                  <div className="flex items-center gap-2">
                    <img src={course.authorImg} alt={course.author} className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm" />
                    <span className="text-sm font-semibold" style={{ color: colors.textPrimary }}>{course.author}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-6 border-t" style={{ borderColor: colors.divider }}>
                  <div className="flex justify-between items-center text-xs font-bold" style={{ color: colors.textPrimary }}>
                    <span>{course.progress}%</span>
                    <div className="flex items-center gap-2"><span>{course.stats}</span><span className="text-lg">🇺🇸</span></div>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full transition-all duration-1000" style={{ width: `${course.progress}%`, backgroundColor: '#22C55E' }}></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Top Categories Section */}
      <section className="px-[5%] py-20 relative">
        {/* <div className="absolute top-10 left-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100 z-10 w-[60px] h-[60px] flex items-center justify-center">
            <span className="text-2xl">📢</span>
        </div> */}
        <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: colors.primary }}>
          Top Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl text-center border border-gray-50 flex flex-col items-center group transition-all hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl mb-6 overflow-hidden flex items-center justify-center p-4 transition-transform group-hover:scale-110" style={{ backgroundColor: colors.divider }}>
                <img src={cat.icon} alt={cat.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>{cat.title}</h3>
              <p className="text-sm leading-relaxed mb-6 opacity-60" style={{ color: colors.textSecondary }}>{cat.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
           <button 
             className="px-10 cursor-pointer py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-1"
             style={{ backgroundColor: colors.primary, boxShadow: `0 10px 20px ${colors.primary}66` }}
           >
             Download App for learn
           </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-[5%] py-5 bg-white relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative z-10">
            <h4 className="text-lg font-bold mb-4" style={{ color: colors.primary }}>About Us</h4>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-8" style={{ color: colors.textPrimary }}>
               What are 3 types of web <br /> developments?
            </h2>
            <div className="bg-white p-10 rounded-3xl shadow-2xl relative z-20 max-w-[500px] border border-gray-50">
                <p className="text-sm leading-[1.8] mb-8" style={{ color: colors.textSecondary }}>
                    Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
                </p>
                <a href="#" className="font-bold underline decoration-2 transition-all hover:opacity-70" style={{ color: colors.primary, textUnderlineOffset: '4px' }}>
                    Read More
                </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src={aboutImg} 
              alt="About person" 
              className="w-full max-w-[600px] rounded-[40px] shadow-2xl relative z-10"
            />
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 rounded-full opacity-10 z-0" style={{ backgroundColor: colors.primary }}></div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="px-[5%] py-24 relative overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: colors.primary }}>
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {popularCourses.map((course, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl flex gap-6 items-center shadow-lg border border-gray-50 transition-all hover:-translate-y-1">
              <div className="w-24 h-24 min-w-[96px] rounded-2xl overflow-hidden flex items-center justify-center p-4 transition-transform group-hover:scale-110" style={{ backgroundColor: colors.divider }}>
                <img src={course.icon} alt={course.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>{course.title}</h3>
                <p className="text-xs leading-relaxed mb-4 opacity-60" style={{ color: colors.textSecondary }}>{course.desc}</p>
                {/* <NavLink to='/download'
                  className="px-6 py-2 rounded-lg font-bold text-sm bg-transparent border-2 border-primary transition-all hover:bg-red-50"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  Download
                </NavLink> */}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
            <NavLink to='/download'
              className="px-12 cursor-pointer py-5 rounded-xl font-bold text-white transition-all shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: colors.primary }}
            >
              Download App for learn
            </NavLink>
        </div>
        {/* <div className="absolute top-10 right-10 p-3 bg-white rounded-full shadow-lg border border-orange-50">
             <span className="text-2xl">⏳</span>
        </div> */}
      </section>

      {/* What Our Customer Says Section */}
      <section className="px-[5%] py-5 bg-white flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-6" style={{ color: colors.textPrimary }}>
            What Our Customers <br /> Says
          </h2>
          <p className="text-sm leading-relaxed mb-10 max-w-[450px]" style={{ color: colors.textSecondary }}>
            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.
          </p>
          {/* <button 
            className="px-10 py-4 rounded-xl font-bold text-white shadow-xl transition-all hover:-translate-y-1"
            style={{ backgroundColor: colors.primary }}
          >
            View More
          </button> */}
        </div>
        <div className="flex-1 flex flex-col gap-8 relative">
           {testimonials.map((test, idx) => (
             <div 
               key={idx} 
               className={`p-6 rounded-2xl flex gap-6 items-start relative transition-all hover:scale-105 ${test.active ? 'z-20 scale-110 ml-[-20px]' : 'z-10 ml-4 opacity-60'}`}
               style={{ 
                 backgroundColor: colors.white, 
                 boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                 borderLeft: test.active ? `6px solid ${colors.primary}` : 'none'
               }}
             >
               <img src={test.img} alt={test.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover" />
               <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1" style={{ color: colors.textPrimary }}>{test.name}</h4>
                  <p className="text-xs leading-relaxed mb-1" style={{ color: colors.textSecondary }}>{test.text}</p>
               </div>
               <span className="text-3xl opacity-20" style={{ color: colors.primary }}>"</span>
             </div>
           ))}
        </div>
      </section>

      {/* Our Blogs Section */}
      <section className="px-[5%] py-10 relative overflow-hidden text-center">
        <h2 className="text-4xl font-extrabold mb-16" style={{ color: colors.primary }}>
          Our Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl group border border-gray-50 flex flex-col text-left">
              <div className="overflow-hidden h-60">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-extrabold mb-4 group-hover:underline transition-all" style={{ color: colors.textPrimary }}>{blog.title}</h3>
                <p className="text-sm leading-relaxed mb-6 line-clamp-2" style={{ color: colors.textSecondary }}>{blog.desc}</p>
                <a href="#" className="font-bold border-b-2 transition-all hover:opacity-70" style={{ color: colors.primary, borderColor: colors.primary }}>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
