"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

export default function Work() {
  const [formSubmitted, setFormSubmitted] = useState(false);  // Move this declaration up
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const [buttonText, setButtonText] = useState('Send Message');
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => setButtonText("Submit"), 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formSubmitted) {
      setButtonText("Sending...");

      emailjs.send('service_nvez149', 'template_pfysblt', formData, '7Xniu4oQAodcmMsLw')
        .then((result) => {
          console.log(result.text);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setButtonText("Email Sent!");
          setFormSubmitted(true);
        }, (error) => {
          console.log(error.text);
          setButtonText("Failed to Send");
        });
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    { question: "What services do you offer?", answer: "We provide digital marketing, SEO, and AI-driven solutions tailored to your business needs." },
    { question: "How can I become a partner?", answer: "Simply reach out to us through the contact form or via email and phone to discuss partnership opportunities." },
    { question: "What makes you different from competitors?", answer: "Our personalized approach and integration of AI tools for efficiency set us apart from others." }
  ];

  return (
    <div className="mt-10 overflow-hidden flex flex-col items-center justify-between bg-[#F5F5F5]">
      <Navbar />
      <div className="text-center mt-24 z-10">
        <motion.h2
          className="text-4xl sm:text-6xl font-bold font-mono z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Partner With Us
        </motion.h2>
        <motion.hr
          className="w-[35vw] h-1 my-2 bg-[#BA0C2F] border-1 rounded-sm z-10"
          initial={{ width: 0 }}
          whileInView={{ width: "35vw" }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        ></motion.hr>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 mt-10">
        <div id="about"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-8 py-5 flex-none">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-black mb-4">FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <motion.div
                className="cursor-pointer text-lg font-semibold text-[#BA0C2F]"
                onClick={() => toggleFaq(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {faq.question}
              </motion.div>
              {expandedFaq === index && (
                <motion.div
                  className="mt-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <form
          id="connect"
          className="space-y-4 border border-gray-200 rounded-lg shadow-lg p-6 bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-black mb-4">Get In Touch</h2>
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