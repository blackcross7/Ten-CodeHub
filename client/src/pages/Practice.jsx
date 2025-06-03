import React, { useEffect } from "react";
import { Eye, ThumbsUp } from "lucide-react";

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
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center bg-[url('/assets/image/practice_bg2.jpeg')] before:absolute before:inset-0 before:bg-black before:bg-opacity-40 flex items-center justify-center text-white text-5xl font-extrabold drop-shadow-lg"></div>

      {/* After Hero Background */}
      <div className="bg-[#0a0f2c] pt-[300px] relative z-0">
        <div className="relative -mt-[850px] z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <main>
            <section className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 md:p-12">
              <h2 className="text-center text-3xl font-extrabold text-[#f0f0f0] mb-8">
                Challenges And Contests
              </h2>

              {/* Problem of the Day */}
              <div className="border-2 border-cyan-400 rounded-xl p-4 mb-8 bg-white/10 backdrop-blur-md text-[#f0f0f0]">
                <div
                  className="article-card opacity-0 translate-y-5 bg-blue-400/70 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between text-white relative overflow-hidden cursor-pointer"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex flex-col gap-4 w-full md:w-auto text-center md:text-left items-center md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        <a
                          href="#"
                          className="text-yellow-400 hover:text-yellow-300"
                        >
                          Problem of the Day
                        </a>
                      </h3>
                      <p>🧩 5-Minute Fix or 50-Minute Fight?</p>
                      <p>🏅 Earn Daily Streak Points!</p>
                      <p>🗓 One small problem a day keeps rusty logic away</p>
                    </div>

                    {/* Icons under text */}
                    <div className="article-meta flex gap-6 text-gray-200">
                      <Eye size={18} />
                      <ThumbsUp size={18} />
                    </div>
                  </div>

                  <img
                    src="/assets/image/p1.jpg"
                    alt="Problem of the Day"
                    className="h-full w-full md:w-48 md:h-36 rounded-lg object-cover self-start mt-4 md:mt-0"
                  />

                  <button
                    className="participate-btn absolute bottom-5 right-5 bg-pink-600 hover:bg-white hover:text-pink-600 text-white rounded-full px-5 py-2 font-semibold shadow-lg transition-opacity opacity-0 translate-y-2 hover:opacity-100 hover:translate-y-0"
                    aria-label="Solve Problem of the Day"
                  >
                    Solve
                  </button>
                </div>
              </div>

              {/* Weekly Contest Grid */}
              <div className="articles-grid grid grid-cols-1 sm:grid-cols-2 gap-8 border-2 border-cyan-400 rounded-xl p-4 bg-white/10 backdrop-blur-md text-[#f0f0f0]">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="article-card opacity-0 translate-y-5 bg-blue-400/70 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between text-white relative overflow-hidden cursor-pointer"
                    style={{
                      animationDelay: `calc(var(--delay, 0.1s) + ${0.1 * index}s)`,
                    }}
                  >
                    <div className="flex flex-col gap-4 w-full md:w-auto text-center md:text-left items-center md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          <a
                            href="#"
                            className="text-yellow-400 hover:text-yellow-300"
                          >
                            {`Weekly Contest ${index + 1}`}
                          </a>
                        </h3>
                        <p>1. 🏆 Win Exciting Prizes</p>
                        <p>2. 📈 Boost Your Rank</p>
                        <p>3. 👥 Compete with the Best</p>
                      </div>

                      {/* Icons under text */}
                      <div className="article-meta flex gap-6 text-gray-200">
                        <Eye size={18} />
                        <ThumbsUp size={18} />
                      </div>
                    </div>

                    <img
                      src="/assets/image/week.jpg"
                      alt={`Weekly Contest ${index + 1}`}
                      className="w-36 rounded-lg object-cover mt-4 md:mt-0 md:ml-6"
                    />

                    <button
                      className="participate-btn absolute bottom-5 right-5 bg-pink-600 hover:bg-white hover:text-pink-600 text-white rounded-full px-5 py-2 font-semibold shadow-lg transition-opacity opacity-0 translate-y-2 hover:opacity-100 hover:translate-y-0"
                      aria-label={`Participate in Weekly Contest ${index + 1}`}
                    >
                      Participate
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Animation styles */}
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
