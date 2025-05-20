import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 relative">
      {/* Hamburger & Sidebar */}

      <button
        className="text-2xl md:hidden fixed top-4 left-4 mt-24 z-50 text-black shadow p-2 rounded"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className="flex md:flex-row">
        <nav
          className={`fixed top-32 left-0 h-full bg-white shadow-lg transition-transform duration-300 z-40 w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 md:fixed md:w-64`}
        >
          <ul className="p-6 space-y-4">
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-chart-line" /><span>Contributions</span></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-bookmark" /><span>Saved Items</span></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-university" /><span>Colleges</span></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-building" /><span>Companies</span></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-user-graduate" /><span>Campus Ambassadors</span></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-user-plus" /><span>Invite</span></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-edit" /><Link to="/edit-profile">Edit Profile</Link></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-cog" /><span>Account Settings</span></li>
            <li className="flex items-center space-x-2 p-1 rounded-sm hover:bg-green-300 transition-colors duration-200"><i className="fas fa-sign-out-alt" /><span>Logout</span></li>
          </ul>
        </nav>
      </div>

      {/* Profile Section */}
      <section className="p-4 pt-36 md:pt-36 md:ml-64">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative text-center">
              <img
                src="/assets/image/profile_picture.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
              />
              <div className="text-xl font-semibold mt-2">Madhuri</div>
              <div className="absolute top-0 right-0 bg-gray-200 p-1 rounded-full">
                <i className="material-icons text-sm">edit</i>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg shadow w-full text-center">
              <div className="text-sm text-gray-500">Current POTD Streak</div>
              <div className="text-xl font-bold mt-2">STREAK</div>
              <div className="text-xs">00 / 1375 days</div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-2/3 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <h2 className="text-lg text-gray-800 font-semibold">Institute</h2>
                <button className="text-blue-600"><Link to="/edit-profile">Edit</Link></button>
              </div>
              <h3 className="mt-2 text-md text-gray-700 font-medium">Andhra Loyola Institute of Engineering & Technology</h3>
              <p className="text-sm text-gray-600">Department of CSE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section className="p-4 md:ml-64">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          <div>
            <h3 className="text-lg text-gray-800 font-semibold">Start solving a problem</h3>
            <p className="text-sm text-gray-600 mb-2">To view your submission here, solve a problem and submit it.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Solve Problems</button>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="p-4 md:ml-64">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 bg-green-200 rounded-full"></div>
          <div>
            <h3 className="text-lg text-gray-800 font-semibold">Learn from Industry Professionals</h3>
            <p className="text-sm text-gray-600 mb-2">Enroll in courses taught by experts and gain real-world skills.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Explore Course</button>
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="p-4 md:ml-64">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Badges */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-4 justify-center">
            {["Contributor", "Proficient", "Scholar", "Master", "Ace"].map((badge, i) => (
              <div key={i} className="text-center w-24">
                <p className="text-sm font-medium">{badge}</p>
                <img src={`/assets/image/img${i + 1}${i + 1}.png`} alt={badge} className="w-16 h-16 mx-auto" />
                <span className="text-xs">{["1", "100", "1k", "10k", "50k"][i]} Points</span>
              </div>
            ))}
          </div>

          {/* Write More Box */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-center gap-4">
            <div>
              <h4 className="text-lg text-gray-800 font-semibold">Write More to Win More</h4>
              <p className="text-sm text-gray-600 mb-3">Share your thoughts and unlock badges.</p>
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">Start Writing</button>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">How Badges Work</button>
              </div>
            </div>
            <img
              src="https://media.geeksforgeeks.org/auth-dashboard-uploads/33953.png"
              alt="Write"
              className="w-32 h-32 hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Contest Section */}
      <section className="p-4 md:ml-64">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 bg-purple-200 rounded-full"></div>
          <div>
            <h3 className="text-lg text-gray-800 font-semibold">Join the contest to boost your rating and win prizes!</h3>
            <p className="text-sm text-gray-600 mb-2">Challenge yourself and rise to the top.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">Explore Course</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
