import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col space-y-4 max-w-md w-full">
        <input type="text" className="p-2 border border-gray-300 rounded" placeholder="Name" />
        <input type="email" className="p-2 border border-gray-300 rounded" placeholder="Email" />
        <textarea className="p-2 border border-gray-300 rounded" placeholder="Message" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
