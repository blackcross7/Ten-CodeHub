import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import authStore from '../store/authStore';
import LogoutModal from '../components/LogoutModal';

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 1024);

  const sidebarRef = useRef(null);
const hamburgerRef = useRef(null);


  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  const { user, checkAuth, logout, clearError } = authStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false); 
    }
  };

  handleResize(); // call initially

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


useEffect(() => {
  const handleClickOutside = (e) => {
    const sidebarClicked = sidebarRef.current?.contains(e.target);
    const hamburgerClicked = hamburgerRef.current?.contains(e.target);

    if (sidebarOpen && !sidebarClicked && !hamburgerClicked && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [sidebarOpen]);



  const handleLogout = async () => {
    try {
      await logout();
      clearError();
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err.message);
    }
  };

  const profilePicture = localStorage.getItem('codehub-profilePicture') || 'assets/image/avatar.png';

  const sidebarItems = [
    { label: 'Contributions' },
    { label: 'Saved Items' },
    { label: 'Colleges' },
    { label: 'Companies' },
    { label: 'Campus Ambassadors' },
    { label: 'Invite' },
    { label: 'Edit Profile', to: '/edit-profile' },
    { label: 'Account Settings' },
    { label: 'Logout', action: () => setShowLogoutModal(true) }
  ];


  const metrics = [
    {
      title: "Coding Score",
      icon: "https://img.icons8.com/ios-filled/50/000000/combo-chart.png",
      bg: "bg-orange-100",
    },
    {
      title: "Problem Solved",
      icon: "https://img.icons8.com/ios-filled/50/000000/checkmark--v1.png",
      bg: "bg-indigo-100",
    },
    {
      title: "Contest Rating",
      icon: "https://img.icons8.com/ios-filled/50/000000/star--v1.png",
      bg: "bg-blue-100",
    },
  ];

  return (
       <main className="min-h-screen w-full text-gray-800 relative overflow-x-hidden bg-slate-700 ">
      
      {/* Hero Background Section with Zoom-Out */}
      <motion.section
        className="h-[100vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/image/edit_page11.jpg')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        onClick={() => setSidebarOpen(false)}
      ></motion.section>

      {/* Hamburger */}
      <button
        className="text-2xl lg:hidden fixed top-4 left-4 mt-24 z-50 text-white shadow p-2 rounded"
        onClick={toggleSidebar}
        ref={hamburgerRef}
      >
        ☰
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (

          <motion.nav
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="fixed top-28 left-0 h-full bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white  shadow-xl z-40 w-64 p-6 space-y-4 md:translate-x-0"
              
          >
            
            {sidebarItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-600 transition-colors duration-200 list-none cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => item.action?.()}
              >
                <i className="fas fa-angle-right" />
                {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
              </motion.li>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Content Section */}
      <section className="relative z-10 p-4 lg:ml-64 -mt-[80vh]">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-[#091a33] backdrop-blur-sm rounded-2xl shadow-xl p-6"
  >
    <div className="flex flex-col md:flex-row gap-6">
      {/* Profile Info Card */}
      <div className="w-full md:w-1/3 flex flex-col items-center">
        <div className="text-center flex flex-col items-center">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow"
          />
          <h2 className="text-2xl mt-4 text- white font-bold ">{user?.fullName || 'No name'}</h2>
          <p className="text-gray-200 mt-1 line-clamp-2">{user?.email || 'No Email'}</p>
        </div>
        <div className="mt-6 bg-indigo-800 p-4 rounded-lg shadow w-full text-center text-white">
          <div className="text-md text-white-200">Current POTD Streak</div>
          <div className="text-3xl font-bold mt-2">STREAK</div>
          <div className="text-xl mt-2">00 / 1375 days</div>
        </div>
      </div>

      {/* Right Side Info */}
      <div className="w-full md:w-2/3 space-y-4">
        {/* Job Card */}
        <div className="bg-indigo-900/80 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="mt-1 text-xl text-[#f6e27f]">{user?.jobTitle || 'No Job Title'}</h3>
            <button className="bg-green-600 hover:bg-black text-white font-semibold px-3 py-1 rounded">
              <Link to="/edit-profile">Edit</Link>
            </button>
          </div>
          <h3 className="mt-1 text-md text-[#faf3db] ">{user?.location || 'No Location'}</h3>
          <p className="mt-2 text-md text-[#faf3db]">{user?.bio || 'No bio available'}</p>
        </div>

        {/* Badges */}
        <div className="bg-sky-900/60 p-4 rounded-lg shadow flex flex-wrap gap-4 justify-center">
          {["Contributor", "Proficient", "Scholar", "Master", "Ace"].map((badge, i) => (
            <div key={i} className="text-center w-24">
              <p className="text-sm font-bold text-white tracking-wide">{badge}</p>
              <img src={`/assets/image/img${i + 1}${i + 1}.png`} alt={badge} className="w-16 h-16 mx-auto" />
              <span className="text-xs font-semibold text-white tracking-wide">{["1", "100", "1k", "10k", "50k"][i]} Points</span>

            </div>
          ))}
        </div>

        {/* Score Card */}
        <motion.div className="bg-gradient-to-r from-blue-800 to-indigo-900-200 p-6 rounded-md shadow flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 border border-gray-200">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-2 w-full md:w-auto md:flex-1"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-gray-200 font-medium">{metric.title}</div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${metric.bg}`}>
                <img src={metric.icon} alt={metric.title} className="w-6 h-6" />
              </div>
              <div className="text-lg font-semibold text-gray-200">--</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>

{/* Other sections with fade-in animation */}
{[
  {
    title: "Start solving a problem",
    text: "To view your submission here, solve a problem and submit it.",
    btn: "Solve Problems",
    img: "/assets/image/problem_solving.png",
    color: "bg-blue-600",
    bg: "bg-gradient-to-r from-blue-800 via-purple-900 to-black",
  },
  {
    title: "Learn from Industry Professionals",
    text: "Enroll in courses taught by experts and gain real-world skills.",
    btn: "Explore Course",
    img: "/assets/image/begin_learn.png",
    color: "bg-green-600",
    bg: "	bg-gradient-to-r from-indigo-800 to-purple-900",
  },
  {
    title: "Join the contest to boost your rating and win prizes!",
    text: "Challenge yourself and rise to the top.",
    btn: "Explore Course",
    img: "/assets/image/join_contest.png",
    color: "bg-purple-600",
    bg: "bg-gradient-to-r from-pink-800 to-purple-900",
  },
].map((section, i) => (
  <motion.section
    key={i}
    className="p-4 lg:ml-64"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.2 }}
    viewport={{ once: true }}
  >
    <div className={`${section.bg} p-6 rounded-lg shadow flex flex-col md:flex-row gap-6 items-center justify-center`}>
      <div className="w-40">
        <img src={section.img} alt="#" />
      </div>
      <div>
        <h3 className="text-lg text-white font-bold">{section.title}</h3>
        <p className="text-sm text-gray-400 mb-2">{section.text}</p>
        <button className={`${section.color} text-white px-4 py-2 rounded`}>{section.btn}</button>
      </div>
    </div>
  </motion.section>
))}

{/* Write More Section */}
<motion.section
  className="p-4 lg:ml-64"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="bg-blue-900/80 p-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-around">
    <div>
      <h4 className="text-lg text-white-800 font-semibold">Write More to Win More</h4>
      <p className="text-sm text-gray-400 mb-3">Share your thoughts and unlock badges.</p>
      <div className="flex gap-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Start Writing</button>
        <button className="bg-gray-50 text-gray-700 px-3 py-1 rounded">How Badges Work</button>
      </div>
    </div>
    <img
      src="https://media.geeksforgeeks.org/auth-dashboard-uploads/33953.png"
      alt="Write"
      className="hidden rotate-90 lg:block"
    />
  </div>
</motion.section>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </main>
  );
};

export default ProfilePage;