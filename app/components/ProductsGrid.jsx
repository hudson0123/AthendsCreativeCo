import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

export default function ProductsGrid() {
    const products = [
        { name: "SEO Optimization", icon: "./seo-icon.svg", description: "Boost your website's search engine rankings and visibility." },
        { name: "Community Engagement", icon: "./social-media-icon.svg", description: "Foster meaningful connections with your audience on social platforms." },
        { name: "Content Creation", icon: "./content-icon.svg", description: "Craft engaging and high-quality content tailored to your brand." },
        { name: "Google Business Optimization", icon: "./google-icon.svg", description: "Optimize your Google Business profile for increased local visibility and customer engagement." },
        { name: "Web Development", icon: "./web-dev-icon.svg", description: "Build modern, responsive, and high-performing websites." },
        { name: "Missed Call Textback", icon: "./callback-icon.svg", description: "Ensure no lead is left behind with instant missed-call responses." },
        { name: "Personalized Chatbot", icon: "./chatbot-icon.svg", description: "Provide instant support and engagement with a custom chatbot." },
        { name: "Email Marketing", icon: "./email-icon.svg", description: "Reach your audience effectively with targeted email campaigns." }
    ];

    return (
        <>
            <div id="services"></div>
            <div className="text-left ml-12 sm:ml-24 mt-52 mb-12">
                <motion.h2
                    className="text-4xl sm:text-6xl font-normal font-mono text-black"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Products
                </motion.h2>
                <motion.hr
                    className="w-64 sm:w-80 h-1 my-2 bg-[#BA0C2F] rounded-sm"
                    initial={{ width: 0 }}
                    whileInView={{ width: "330px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                />
            </div>
            <div className="flex justify-center items-center mb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="relative group flex flex-col items-center text-center p-4 rounded-lg transition-all duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                delay: Math.random() * 0.5,
                                duration: 0.8,
                                ease: 'easeOut'
                            }}
                        >
                            <Image
                                src={product.icon}
                                alt={product.name}
                                width={64} // Matches "w-16" (16 * 4px)
                                height={64} // Matches "h-16"
                                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 group-hover:w-8 group-hover:pb-8 transition-all duration-500"
                            />
                            <p className="text-lg sm:text-xl font-normal font-mono opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                {product.name}
                            </p>
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#F5F5F5] bg-opacity-0 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-sm sm:text-base text-gray-600 group-hover:mt-5 transition-all duration-500">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
