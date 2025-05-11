import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-20 px-16 flex flex-col items-center">
      {/* Logo */}
      <img
        src="/assets/image/logo.svg"
        alt="Ten CodeHub"
        className="h-20 mb-8"
      />

      {/* Corporate Address */}
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center mb-1 text-green-700 font-semibold">
          <i className="fas fa-map-marker-alt mr-2"></i>
          Corporate & Communications Address:
        </div>
        <div className="text-gray-700 text-sm">
          A-143, 7th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh (201305)
        </div>
      </div>

      {/* Registered Address */}
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center mb-1 text-green-700 font-semibold">
          <i className="fas fa-map-marker-alt mr-2"></i>
          Registered Address:
        </div>
        <div className="text-gray-700 text-sm">
          K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautam Buddh Nagar, Uttar Pradesh, 201305
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-5 my-4">
        <a href="#" className="text-gray-600 hover:text-green-700 text-2xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-gray-600 hover:text-green-700 text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-600 hover:text-green-700 text-2xl"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="text-gray-600 hover:text-green-700 text-2xl"><i className="fab fa-x-twitter"></i></a>
        <a href="#" className="text-gray-600 hover:text-green-700 text-2xl"><i className="fab fa-youtube"></i></a>
      </div>

      {/* App Store Buttons */}
      <div className="flex justify-center gap-3 my-4">
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
        </a>
        <a href="#">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
        </a>
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
