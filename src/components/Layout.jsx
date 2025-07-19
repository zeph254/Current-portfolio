import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Sticky Header with glowing border effect */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-blue-900/10">
        <Navbar />
      </header>

      {/* Main Content Area with subtle gradient */}
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950">
        {/* Container with max-width and padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Outlet /> {/* This renders your page content */}
        </div>

        {/* Toast Notifications (styled to match theme) */}
        <ToastContainer 
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="bg-gray-800 border border-gray-700 text-gray-100"
          progressClassName="bg-gradient-to-r from-blue-400 to-emerald-400"
        />
      </main>

      {/* Footer with gradient border */}
      <footer className="bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
}