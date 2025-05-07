import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-6">
      {/* Hero Section */}
      <section className="bg-slate-500 text-white py-20 px-6 rounded-xl shadow-lg mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-lg text-white md:text-xl mb-6">
            A Computer Science portal for students. It contains well written,
            well thought and well explained computer science and programming
            articles.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tutorials.html"
              className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Start Learning
            </a>
            <a
              href="practice.html"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition"
            >
              Practice Problems
            </a>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "fas fa-code", title: "Programming", desc: "Learn programming languages and concepts" },
            { icon: "fas fa-project-diagram", title: "Data Structures", desc: "Master data structures and algorithms" },
            { icon: "fas fa-laptop-code", title: "Web Development", desc: "Build modern web applications" },
            { icon: "fas fa-mobile-alt", title: "App Development", desc: "Create mobile applications" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <i className={`${item.icon} text-3xl text-green-600 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Data Structures & Algorithms",
              link: "article1.html",
              desc: "Explore core DSA concepts, problem-solving techniques, and code snippets.",
            },
            {
              title: "Web Development",
              link: "article2.html",
              desc: "Learn HTML, CSS, JavaScript, and frameworks to build beautiful websites.",
            },
            {
              title: "Interview Preparation",
              link: "article3.html",
              desc: "Practice questions asked by top companies with solutions and explanations.",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                <a href={article.link} className="text-green-600 hover:underline">
                  {article.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 mb-4">{article.desc}</p>
              <div className="flex gap-4 text-gray-500 text-sm">
                <span><i className="far fa-eye"></i></span>
                <span><i className="far fa-thumbs-up"></i></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
