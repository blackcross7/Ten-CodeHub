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
      className="pt-36 relative min-h-screen px-4 md:px-20 py-10 bg-gray-50 text-gray-800" // Changed background and default text color
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-orange-400 to-transparent z-0" /> {/* Z-index changed to 0 for proper layering */}

      {/* Page Header */}
      <motion.div
        className="relative z-10 flex justify-between items-center mb-8"
        variants={slideInUp}
      >
        <motion.h1
          className="text-3xl font-bold flex items-center gap-2 text-black" // Heading text black
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <i className="fas fa-user-edit"></i> Edit Profile
        </motion.h1>
        <motion.a
          href="/profile"
          className="text-gray-600 font-semibold hover:underline flex items-center gap-2 hover:text-orange-600 transition-colors duration-200" // Adjusted text color for link
          whileHover={{ x: -5 }} // Subtle slide left on hover
          transition={{ duration: 0.2 }}
        >
          <i className="fas fa-arrow-left"></i> Back to Profile
        </motion.a>
      </motion.div>

      <motion.form
        className="relative z-10 space-y-10 bg-white p-8 rounded-lg shadow-xl" // Added background, padding, shadow for form
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture Section */}
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-black">Profile Picture</h2> {/* Heading text black */}
          <div className="flex items-center justify-center gap-6"> {/* Increased gap for better spacing */}
            <label htmlFor="profile-pic" className="cursor-pointer relative group">
              <motion.img
                src="assets/image/avatar.png"
                alt="Current Profile Picture"
                className="w-28 h-28 rounded-full border-4 border-orange-400 object-cover" // Thicker, orange border
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(251, 146, 60, 0.5)" }} // Scale and glowing shadow on hover
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="assets/image/add.svg"
                alt="add"
                className="w-10 h-8 absolute bottom-2 left-20 -translate-x-1/2 group-hover:scale-125 transition-transform duration-200" // Adjusted position and larger hover scale
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.2 }}
              />
            </label>
            <input type="file" id="profile-pic" accept="image/*" className="hidden" />
          </div>
        </motion.section>

        {/* Personal Information Section */}
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-black">Personal Information</h2> {/* Heading text black */}
          <div className="grid gap-6 md:grid-cols-2"> {/* Increased gap */}
            {[
              { id: 'full-name', label: 'Full Name', type: 'text', defaultValue: 'Nikita Soni' },
              { id: 'email', label: 'Email', type: 'email', defaultValue: 'nikita@example.com' },
              { id: 'job-title', label: 'Job Title', type: 'text', defaultValue: 'Frontend Developer' },
              { id: 'location', label: 'Location', type: 'text', defaultValue: 'India' },
            ].map(({ id, label, type, defaultValue }) => (
              <motion.div className="flex flex-col" key={id} variants={itemFadeIn}> {/* Animate each input field */}
                <label htmlFor={id} className="mb-1 font-medium text-gray-700">{label}</label> {/* Label text color */}
                <input
                  type={type}
                  id={id}
                  defaultValue={defaultValue}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md" // Improved focus and hover styles
                />
              </motion.div>
            ))}
            <motion.div className="flex flex-col md:col-span-2" variants={itemFadeIn}>
              <label htmlFor="bio" className="mb-1 font-medium text-gray-700">Bio</label> {/* Label text color */}
              <textarea
                id="bio"
                rows="4"
                placeholder='Passionate coder and tech enthusiast. Love to learn and share knowledge about web development and programming.'
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md resize-y" // Added resize-y
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Social Links Section */}
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-black">Social Links</h2> {/* Heading text black */}
          <div className="grid gap-6 md:grid-cols-2"> {/* Increased gap */}
            {[
              { id: 'github', icon: 'fab fa-github', placeholder: 'https://github.com/username' },
              { id: 'linkedin', icon: 'fab fa-linkedin', placeholder: 'https://linkedin.com/in/username' },
              { id: 'twitter', icon: 'fab fa-twitter', placeholder: 'https://twitter.com/username' },
            ].map(({ id, icon, placeholder }) => (
              <motion.div className={`flex flex-col ${id === 'twitter' ? 'md:col-span-2' : ''}`} key={id} variants={itemFadeIn}> {/* Animate each input field */}
                <label htmlFor={id} className="mb-1 font-medium text-gray-700">
                  <i className={`${icon} mr-1`} /> {id.charAt(0).toUpperCase() + id.slice(1)}
                </label>
                <input
                  type="url"
                  id={id}
                  placeholder={placeholder}
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md" // Improved focus and hover styles
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={slideInUp}>
          <h2 className="text-xl font-semibold mb-4 text-black">Skills</h2> {/* Heading text black */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3"> {/* Increased gap */}
              {["JavaScript", "React", "HTML", "CSS"].map(skill => (
                <motion.span
                  key={skill}
                  className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium border border-orange-200" // Styled skill tags
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.05, backgroundColor: "#FED7AA" }} // Hover effect on skill tags
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                  <motion.button
                    type="button"
                    className="text-red-500 hover:text-red-700" // Adjusted close button color
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fas fa-times text-xs"></i> {/* Smaller icon for close button */}
                  </motion.button>
                </motion.span>
              ))}
            </div>
            <div className="flex gap-3"> {/* Increased gap */}
              <input
                type="text"
                id="new-skill"
                placeholder="Add a skill"
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md" // Improved focus and hover styles
              />
              <motion.button
                type="button"
                className="bg-orange-500 text-white rounded-md px-4 py-2 flex items-center justify-center hover:bg-orange-600" // Styled add button
                whileHover={buttonHover}
              >
                Add
              </motion.button>
            </div>
          </div>
        </motion.section>



        {/* Form Actions */}
        <motion.div className="flex justify-end gap-4 mt-8" variants={slideInUp}>
          <motion.button
            type="button"
            className="px-6 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 font-medium" // Wider padding, medium font
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }} // Shrink slightly on tap
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium" // Wider padding, medium font, darker blue
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