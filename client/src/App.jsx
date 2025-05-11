// src/App.js
import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import 'font-awesome/css/font-awesome.min.css';


function AppContent() {
  const location = useLocation();


  // List of routes where Navbar and Footer should be hidden
  const hideLayoutRoutes = ['/login'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && <Navbar />}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
