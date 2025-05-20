import React from 'react';

const FeaturedArticles = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white border-4 border-blue-500 rounded-2xl p-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        <i className="fas fa-crown text-yellow-500"></i> Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
        <article className="bg-white p-5 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 border-l-4 border-blue-500">
          <div className="relative h-72 overflow-hidden mb-8">
            <img src="/assets/image/Web_Dev_Article.png" alt="Article" className="w-full h-full object-cover rounded-xl" />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-full"><i className="fas fa-code mr-1"></i> Web Development</span>
          </div>
          <div className="">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Understanding React Hooks: A Comprehensive Guide</h3>
            <p className="text-gray-600 leading-relaxed">Learn about React Hooks, their benefits, and how to use them effectively in your React applications.</p>
            <div className="flex gap-4 text-sm text-gray-500 mt-4">
              <span><i className="fas fa-clock mr-1 text-blue-500"></i></span>
              <span><i className="fas fa-eye mr-1 text-blue-500"></i></span>
            </div>
          </div>
        </article>

        <article className="bg-white p-5 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 border-l-4 border-blue-500">
          <div className="relative h-72 overflow-hidden mb-8">
            <img src="/assets/image/BST.jpeg" alt="Article" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Mastering Binary Search Trees</h3>
            <p className="text-gray-600 leading-relaxed">Deep dive into Binary Search Trees, their operations, and real-world applications.</p>
            <div className="flex gap-4 text-sm text-gray-500 mt-4">
              <span><i className="fas fa-clock mr-1 text-blue-500"></i></span>
              <span><i className="fas fa-eye mr-1 text-blue-500"></i></span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-white border-4 border-green-500 rounded-2xl p-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        <i className="fas fa-folder-tree text-green-500"></i> Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { icon: 'laptop-code', name: 'Web Development', count: 125 },
          { icon: 'database', name: 'Data Structures', count: 98 },
          { icon: 'brain', name: 'Algorithms', count: 156 },
          { icon: 'mobile-alt', name: 'Mobile Development', count: 87 },
          { icon: 'lock', name: 'Cyber Security', count: 64 },
          { icon: 'robot', name: 'Machine Learning', count: 112 }
        ].map((cat, idx) => (
          <a href="#" className="block bg-white p-6 rounded-lg shadow transition-transform duration-300 hover:-translate-y-1 text-center no-underline text-gray-800" key={idx}>
            <i className={`fas fa-${cat.icon} text-4xl text-indigo-600 mb-4`}></i>
            <h3 className="text-lg font-semibold mb-1">{cat.name}</h3>
            <span className="text-gray-600 text-sm">{cat.count} Articles</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const LatestArticles = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white border-4 border-purple-500 rounded-2xl p-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        <i className="fas fa-bolt text-yellow-400"></i> Latest Articles
      </h2>
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
          <article className="bg-white p-5 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 border-l-4 border-green-500" key={idx}>
            <div className="flex justify-between items-center mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"><i className={`fas fa-${art.icon}`}></i> {art.category}</span>
              <span className="text-gray-500 text-sm flex items-center gap-1"><i className="fas fa-calendar-days text-blue-500"></i> {art.date}</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{art.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{art.summary}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/assets/image/Screenshot 2025-02-07 223101.png" alt="Author" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-gray-600"><i className="fas fa-user-pen text-blue-500"></i></span>
              </div>
              <div className="flex gap-4 text-gray-500 text-sm">
                <span><i className="fas fa-heart text-red-500"></i></span>
                <span><i className="fas fa-comment text-blue-500"></i></span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="block mx-auto mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg transition-transform duration-300 hover:scale-105 flex items-center gap-2">
        <i className="fas fa-arrow-down"></i> Load More Articles
      </button>
    </div>
  );
};

const Articles = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-8 py-12 md:px-12 lg:px-16 mt-32 mb-12">
      <FeaturedArticles />
      <Categories />
      <LatestArticles />
    </main>
  );
};

export default Articles;
