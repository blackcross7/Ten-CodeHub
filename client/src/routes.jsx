import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import LoginModal from './pages/LoginModal';
import Articles from './pages/Article';
import Practice from './pages/Practice';
import Profile from './pages/Profile';
import EditProfile from './components/EditProfile';
import Courses from './pages/Courses';
import Explore from './pages/Explore'; // ✅ Added import for Explore
import DiscussionsPage from './pages/DiscussionPage';
import ForumPage from './components/ForumPage';
import Dsa from './components/Dsa';
import JavaPage from './components/JavaPage';
import C from './pages/C'
import Python from './pages/Python'
import Ml from './components/ml'
import Webdev from './components/webdev'
import DevOps from './components/DevOps'




const AppRoutes = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/loginModal" element={<LoginModal />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/discussion" element={<DiscussionsPage />} />
      <Route path="/explore" element={<Explore />} /> {/* ✅ Added explore route */}
      <Route path="/forum" element={<ForumPage/>} /> 
      <Route path= "/dsa" element={<Dsa/>} />
      <Route path="/java" element={<JavaPage/>} />
      <Route path="/c" element={<C/>} />
      <Route path="/python" element={<Python/>} />
      <Route path="/python" element={<Python/>} />
      <Route path="/ml" element={<Ml/>} />
      <Route path="/webdev" element={<Webdev/>} />
      <Route path="/devops" element={<DevOps/>} />

     

      <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
