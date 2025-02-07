import React, { useState } from 'react';

export default function ContactForm() {

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
        <>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 justify-between items-center py-16 px-6 md:px-16 pb-[5vh]">
                {/* Title and Info Section */}
                <div className="w-full flex flex-col justify-center items-start text-left mb-12 md:mb-0">
                    <h2 className="text-4xl sm:text-6xl font-thin font-mono text-[#BA0C2F] leading-tight mb-6">
                        Let's Connect.
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 w-1/2">
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

                {/* Contact Form Section */}
                <div className="w-full bg-white shadow-lg rounded-lg p-6 sm:p-8">
                    <form id="connect" className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            id="nameInput"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-b-2 rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm sm:text-base outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
                            required
                        />
                        <input
                            id="emailInput"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm sm:text-base outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
                            required
                        />
                        <input
                            id="subjectInput"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm sm:text-base outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
                            required
                        />
                        <textarea
                            id="messageInput"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-md px-4 py-3 bg-gray-100 text-gray-800 text-sm sm:text-base outline-[#BA0C2F] focus:bg-white focus:ring-2 focus:ring-[#BA0C2F]"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#BA0C2F] text-white font-semibold rounded-md hover:bg-[#9a0a26] transition-all duration-300 text-sm sm:text-base"
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
};