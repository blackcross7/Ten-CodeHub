import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Articles from './pages/Article';
import Practice from './pages/Practice';
import Profile from './pages/Profile';
import EditProfile from './components/EditProfile';
import Courses from './pages/Courses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/course" element={<Courses />} />
      <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
