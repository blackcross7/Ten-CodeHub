import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Dsa() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-t from-gray-800 to-black py-32'>

      {/* Container */}
      <div className='text-white w-[90vw] max-w-7xl mx-auto rounded-xl text-start flex flex-col place-items-start px-6 lg:px-16 py-10'>

        {/* Breadcrumb */}
        <Link to="/home">
          <h2 className='text-sm flex gap-2 cursor-pointer'>
            <span className='text-slate-400'>All courses &gt;</span>
            <span className='text-white'>Live</span>
          </h2>
        </Link>

        {/* Hero Section */}
        <div className='flex flex-col-reverse lg:flex-row justify-between w-full h-auto lg:h-[50vh] py-12 gap-8'>
          {/* Left */}
          <div className='lg:w-[50%] flex flex-col justify-between'>
            <h1 className='text-4xl font-extrabold leading-snug mb-6 tracking-tight'>
              DSA to Development<br />A Complete Guide
            </h1>

            <div className='flex flex-col gap-4 text-lg'>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Comprehensive Learning
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Industry Readiness
              </div>
              <div className='text-green-400 font-medium'>
                Recommended for Students and Working Professionals
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
              <button className='bg-green-600 hover:bg-green-700 text-white w-52 py-2 rounded-md font-semibold transition'>
                Sign Up Now
              </button>
              <button className='border border-green-500 text-green-400 hover:bg-green-100 hover:text-green-700 w-52 py-2 rounded-md font-semibold transition flex items-center justify-center gap-2'>
                Download Brochure <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className='lg:w-[50%] flex items-center justify-center lg:justify-end'>
            <img
              className='w-full max-w-lg'
              src="/assets/image/dsa_page_hero.png"
              alt="DSA Hero"
            />
          </div>
        </div>

        {/* Footer Text Box */}
        <div className="mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md">
          <FontAwesomeIcon className="text-green-400 text-xl mt-1" icon={faWarning} />
          <p className="text-slate-300 leading-relaxed">
            Join thousands of learners mastering DSA and landing top tech roles. This structured program guides you from core concepts to building real-world applications — all in one streamlined journey.
          </p>
        </div>
      </div>

      {/* Course Description */}
      <div className='w-[90vw] max-w-7xl mx-auto mt-16 mb-24 py-8 p-4 rounded-xl flex flex-col lg:flex-row justify-center items-stretch gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-gray-800 to-black shadow-lg'>
        <div>
            <h2 className="text-2xl  lg:hidden font-semibold text-white mb-0">
              <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
            </h2>
        </div>
        <div className='w-full lg:w-[40%] flex items-center justify-center'>
          <img
            className='rounded-lg object-cover h-full max-h-[300px]'
            src="/assets/image/ds_img.jpg"
            alt="DSA Preview"
          />
        </div>

        <div className='flex flex-col gap-4 lg:w-[60%] h-full justify-between'>
          <div>
            <h2 className="text-2xl hidden lg:block font-semibold text-white mb-2">
              <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
            </h2>
            <p className='text-sm text-slate-300 leading-relaxed'>
              This course is your roadmap from mastering Data Structures and Algorithms to becoming a confident, job-ready developer. Whether you're pursuing full-stack development or focusing on a niche tech stack, you'll gain the core skills to build real-world solutions from the ground up.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <img
                className='w-7 h-7 bg-[#3b8346] rounded-full p-1'
                src="/assets/image/interested-icon.png"
                alt="Icon"
              />
              <span className='text-slate-400'>Beginner to Advanced</span>
            </div>
            <button className='bg-green-600 hover:bg-green-700 text-white w-52 py-2 rounded-md font-semibold transition'>
              Sign Up Now
            </button>
          </div>
        </div>
      </div>

      {/* About The Course */}
      <div className='w-full bg-gray-800 py-16'>
        <div className='w-[90vw] max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10'>

          {/* Text Content */}
          <div className='lg:w-[60%] text-white space-y-6'>
            <h2 className='text-3xl text-white font-bold border-b-2 border-green-300 inline-block pb-1'>
              About The Course
            </h2>
             <div className='lg:w-[40%] lg:hidden flex  items-center justify-center'>
            <img
              src="/assets/image/dsa_page_about.jpg"
              alt="About the course"
              className='w-[80%] h-[300px] object-cover rounded-lg shadow-md'
            />
          </div>
            <p className='text-slate-300 leading-relaxed'>
              The course begins with a solid foundation in DSA — a must-have for any developer. As you progress, you'll build hands-on projects, explore popular frameworks, and develop a strong understanding of scalable code and system design. Whether you're a student or a professional, this course adapts to your goals and equips you for real-world tech challenges.
            </p>
            <ul className='list-disc list-inside text-slate-400 space-y-1'>
              <li>Foundational mastery of DSA concepts and techniques</li>
              <li>Practical coding problems and industry-standard solutions</li>
              <li>Progressive learning from beginner to advanced levels</li>
              <li>Perfect for full-stack, backend, Android, or data science pathways</li>
              <li>Project-based learning with real-world applications</li>
            </ul>
          </div>

          {/* Image */}
          <div className='lg:w-[40%] hidden lg:flex  items-center justify-center'>
            <img
              src="/assets/image/dsa_page_about.jpg"
              alt="About the course"
              className='w-full h-[300px] object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dsa;
