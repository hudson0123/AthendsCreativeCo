import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing icons

export default function TeamSection() {
    const teamMembers = [
        {
            name: "Hudson O'Donnell",
            title: "Founder & CEO",
            description:
                "Hudson O'Donnell is the Founder and CEO of Athens Creative Co. With a strong background in the technology industry, Hudson combines strategic thinking with a passion for business to deliver innovative solutions that elevate businesses to new heights. He earned his degree from the University of Georgia, where he developed a deep understanding of technology and computer science. Hudson leads his team with a visionary approach, ensuring each project is both impactful and tailored to clients' needs.",
            image: "/team-member-1.jpeg",
            linkedin: "https://www.linkedin.com/in/hudsonlo/", // Replace with actual LinkedIn URL
            instagram: "https://www.instagram.com/hudsonodonnell", // Replace with actual Instagram URL
        },
        {
            name: "Jaci Thompson",
            title: "Creative Director",
            description:
                "Jaci Thompson serves as the Chief Marketing Officer at Athens Creative Co. With a strong background in marketing, Jaci leads the agency's marketing strategies, ensuring that each campaign is both innovative and effective. Her passion for business drives her to deliver impactful results for clients, leveraging her expertise to enhance brand visibility and engagement.",
            image: "/team-member-2.jpeg",
            linkedin: "https://www.linkedin.com/in/jaci-thompson0/", // Replace with actual LinkedIn URL
            instagram: "https://www.instagram.com/jacithompson", // Replace with actual Instagram URL
        },
    ];

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div id="about"></div>
            <div className="flex justify-center  items-center mt-12">
                <div className="text-center mt-24 z-10">
                    <motion.h2
                        className="text-4xl sm:text-6xl font-normal font-mono z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        Meet the Team
                    </motion.h2>
                    <motion.hr
                        className="w-[35vw] h-1 my-2 bg-[#BA0C2F] border-1 rounded-sm z-10"
                        initial={{ width: 0 }}
                        whileInView={{ width: "35vw" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                    ></motion.hr>
                </div>
            </div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto p-8 sm:p-20 z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="group h-96 w-96 [perspective:1000px]"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front face with image */}
                            <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                                {member.image && (
                                    <Image
                                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                                        src={member.image}
                                        alt={member.name}
                                        width={320}
                                        height={320}
                                    />
                                )}
                                <div className="absolute bottom-4 left-4 bg-black/70 text-white rounded-md px-4 py-2">
                                    <h3 className="text-xl font-bold">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm">{member.title}</p>
                                </div>
                            </div>
                            {/* Back face with text */}
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h3 className="text-2xl font-bold mb-4">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm mb-4">
                                        {member.description}
                                    </p>
                                    <div className="flex space-x-4">
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FaLinkedin size={24} />
                                            </a>
                                        )}
                                        {member.instagram && (
                                            <a
                                                href={member.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-pink-600 hover:text-pink-800"
                                            >
                                                <FaInstagram size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}