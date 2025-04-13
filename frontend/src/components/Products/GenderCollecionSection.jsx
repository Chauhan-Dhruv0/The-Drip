import React from "react";
import { Link } from 'react-router-dom'
import WomenCollections from '/assets/page-assets/women.jpg'
import MenCollections from '/assets/page-assets/MEN.webp'

function GenderCollecionSection() {
  return (
    <section className="py-16 px-6 lg:px-8">
  <div className="container mx-auto flex flex-col md:flex-row gap-12">
    
    {/* Women's Collection */}
    <div className="relative flex-1">
      <img
        src={WomenCollections}
        alt="Women's Collection"
        className="w-full h-[500px] object-cover rounded-lg"
      />
      <div className="absolute bottom-6 left-6 bg-white bg-opacity-50 p-5 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Women's Collection</h2>
        <Link 
          to="/collections/all?gender=Women" 
          className="text-gray-900 font-medium underline hover:text-gray-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>

    {/* Men's Collection */}
     <div className="relative flex-1">
      <img
        src={MenCollections} 
        alt="Men's Collection"
        className="w-full h-[500px] object-cover rounded-lg"
      />
      <div className="absolute bottom-6 left-6 bg-white bg-opacity-50 p-5 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Men's Collection</h2>
        <Link 
          to="/collections/all?gender=Women" 
          className="text-gray-900 font-medium underline hover:text-gray-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>

  </div>
</section>

  
  );
}

export default GenderCollecionSection;
