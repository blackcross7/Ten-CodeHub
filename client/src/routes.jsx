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
      <Route path="/discussion" element={<Courses />} />
      <Route path="/explore" element={<Explore />} /> {/* ✅ Added explore route */}

      <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
