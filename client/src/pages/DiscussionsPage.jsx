import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForumPage from '../components/ForumPage';
import DiscussionsPage from '../components/DiscussionPage';

const DiscussionPage = () => {
  return (
    <Router>
      <div className="forum-wrapper">
        <Routes>
          <Route path="/" element={<ForumPage />} />
          <Route path="/discussions" element={<DiscussionsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default DiscussionPage;
