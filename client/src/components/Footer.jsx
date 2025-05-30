{/*nikita*/}
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-500 border-t py-20 px-16 flex flex-col items-center">
      {/* Logo */}
      <img
        src="/assets/image/logo.svg"
        alt="Ten CodeHub"
        className="h-20 mb-8"
      />

      {/* Corporate Address */}
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center mb-1 text-green-500 font-bold">
          <i className="fas fa-map-marker-alt mr-2"></i>
          Corporate & Communications Address:
        </div>
        <div className="text-gray-900 text-sm font-bold">
          India Accelarator, Noida, Uttar Pradesh (201301)
     </div>
      </div>

      {/* Registered Address */}
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center mb-1 text-green-500 font-bold">
          <i className="fas fa-map-marker-alt mr-2"></i>
          Registered Address:
        </div>
        <div className="text-gray-900 text-sm font-bold">
          India Accelarator, Noida, Uttar Pradesh (201301)
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-5 my-4">
        <a href="#" className="text-gray-800 hover:text-green-700 text-2xl"><i className="fab fa-linkedin"></i></a>
      </div>

      
      {/* Advertise Button */}
      <a
        href="#"
        className="mt-4 bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Advertise with us
      </a>
    </footer>
  );
};

export default Footer;
