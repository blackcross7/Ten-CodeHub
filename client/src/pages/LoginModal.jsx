import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const LoginModal = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const { login, signup, error, isLoading } = useAuthStore();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isSignup) {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        await signup({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword  // Add confirmPassword to the request
        });
       
        navigate('/');
      } else {
        await login({
          email: formData.email,
          password: formData.password
        });
        
        navigate('/');
      }
    } catch (err) {
      // Error is already set in the auth store, no need to do anything here
      console.error('Authentication error:', err.response?.data?.message || err.message);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen inset-0  flex  items-center justify-center z-50 bg-[url(https://images.hdqwalls.com/download/graph-web-abstract-4k-hn-1920x1080.jpg)]">
      <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-600 p-6 rounded-2xl shadow-xl w-[90%] md:w-2/3 lg:w-1/3 relative mt-16">
        <button onClick={handleClose} className="absolute top-2 right-4 text-2xl text-white ">&times;</button>

        <h2 className="text-2xl font-bold text-white text-center mb-4">
          {isSignup ? "Create Account" : "Login to Account"}
        </h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {isSignup && (
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-[50%] mx-auto flex justify-center  bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 disabled:bg-blue-300"
          >
            {isLoading ? 'Processing...' : (isSignup ? 'Create Account' : 'Login')}
          </button>
        </form>

        {isSignup && (
          <>
            <p className="text-center text-sm text-gray-200 my-3">Or sign up with</p>
            <div className="flex justify-center gap-3 mb-4">
              <SocialIcon icon={<FaGoogle />} title="Google" />
              <SocialIcon icon={<FaFacebookF />} title="Facebook" />
              <SocialIcon icon={<FaGithub />} title="GitHub" />
              <SocialIcon icon={<FaLinkedinIn />} title="LinkedIn" />
            </div>
          </>
        )}

        <p className="text-center mt-2 text-sm text-gray-300">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-400 font-medium hover:underline hover:text-blue-500 hover:scale-105 transition-transform duration-200"
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon, title }) => (
  <button
    type="button"
    title={title}
    className="p-2 rounded-full bg-gray-100 hover:bg-green-100 text-xl shadow"
  >
    {icon}
  </button>
);

export default LoginModal;