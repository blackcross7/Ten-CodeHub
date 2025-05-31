import React from 'react';
import { motion } from "framer-motion";
import '../styles/Article.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Articles = () => {
  return (
    <div className="font-sans bg-slate-900">

      {/* Main background with image */}
      <motion.div
        className="min-h-screen pt-36 pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/image/herobg5.jpg')" }}
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0"></div>
      </motion.div>

      <div className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 py-10">
        <motion.section
          className="px-6 md:pt-10 md:px-10 pb-10 -mt-[75vh] w-[90vw] md:w-[90vw] xl:w-[80vw] flex flex-col justify-around space-y-0 mx-auto border border-slate-700/50 rounded-3xl shadow-2xl bg-slate-900/50 bg-clip-padding backdrop-filter backdrop-blur-sm"
          style={{ maxWidth: "1200px" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >

          {/* Featured Articles */}
          <section className="mb-16 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.article
                className="bg-slate-800/50 backdrop-md p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-700/50"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <div className="relative h-64 overflow-hidden mb-6 rounded-lg">
                  <img src="/assets/image/react1.jpg" alt="Article" className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-semibold px-4 py-2 rounded-full">
                    <i className="fas fa-code mr-1"></i> Web Development
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Understanding React Hooks: A Comprehensive Guide</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">Learn about React Hooks, their benefits, and how to use them effectively in your React applications.</p>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span><i className="fas fa-clock mr-1 text-blue-400"></i> 5 min read</span>
                    <span><i className="fas fa-eye mr-1 text-blue-400"></i> 1.2k views</span>
                  </div>
                </div>
              </motion.article>

              <motion.article
                className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-700/50"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <div className="relative h-64 overflow-hidden mb-6 rounded-lg">
                  <img src="/assets/image/bi.jpg" alt="Article" className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs font-semibold px-4 py-2 rounded-full">
                    <i className="fas fa-code mr-1"></i> Data Structures
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Mastering Binary Search Trees</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">Deep dive into Binary Search Trees, their operations, and real-world applications.</p>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span><i className="fas fa-clock mr-1 text-blue-400"></i> 8 min read</span>
                    <span><i className="fas fa-eye mr-1 text-blue-400"></i> 2.5k views</span>
                  </div>
                </div>
              </motion.article>
            </div>
          </section>

          {/* Categories */}
          <section className="mb-16 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: 'laptop-code', name: 'Web Development', count: 125 },
                { icon: 'database', name: 'Data Structures', count: 98 },
                { icon: 'brain', name: 'Algorithms', count: 156 },
                { icon: 'mobile-alt', name: 'Mobile Development', count: 87 },
                { icon: 'lock', name: 'Cyber Security', count: 64 },
                { icon: 'robot', name: 'Machine Learning', count: 112 }
              ].map((cat, idx) => (
                <motion.a
                  href="#"
                  className="block bg-slate-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-700/50 text-center no-underline text-white"
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={idx}
                >
                  <i className={`fas fa-${cat.icon} text-3xl text-blue-400 mb-4`}></i>
                  <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
                  <span className="text-gray-400 text-sm">{cat.count} Articles</span>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Latest Articles */}
          <section className="mb-16 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: 'Web Development',
                  icon: 'laptop-code',
                  date: '2 days ago',
                  title: 'Building Responsive Web Applications with CSS Grid',
                  summary: 'Learn how to create modern, responsive layouts using CSS Grid and Flexbox.'
                },
                {
                  category: 'Algorithms',
                  icon: 'brain',
                  date: '3 days ago',
                  title: 'Understanding Time Complexity in Algorithms',
                  summary: 'A comprehensive guide to analyzing and optimizing algorithm performance.'
                },
                {
                  category: 'Data Science',
                  icon: 'chart-line',
                  date: '4 days ago',
                  title: 'Introduction to Data Visualization with Python',
                  summary: 'Learn how to create stunning visualizations using Python libraries.'
                }
              ].map((art, idx) => (
                <motion.article
                  className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-700/50"
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={idx}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className={`fas fa-${art.icon}`}></i> {art.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <i className="fas fa-calendar-days text-blue-400"></i> {art.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{art.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{art.summary}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img src="/assets/image/user.jpg" alt="Author" className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-gray-400"><i className="fas fa-user-pen text-blue-400"></i> John Doe</span>
                    </div>
                    <div className="flex gap-4 text-gray-400 text-sm">
                      <span><i className="fas fa-heart text-red-400"></i> 245</span>
                      <span><i className="fas fa-comment text-blue-400"></i> 45</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <motion.button
              className="block mx-auto mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <i className="fas fa-arrow-down"></i> Load More Articles
            </motion.button>
          </section>
        </motion.section>
      </div>
    </div>
  );
};

export default Articles;
