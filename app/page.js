"use client"

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const adjectives = ["Unique", "Creative", "Dynamic", "Modern", "Strategic", "Authentic", "Better"];
  const [currentAdjective, setCurrentAdjective] = useState(adjectives[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentAdjective(prev => {
          const nextIndex = (adjectives.indexOf(prev) + 1) % adjectives.length;
          return adjectives[nextIndex];
        });
        setFade(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY; 
    if (currentScrollY > lastScrollY) {
      setShowNav(false); // Hide navbar on scroll down
      setShowScrollButton(true);
    } else {
      setShowNav(true); // Show navbar on scroll up
      setShowScrollButton(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const teamMembers = [
    {
      name: "Hudson O'Donnell",
      title: "Founder & CEO",
      description: "Hudson leads the team with a visionary approach, combining strategic thinking and innovative solutions to deliver exceptional results.",
      image: "./team-member-1.jpeg",
    },
    {
      name: "Jaci Thompson",
      title: "Creative Director",
      description: "Jaci brings a creative flair to every project, ensuring each design and campaign is both visually stunning and impactful.",
      image: "./team-member-2.jpeg",
    },
  ];

  const products = [
    { name: "SEO Optimization", icon: "./seo-icon.svg", description: "Boost your website's search engine rankings and visibility." },
    { name: "Community Engagement", icon: "./social-media-icon.svg", description: "Foster meaningful connections with your audience on social platforms." },
    { name: "Content Creation", icon: "./content-icon.svg", description: "Craft engaging and high-quality content tailored to your brand." },
    { name: "Google Business Optimization", icon: "./google-icon.svg", description: "Gain valuable insights with comprehensive analytics and reports." },
    { name: "Web Development", icon: "./web-dev-icon.svg", description: "Build modern, responsive, and high-performing websites." },
    { name: "Missed Call Textback", icon: "./callback-icon.svg", description: "Ensure no lead is left behind with instant missed-call responses." },
    { name: "Personalized Chatbot", icon: "./chatbot-icon.svg", description: "Provide instant support and engagement with a custom chatbot." },
    { name: "Email Marketing", icon: "./email-icon.svg", description: "Reach your audience effectively with targeted email campaigns." }
  ];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [buttonText, setButtonText] = useState("Submit");

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


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative bg-[#F5F5F5]">
      {/* Logo positioned at the top left */}
      <div className="absolute top-1 left-1">
        <a href="."><img src="./logo.ico" className="w-[150px] h-auto object-contain" alt="Logo" /></a>
      </div>
      {/* Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: '99999', behavior: 'smooth' })}
        className={`fixed bottom-4 left-4 p-4 bg-[#BA0C2F] text-white font-bold rounded-md shadow-lg transition-all duration-500 ${showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } hover:bg-red-700`}
        style={{ zIndex: 50 }}
      >
        Get a free quote &rarr;
      </button>


      <nav
        className={`bg-opacity-35 text-black p-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-8xl px-3 mx-auto flex justify-end items-center">
          <ul className="flex space-x-6 text-xl">
            <li>
              <a href="#about" className="hover:text-black text-[#BA0C2F]">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-black text-[#BA0C2F]">
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
                href="#connect"
                className="bg-[#BA0C2F] text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Grid Layout with Image */}
      <div className="flex justify-center items-center mb-20">
        <div className="grid grid-cols-2 max-w-7xl w-full h-[92vh]">
          <div className="p-6 rounded-lg flex flex-col mt-20">
            <p className="text-7xl font-[Helvetica] font-bold mt-20 mb-8">
              A <span className={`inline-block transition-all duration-1000 transform text-[#BA0C2F] ${fade ? 'opacity-0 translate-x-10' : 'opacity-100 -translate-x-0'}`}>{currentAdjective}</span><br />  Approach to Digital<br /> Marketing.
            </p>
            <hr className="w-32"></hr>
            <p className="text-xl font-sans mt-6 w-8/12 text-gray-500">Combining creativity and AI to craft innovative digital solutions that elevate businesses to new heights.</p>
          </div>
          <div className="w-[50vw] h-[93vh] mt-[8vh]">
            <img
              src="./home-stock.jpg"
              alt="Placeholder Image"
              className="w-full h-[92vh] object-cover filter grayscale"
            />
          </div>
        </div>
      </div>

      <div id="services"></div>
      {/* Title */}
      <div className="text-left ml-48 mt-52 mb-12">
        <h2 className="text-6xl font-bold font-mono text-black ">Products</h2>
        <hr className="w-80 h-1 my-2 bg-[#BA0C2F] border-1 rounded-sm"></hr>
      </div>
      {/* Products Bar */}
      <div className="flex justify-center items-center mb-32">
        <div className="grid grid-cols-4 gap-x-8 gap-y-20 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center text-center p-4 border border-[#F5F5F5] rounded-lg transition-all duration-500"
            >
              <img src={product.icon} alt={product.name} className="w-20 h-20 mb-4 group-hover:w-8 group-hover:pb-8 transition-all duration-500" />
              <p className="text-lg font-bold font-mono opacity-100 group-hover:opacity-0 transition-opacity duration-500">{product.name}</p>
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#F5F5F5] bg-opacity-0 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-600 group-hover:mt-5 trasition-all duration-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="about"></div>
      {/* Meet the Team Section */}
      <div className="flex justify-center items-center mt-12">
        <div className="text-center mt-24">
          <h2 className="text-6xl font-bold font-mono">Meet the Team</h2>
          <hr className="w-[35vw] h-1 my-2 bg-[#BA0C2F] border-1 rounded-sm"></hr>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-24 max-w-6xl max-h-6xl mx-auto p-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-3/5 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold font-mono mb-2">{member.name}</h3>
            <h4 className="text-xl font-semibold text-gray-600 mb-2">{member.title}</h4>
            <p className="text-lg font-sans text-gray-500 text-center">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-16 px-6 md:px-16 pb-[20vh]">
        {/* Title and Info Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left mb-12 md:mb-0">
          <h2 className="text-7xl font-extrabold font-mono text-[#BA0C2F] leading-tight mb-6">
            Let's Connect.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Have a question or want to work together? Feel free to get in touch with us!
          </p>
          <div className="space-y-4">
            {/* Phone Info */}
            <div className="flex items-center">
              <span className="text-gray-800 text-lg font-semibold">📞 (706) 343-7446</span>
            </div>
            {/* Email Info */}
            <div className="flex items-center">
              <span className="text-gray-800 text-lg font-semibold">📧 hudsonodonnell2004@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <form id="connect" className="space-y-6" onSubmit={handleSubmit}>
            <input
              id="nameInput"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
              required
            />
            <input
              id="emailInput"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
              required
            />
            <input
              id="subjectInput"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
              required
            />
            <textarea
              id="messageInput"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-gray-100 text-gray-800 text-sm outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#BA0C2F] text-white font-semibold rounded-md hover:bg-[#9a0a26] transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
