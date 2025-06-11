import React, { useEffect } from "react";
import { Eye, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

function Practice() {
  useEffect(() => {
    const cards = document.querySelectorAll(".article-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, index) => {
      card.style.setProperty("--delay", `${0.1 * (index + 1)}s`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative h-screen bg-cover bg-center bg-[url('/assets/image/practice_bg2.jpg')] before:absolute before:inset-0 before:bg-black before:bg-opacity-40 flex items-center justify-center text-white text-5xl font-extrabold drop-shadow-lg"
      />

      {/* Main Content Overlapping the Hero */}
      <div className="bg-[#0a0f2c] pt-[200px] relative z-0">
        <div className="relative -mt-[100vh] z-10 max-w-[1200px] pb-10 pt-20 sm:pt-20 mx-auto px-6 sm:px-8">
          <main>
            <motion.section
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 md:p-12"
            >
              <h2 className="text-center text-3xl font-extrabold text-[#f0f0f0] mb-8">
                Challenges And Contests
              </h2>

              {/* Problem of the Day */}
              <div className="border-2 border-cyan-400 rounded-xl p-4 mb-8 bg-white/10 backdrop-blur-md text-[#f0f0f0]">
                <div
                  className="article-card group opacity-0 translate-y-5 bg-[#101935]/80 border border-cyan-400/30 rounded-3xl p-6 flex flex-col md:flex-row justify-between text-white relative overflow-hidden cursor-pointer"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex flex-col gap-4 w-full md:w-2/3 text-center md:text-left items-center md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        <a href="#" className="text-cyan-400 hover:text-cyan-300">
                          Problem of the Day
                        </a>
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <img src="/assets/image/puzzle.png" alt="Puzzle Icon" className="w-5 h-5" />
                          <span>5-Minute Fix or 50-Minute Fight?</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/assets/image/medal.png" alt="Medal Icon" className="w-5 h-5" />
                          <span>Earn Daily Streak Points!</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/assets/image/calendar.png" alt="Calendar Icon" className="w-5 h-5" />
                          <span>One small problem a day keeps rusty logic away</span>
                        </div>
                      </div>
                    </div>

                    <div className="article-meta flex gap-6 text-gray-200">
                      <Eye size={18} />
                      <ThumbsUp size={18} />
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-6 flex justify-center items-center">
                   <img
                   src="/assets/image/p1.jpg"
                   alt="Problem of the Day"
                   className="rounded-2xl w-full h-auto max-h-48 object-cover"
                  />
                  </div>

                  <button
                    className="participate-btn absolute bottom-5 right-5 bg-pink-600 text-white group-hover:bg-white group-hover:text-pink-600 rounded-full px-3 py-1 text-sm font-medium shadow-md lg:px-5 lg:py-2 lg:text-base lg:font-semibold lg:shadow-lg transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 hidden group-hover:flex hover:scale-105"
                    aria-label="Solve Problem of the Day"
                  >
                    Solve
                  </button>
                </div>
              </div>

              {/* Weekly Contests */}
              <div className="articles-grid grid grid-cols-1 sm:grid-cols-2 gap-8 border-2 border-cyan-400 rounded-xl p-4 bg-white/10 backdrop-blur-md text-[#f0f0f0]">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="article-card group opacity-0 translate-y-5 bg-[#101935]/80 border border-cyan-400/30 rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden cursor-pointer"
                    style={{
                      animationDelay: `calc(var(--delay, 0.1s) + ${0.1 * index}s)`,
                    }}
                  >
                    <img
                      src="/assets/image/week.jpg"
                      alt={`Weekly Contest ${index + 1}`}
                      className="w-full aspect-video object-cover rounded-lg mb-4"
                    />

                    <div className="flex flex-col gap-4 w-full text-center items-center">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          <a href="#" className="text-cyan-400 hover:text-cyan-300">
                            {`Weekly Contest ${index + 1}`}
                          </a>
                        </h3>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <img src="/assets/image/trophy.png" alt="Trophy Icon" className="w-5 h-5" />
                            <span>Win Exciting Prizes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src="/assets/image/chart.png" alt="Chart Icon" className="w-5 h-5" />
                            <span>Boost Your Rank</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src="/assets/image/users.png" alt="Users Icon" className="w-5 h-5" />
                            <span>Compete with the Best</span>
                          </div>
                        </div>
                        <div className="article-meta flex gap-6 mt-3 text-gray-200">
                          <Eye size={18} />
                          <ThumbsUp size={18} />
                        </div>
                      </div>

                      <button
                       className="participate-btn absolute bottom-2 right-2 sm:bottom-5 sm:right-5 bg-pink-600 text-white group-hover:bg-white group-hover:text-pink-600 rounded-full px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium shadow-md sm:shadow-lg transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 hidden group-hover:flex hover:scale-105"
                       aria-label={`Participate in Weekly Contest ${index + 1}`}
                      >
                      Participate
                      </button>

                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </main>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate {
          animation-name: fadeInUp;
          animation-fill-mode: forwards;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
          animation-delay: var(--delay, 0s);
        }
      `}</style>
    </>
  );
}

export default Practice;
