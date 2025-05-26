import React from 'react';
import { motion } from 'framer-motion';

const EditProfile = () => {
  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
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
    boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
    transition: { duration: 0.2 }
  };

  return (
    <motion.main
      className="pt-36 relative min-h-screen px-4 md:px-20 py-10 bg-blue-50 text-blue-900"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Background gradient - Keeping indigo for the main theme */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-indigo-600 to-transparent z-0" />

      {/* Page Header */}
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
          whileHover={{ x: -5 }} // Subtle slide left on hover
          transition={{ duration: 0.2 }}
        >
          <i className="fas fa-arrow-left"></i> Back to Profile
        </motion.a>
      </motion.div>

      <motion.form
        className="relative z-10 space-y-10 bg-white p-8 rounded-lg shadow-xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture Section */}
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Profile Picture</h2>
          <div className="flex items-center justify-center gap-6">
            <label htmlFor="profile-pic" className="cursor-pointer relative group">
              <motion.img
                src="assets/image/avatar.png"
                alt="Current Profile Picture"
                className="w-28 h-28 rounded-full border-4 border-indigo-400 object-cover"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.5)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="assets/image/add.svg"
                alt="add"
                className="w-10 h-8 absolute bottom-2 left-20  group-hover:scale-125 transition-transform duration-200"
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.2 }}
              />
            </label>
            <input type="file" id="profile-pic" accept="image/*" className="hidden" />
          </div>
        </motion.section>

        {/* Personal Information Section */}
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Personal Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { id: 'full-name', label: 'Full Name', type: 'text', defaultValue: '', placeholder: 'e.g., Jane Doe' },
              { id: 'email', label: 'Email', type: 'email', defaultValue: '', placeholder: 'e.g., your.email@example.com' },
              { id: 'job-title', label: 'Job Title', type: 'text', defaultValue: '', placeholder: 'e.g., Software Engineer' },
              { id: 'location', label: 'Location', type: 'text', defaultValue: '', placeholder: 'e.g., New York, USA' },
            ].map(({ id, label, type, defaultValue, placeholder }) => ( // Added placeholder to destructuring
              <motion.div className="flex flex-col" key={id} variants={itemFadeIn}>
                <label htmlFor={id} className="mb-1 font-medium text-blue-800">{label}</label>
                <input
                  type={type}
                  id={id}
                  defaultValue={defaultValue}
                  placeholder={placeholder} // Added placeholder prop
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                />
              </motion.div>
            ))}
            <motion.div className="flex flex-col md:col-span-2" variants={itemFadeIn}>
              <label htmlFor="bio" className="mb-1 font-medium text-blue-800">Bio</label>
              <textarea
                id="bio"
                rows="4"
                placeholder='Passionate coder and tech enthusiast. Love to learn and share knowledge about web development and programming.'
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md resize-y"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Social Links Section */}
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Social Links</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { id: 'github', icon: 'fab fa-github', placeholder: 'https://github.com/your-username' }, // Updated placeholder
              { id: 'linkedin', icon: 'fab fa-linkedin', placeholder: 'https://linkedin.com/in/your-profile' }, // Updated placeholder
              { id: 'twitter', icon: 'fab fa-twitter', placeholder: 'https://twitter.com/your-handle' }, // Updated placeholder
            ].map(({ id, icon, placeholder }) => (
              <motion.div className={`flex flex-col ${id === 'twitter' ? 'md:col-span-2' : ''}`} key={id} variants={itemFadeIn}>
                <label htmlFor={id} className="mb-1 font-medium text-blue-800">
                  <i className={`${icon} mr-1`} /> {id.charAt(0).toUpperCase() + id.slice(1)}
                </label>
                <input
                  type="url"
                  id={id}
                  placeholder={placeholder} // Added placeholder prop
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Form Actions */}
        <motion.div className="flex flex-col-reverse md:flex-row  justify-end gap-4 mt-8" variants={slideInUp}>
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
            className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 font-medium"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Save Changes
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.main>
  );
};

export default EditProfile;