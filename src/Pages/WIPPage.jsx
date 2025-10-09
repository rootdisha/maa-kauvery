import React from 'react';

export default function WIPPage({ title, description }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#9781bc] mb-6">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <p className="text-gray-700">This page is currently under development. Please check back soon for more information.</p>
        </div>
      </div>
    </div>
  );
}