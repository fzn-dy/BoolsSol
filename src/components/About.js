import React from 'react';

const About = () => {
  return (
    <section id="about" className="h-screen bg-[#1B7A43] flex items-center justify-center">
      {/* Div container dengan bayangan, garis pinggir, dan gradasi background */}
      <div className="w-10/12 md:w-8/12 h-4/5 bg-gradient-to-b from-[#998300] from-10% via-30% to-[#10562E] to-90% shadow-2xl border-4 border-[#10562e] rounded-3xl flex flex-col md:flex-row p-8 md:p-16">
        {/* Sisi kiri untuk header, logo Telegram dan X, serta deskripsi */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start">
          {/* Logo Telegram dan X */}
          <div className="flex space-x-4 mb-4">
            <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
              <i className="fab fa-telegram-plane"></i> {/* Icon Telegram */}
            </a>
            <a href="https://x.com/your-x" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
              <i className="fab fa-x-twitter"></i> {/* Icon X */}
            </a>
          </div>

          {/* Header About Us dan Deskripsi */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-base md:text-lg leading-relaxed text-justify md:text-justify text-white">
            We are a team of dedicated professionals committed to delivering top-quality services 
            to our clients. With years of experience in various industries, we are here to help you succeed. 
            Our mission is to provide innovative solutions tailored to your business needs, 
            ensuring sustainable growth and customer satisfaction.
          </p>
        </div>

        {/* Sisi kanan untuk gambar logo perusahaan */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <img src="./assets/bisonish2.gif" alt="Company Logo" className="w-2/3 md:w-3/4 h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default About;
