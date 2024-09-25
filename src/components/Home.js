import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('./assets/bghome.png')" }} // Replace with your image path
    >
      {/* Title */}
      <h2 className="text-white text-5xl font-bold z-10 mb-10 mt-[-100px]">IKI $BOOLSH COKKK!!!</h2>

      {/* Buttons */}
      <div className="z-10 flex space-x-4">
        <button className="bg-blue-900 text-white px-8 py-2 border-2 border-black shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl hover:bg-blue-600">BUY $BOOLSH</button>
        <button className="bg-gray-200 text-black px-8 py-2 border-2 border-black shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl hover:bg-gray-400">ALL $BOOLSH MARKET</button>
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full flex overflow-x-hidden bg-gradient-to-r from-gray-100 to-gray-300 border-t-4 border-b-4 border-gray-500 shadow-lg">
        <div className="py-4 animate-marquee whitespace-nowrap">
          {/* Duplicate the marquee content */}
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>

          {/* Duplicate content for smooth scrolling */}
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
        </div>

        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>

          {/* Duplicate content for smooth scrolling */}
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
          <span className="text-3xl mx-4 text-gray-800 font-bold">$BOOLSH</span>
        </div>
      </div>


    </section>
  );
};

export default Home;
