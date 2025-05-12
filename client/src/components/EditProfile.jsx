import React from 'react';

const EditProfile = () => {
  return (
    <main className="pt-36 relative min-h-screen px-4 md:px-20 py-10">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-orange-400 to-transparent z-[-1] animate-fade-in" />

      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <i className="fas fa-user-edit"></i> Edit Profile
        </h1>
        <a
          href="/profile"
          className="text-black font-semibold hover:underline flex items-center gap-2 hover:text-orange-500 transition-colors duration-200"
        >
          <i className="fas fa-arrow-left"></i> Back to Profile
        </a>
      </div>

      <form className="space-y-10 animate-fade-in">
        {/* Profile Picture Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
          <div className="flex items-center gap-4 relative">
            <label htmlFor="profile-pic" className="cursor-pointer relative group">
              <img
                src="assets/image/avatar.png"
                alt="Current Profile Picture"
                className="w-24 h-24 rounded-full border-2 border-slate-400 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <img
                src="assets/image/add.svg"
                alt="add"
                className="w-10 h-8 absolute bottom-1 left-16 group-hover:scale-110 transition-transform duration-200"
              />
            </label>
            <input type="file" id="profile-pic" accept="image/*" className="hidden" />
          </div>
        </section>

        {/* Personal Information Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { id: 'full-name', label: 'Full Name', type: 'text', defaultValue: 'Nikita Soni' },
              { id: 'email', label: 'Email', type: 'email', defaultValue: 'nikita@example.com' },
              { id: 'job-title', label: 'Job Title', type: 'text', defaultValue: 'Frontend Developer' },
              { id: 'location', label: 'Location', type: 'text', defaultValue: 'India' },
            ].map(({ id, label, type, defaultValue }) => (
              <div className="flex flex-col" key={id}>
                <label htmlFor={id} className="mb-1 font-medium">{label}</label>
                <input
                  type={type}
                  id={id}
                  defaultValue={defaultValue}
                  required
                  className="border px-3 py-2 rounded focus:outline-none focus:border-orange-400 transition-all duration-300 hover:shadow-sm"
                />
              </div>
            ))}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="bio" className="mb-1 font-medium">Bio</label>
              <textarea
                id="bio"
                rows="4"
                placeholder='Passionate coder and tech enthusiast. Love to learn and share knowledge about web development and programming.'
                className="border px-3 py-2 rounded focus:outline-none focus:border-orange-400 transition-all duration-300 hover:shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { id: 'github', icon: 'fab fa-github', placeholder: 'https://github.com/username' },
              { id: 'linkedin', icon: 'fab fa-linkedin', placeholder: 'https://linkedin.com/in/username' },
              { id: 'twitter', icon: 'fab fa-twitter', placeholder: 'https://twitter.com/username' },
            ].map(({ id, icon, placeholder }) => (
              <div className={`flex flex-col ${id === 'twitter' ? 'md:col-span-2' : ''}`} key={id}>
                <label htmlFor={id} className="mb-1 font-medium">
                  <i className={`${icon} mr-1`} /> {id.charAt(0).toUpperCase() + id.slice(1)}
                </label>
                <input
                  type="url"
                  id={id}
                  placeholder={placeholder}
                  className="border px-3 py-2 rounded focus:outline-none focus:border-orange-400 transition-all duration-300 hover:shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "HTML", "CSS"].map(skill => (
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1 hover:bg-gray-300 transition-colors duration-200"
                >
                  {skill}
                  <button type="button" className="hover:scale-110 transition-transform duration-200">
                    <i className="fas fa-times text-red-500 text-sm"></i>
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                id="new-skill"
                placeholder="Add a skill"
                className="border px-3 py-2 rounded w-full focus:outline-none focus:border-orange-400 transition-all duration-300 hover:shadow-sm"
              />
              <button type="button" className="hover:scale-110 transition-transform duration-200">
                <img src="assets/image/add.svg" alt="add" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Notification Preferences */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-2">
            {[
              'Email notifications for new articles',
              'Course completion reminders',
              'Weekly learning progress report',
            ].map((label, idx) => (
              <label key={idx} className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200">
                <input type="checkbox" defaultChecked={idx < 2} />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditProfile;
