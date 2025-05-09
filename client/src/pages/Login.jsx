import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-md border border-gray-50 shadow-2xl rounded-2xl p-8 w-[90vw] md:w-[60vw] text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isSignup ? ' Create a new Account ' : 'Login to Your Account'}
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 backdrop-blur placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 backdrop-blur placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 backdrop-blur placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 backdrop-blur placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          )}

          {!isSignup && (
            <div className="text-right text-sm text-gray-700">
              <button type="button" className="hover:underline">Forgot Password?</button>
            </div>
          )}

          <button
            type="button"
            className="w-full py-2 mt-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            {isSignup ? 'Create Account' : 'Login'}
          </button>
        </form>

        {isSignup && (
          <>
            <p className="text-center my-4 text-gray-700">Or sign up with</p>
            
            <div className="flex justify-center gap-4 mb-4">
             <span title='Goggle'><SocialIcon  icon={<FaGoogle  />} /></span> 
             <span title='Facebook'><SocialIcon  icon={<FaFacebookF  />} /></span> 
             <span title='Github'><SocialIcon  icon={<FaGithub  />} /></span> 
             <span title='LinkedIn'><SocialIcon  icon={<FaLinkedinIn  />} /></span> 
            </div>
          </>
        )}

        <p className="text-center text-gray-700 mt-4">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            className="text-green-600 font-semibold hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon }) => (
  <button
    type="button"
    className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 backdrop-blur text-gray-800 text-lg shadow"
  >
    {icon}
  </button>
);

export default Login;
