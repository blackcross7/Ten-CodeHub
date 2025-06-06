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

  const [loading, setLoading] = useState(false); // loading state

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
      // Update local formData explicitly, so form does not clear
      setFormData((prev) => ({
        ...prev,
        fullName,
        jobTitle,
        location,
        bio,
        github,
        linkedin,
        twitter,
      }));
    } else {
      toast.error('Failed to update profile');
    }

    setLoading(false);
  };


  // Framer Motion variants
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
    <motion.main
      className="pt-28 relative min-h-screen px-4 md:px-20 py-10 bg-blue-50 text-blue-900"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-indigo-600 to-transparent z-0" />

      <motion.div
        className="relative z-10 flex justify-between items-center my-10"
        variants={slideInUp}
      >
        <motion.h1
          className="text-xl md:text-3xl font-bold flex items-center gap-2 text-blue-900"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <i className="fas fa-user-edit"></i> Edit Profile
        </motion.h1>
        <motion.a
          href="/profile"
          className="text-indigo-900 font-semibold hover:underline flex items-center gap-2 hover:text-indigo-800 transition-colors duration-200 text-sm md:text-lg"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <i className="fas fa-arrow-left"></i> Back to Profile
        </motion.a>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 space-y-10 bg-white p-8 rounded-lg shadow-xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Profile Picture</h2>
          <div className="flex items-center justify-center gap-6">
            <label htmlFor="profile-pic" className="cursor-pointer relative group">
              <motion.img
                src={profilePic}
                alt="Current Profile"
                className="w-28 h-28 rounded-full border-4 border-indigo-400 object-cover transition-shadow duration-100 hover:brightness-110"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 0px 10px rgba(99, 102, 241, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="assets/image/add.svg"
                alt="add"
                className="w-10 h-8 absolute bottom-2 left-20 group-hover:scale-125 transition-transform duration-200"
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.2 }}
              />
            </label>
            <input
              type="file"
              id="profile-pic"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </motion.section>

        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Personal Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'e.g., Jane Doe' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'e.g., your.email@example.com', readOnly: true },
              { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'e.g., Software Engineer' },
              { id: 'location', label: 'Location', type: 'text', placeholder: 'e.g., New York, USA' },
            ].map(({ id, label, type, placeholder, readOnly }) => (
              <motion.div className="flex flex-col" key={id} variants={itemFadeIn}>
                <label htmlFor={id} className="mb-1 font-medium text-blue-800">{label}</label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  readOnly={readOnly || false}
                  required
                  className={`border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md ${readOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                />
              </motion.div>
            ))}
            <motion.div className="flex flex-col md:col-span-2" variants={itemFadeIn}>
              <label htmlFor="bio" className="mb-1 font-medium text-blue-800">Bio</label>
              <textarea
                id="bio"
                rows="4"
                placeholder="Passionate coder..."
                value={formData.bio}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y shadow-sm hover:shadow-md"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Social Links</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { id: 'github', icon: 'fab fa-github', placeholder: 'https://github.com/your-username' },
              { id: 'linkedin', icon: 'fab fa-linkedin', placeholder: 'https://linkedin.com/in/your-profile' },
              { id: 'twitter', icon: 'fab fa-twitter', placeholder: 'https://twitter.com/your-handle' },
            ].map(({ id, icon, placeholder }) => (
              <motion.div className={`flex flex-col ${id === 'twitter' ? 'md:col-span-2' : ''}`} key={id} variants={itemFadeIn}>
                <label htmlFor={id} className="mb-1 font-medium text-blue-800">
                  <i className={`${icon} mr-1`} /> {id.charAt(0).toUpperCase() + id.slice(1)}
                </label>
                <input
                  type="url"
                  id={id}
                  value={formData[id]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm hover:shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div className="flex flex-col-reverse md:flex-row justify-end gap-4 mt-8" variants={slideInUp}>
          <motion.button
            type="button"
            className="px-6 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 font-medium"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            disabled={loading}  // disable button while loading
            className={`px-6 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={!loading ? buttonHover : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.main>
  );
};

export default EditProfile;
