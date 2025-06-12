import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';
import toast from 'react-hot-toast';

const EditProfile = () => {
  const { user, updateProfile } = useAuthStore();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    location: '',
    bio: '',
    github: '',
    linkedin: '',
    twitter: '',
  });

  const [profilePic, setProfilePic] = useState(
    localStorage.getItem('codehub-profilePicture') || 'assets/image/avatar.png'
  );

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        email: user.email || '',
        jobTitle: user.jobTitle || '',
        location: user.location || '',
        bio: user.bio || '',
        github: user.socialLinks?.github || '',
        linkedin: user.socialLinks?.linkedin || '',
        twitter: user.socialLinks?.twitter || '',
      });
      if (localStorage.getItem('codehub-profilePicture')) {
        setProfilePic(localStorage.getItem('codehub-profilePicture'));
      }
    }
  }, [user]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      localStorage.setItem('codehub-profilePicture', base64);
      setProfilePic(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, jobTitle, location, bio, github, linkedin, twitter } = formData;

    const success = await updateProfile({
      fullName,
      jobTitle,
      location,
      bio,
      socialLinks: { github, linkedin, twitter },
    });

    if (success) {
      toast.success('Profile updated successfully!');
    } else {
      toast.error('Failed to update profile');
    }

    setLoading(false);
  };

  // Animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: '0px 8px 15px rgba(0,0,0,0.2)',
    transition: { duration: 0.2 },
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <motion.section
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image/edit_page11.jpg')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold"></h1>
        </div>
      </motion.section>

         <div className="bg-[#091a33] min-h-screen w-full">
     {/* Main Form Section starting from Hero middle */}
<motion.main className="relative -mt-[90vh] px-4 md:px-20 py-10 text-blue-900 rounded-t-3xl shadow-lg z-10">

        {/* Header */}
        <motion.div
          className="relative z-10 flex justify-between items-center my-10"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-xl md:text-3xl font-bold flex items-center gap-2 text-white-900"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-user-edit"></i> Edit Profile
          </motion.h1>
          <motion.a
  href="/profile"
  className="text-white font-semibold hover:underline flex items-center gap-2 hover:text-gray-300 transition-colors duration-200 text-sm md:text-lg"
  whileHover={{ x: -5 }}
  transition={{ duration: 0.2 }}
>
  <i className="fas fa-arrow-left"></i> Back to Profile
</motion.a>

        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative z-10 space-y-10 bg-gray-900 p-8 rounded-lg shadow-xl"
          style={{ color: '#e0e0e0' }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Picture */}
          <motion.section variants={slideInUp}>
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Profile Picture</h2>
            <div className="relative flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
                />
                <label
                  htmlFor="fileUpload"
                  className="absolute bottom-2 right-2 bg-indigo-700 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-indigo-800 transition"
                  title="Change Profile Picture"
                >
                  +
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="fileUpload"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>
          </motion.section>

          {/* Personal Info */}
          <motion.section variants={slideInUp}>
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Personal Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'e.g., Jane Doe' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'e.g., your.email@example.com', readOnly: true },
                { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'e.g., Software Engineer' },
                { id: 'location', label: 'Location', type: 'text', placeholder: 'e.g., New York, USA' },
              ].map(({ id, label, type, placeholder, readOnly }) => (
                <motion.div className="flex flex-col" key={id} variants={itemFadeIn}>
                  <label htmlFor={id} className="mb-1 font-medium text-gray-200">{label}</label>
                  <input
                    type={type}
                    id={id}
                    value={formData[id]}
                    placeholder={placeholder}
                    onChange={handleChange}
                    readOnly={readOnly || false}
                    required
                    className={`bg-gray-800 text-gray-200 border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md ${readOnly ? 'bg-gray-700 cursor-not-allowed' : ''}`}
                  />
                </motion.div>
              ))}
              <motion.div className="flex flex-col md:col-span-2" variants={itemFadeIn}>
                <label htmlFor="bio" className="mb-1 font-medium text-gray-200">Bio</label>
                <textarea
                  id="bio"
                  rows="4"
                  placeholder="Passionate coder..."
                  value={formData.bio}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-200 border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y shadow-sm hover:shadow-md"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Social Links */}
          <motion.section variants={slideInUp}>
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Social Links</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { id: 'github', icon: 'fab fa-github', placeholder: 'https://github.com/your-username' },
                { id: 'linkedin', icon: 'fab fa-linkedin', placeholder: 'https://linkedin.com/in/your-profile' },
                { id: 'twitter', icon: 'fab fa-twitter', placeholder: 'https://twitter.com/your-handle' },
              ].map(({ id, icon, placeholder }) => (
                <motion.div className={`flex flex-col ${id === 'twitter' ? 'md:col-span-2' : ''}`} key={id} variants={itemFadeIn}>
                  <label htmlFor={id} className="mb-1 font-medium text-gray-200">
                    <i className={`${icon} mr-1`} /> {id.charAt(0).toUpperCase() + id.slice(1)}
                  </label>
                  <input
                    type="url"
                    id={id}
                    value={formData[id]}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className="bg-gray-800 text-gray-200 border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm hover:shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Buttons */}
          <motion.div
  className="flex flex-row gap-4 mt-8 justify-end items-center max-[425px]:justify-center"
  variants={slideInUp}
>
  <motion.button
    type="submit"
    disabled={loading}
    className={`
      w-36 py-2 rounded-md bg-indigo-700 text-white font-medium hover:bg-indigo-800
      ${loading ? 'opacity-50 cursor-not-allowed' : ''}
      max-[425px]:w-32 max-[425px]:py-2 max-[425px]:text-base
    `}
    whileHover={!loading ? buttonHover : {}}
    whileTap={!loading ? { scale: 0.95 } : {}}
  >
    {loading ? 'Saving...' : 'Save Changes'}
  </motion.button>
  <motion.button
    type="button"
    className="
      w-36 py-2 rounded-md text-white bg-red-700 hover:bg-red-800 font-medium
      max-[425px]:w-32 max-[425px]:py-2 max-[425px]:text-base
    "
    whileHover={buttonHover}
    whileTap={{ scale: 0.95 }}
  >
    Cancel
  </motion.button>
</motion.div>
        </motion.form>
      </motion.main>
      </div>

    </>
  );
};

export default EditProfile;
