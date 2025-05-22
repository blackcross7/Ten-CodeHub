import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    onClose();        // Close modal      
    navigate('/');    // Redirect to home
  };

  const handleClose = () => {
    navigate(-1);     // Go back to previous page
  };

  return (
    <div className="min-h-screen inset-0 bg-black bg-opacity-40 flex mt-0 md:mt-20 items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] md:w-[400px] relative">

        <button onClick={handleClose} className="absolute top-2 right-4 text-2xl">&times;</button>

        <h2 className="text-2xl font-bold text-black text-center mb-4">
          {isSignup ? "Create Account" : "Login to Account"}
        </h2>

        <form className="space-y-3">
          {isSignup && (
            <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md" />
          )}
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
          {isSignup && (
            <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md" />
          )}

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        {/* Social Icons for signup */}
        {isSignup && (
          <>
            <p className="text-center text-sm text-gray-600 my-3">Or sign up with</p>
            <div className="flex justify-center gap-3 mb-4">
              <SocialIcon icon={<FaGoogle />} title="Google" />
              <SocialIcon icon={<FaFacebookF />} title="Facebook" />
              <SocialIcon icon={<FaGithub />} title="GitHub" />
              <SocialIcon icon={<FaLinkedinIn />} title="LinkedIn" />
            </div>
          </>
        )}

        <p className="text-center mt-2 text-sm text-gray-700">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
          <button onClick={() => setIsSignup(!isSignup)} className="text-green-600 underline">
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon, title }) => (
  <button
    title={title}
    className="p-2 rounded-full bg-gray-100 hover:bg-green-100 text-xl shadow"
  >
    {icon}
  </button>
);

export default LoginModal;