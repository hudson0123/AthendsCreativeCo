"use client"

import React, { useState } from 'react';

export default function Work() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [buttonText, setButtonText] = useState('Send Message');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    setTimeout(() => {
      setButtonText('Send Message');
      alert('Message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-between bg-[#F5F5F5]">
      <nav className="bg-opacity-35 text-black p-4 fixed top-0 left-0 w-full z-50">
        <div className="max-w-8xl px-3 mx-auto flex justify-end items-center">
          <ul className="flex space-x-6 text-xl">
            <li>
              <a href="./#about" className="hover:text-black text-[#BA0C2F]">
                About
              </a>
            </li>
            <li>
              <a href="./#services" className="hover:text-black text-[#BA0C2F]">
                Services
              </a>
            </li>
            <li>
              <a href="/work" className="hover:text-black text-[#BA0C2F]">
                Work
              </a>
            </li>
            <li>
              <a
                href="./#connect"
                className="bg-[#BA0C2F] text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 mt-10">
        <h1 className="text-5xl font-bold font-mono text-black mb-4">Partner With Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Be a part of our initial client base and receive free or significantly discounted
          services. Together, we’ll build something incredible for your business while
          showcasing our expertise in delivering top-tier solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-8 py-5 flex-none">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold font-mono text-black mb-4">Why Partner With Us?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Joining as an early client means gaining access to premium services at reduced
            costs. We aim to build long-term relationships with our partners while showcasing
            our skills and delivering tangible results for your business.
          </p>
          <p className="text-lg text-gray-700">
            For more information, feel free to contact us:
          </p>
          <p className="text-lg font-bold text-[#BA0C2F] mt-4">
            📧 Email: hudsonodonnell2004@gmail.com <br />
            📞 Phone: (706) 343-7446
          </p>
        </div>
        <form
          id="connect"
          className="space-y-4 border border-gray-200 rounded-lg shadow-lg p-6 bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold font-mono text-black mb-4">Get In Touch</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md py-2 px-4 bg-gray-100 text-gray-800 outline-[#BA0C2F] focus:bg-transparent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md py-2 px-4 bg-gray-100 text-gray-800 outline-[#BA0C2F] focus:bg-transparent"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md py-2 px-4 bg-gray-100 text-gray-800 outline-[#BA0C2F] focus:bg-transparent"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md py-2 px-4 bg-gray-100 text-gray-800 outline-[#BA0C2F] focus:bg-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#BA0C2F] text-white font-bold py-2 px-4 rounded-md hover:bg-[#900921] transition duration-300"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
