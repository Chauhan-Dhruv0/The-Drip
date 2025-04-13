import React from 'react';
import { Link } from 'react-router-dom';

function Salepage() {
  return (
    <div className="relative h-screen">
      <div className="h-full relative">
        <img
          src="../assets/page-assets/boutique.jpg"
          alt="Hero"
          className="w-full h-full object-cover object-center" // Ensures the image is centered and covers the container
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-5xl font-bold mb-4">50% OFF</h2>
          <p className="text-2xl mb-8 tracking-wide" style={{ wordSpacing: "5px" }}>
            On All Summer Clothes
          </p>
          <button className="text-sm text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition duration-500">
            <Link to="/collections/all">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Salepage;
