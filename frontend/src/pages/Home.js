import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Welcome to RideNow</h1>
          <p className="text-xl text-gray-700 mb-8">Your modern ride-sharing platform</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">🚗 Easy Booking</h2>
              <p className="text-gray-600">Book a ride in seconds with our intuitive interface</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">💰 Affordable Prices</h2>
              <p className="text-gray-600">Transparent pricing with no hidden charges</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">👥 Safe & Secure</h2>
              <p className="text-gray-600">Verified drivers and 24/7 customer support</p>
            </div>
          </div>

          <div className="space-x-4">
            <Link
              to="/register"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold border-2 border-blue-600 hover:bg-blue-50"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;