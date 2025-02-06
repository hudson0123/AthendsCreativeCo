import React from 'react'

export default function ProductsGrid() {
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

    return (
        <>
            <div id="services"></div>
            <div className="text-left ml-12 sm:ml-24 mt-52 mb-12">
                <h2 className="text-4xl sm:text-6xl font-bold font-mono text-black">Products</h2>
                <hr className="w-64 sm:w-80 h-1 my-2 bg-[#BA0C2F] border-1 rounded-sm" />
            </div>
            <div className="flex justify-center items-center mb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative group flex flex-col items-center text-center p-4 border border-[#F5F5F5] rounded-lg transition-all duration-500"
                        >
                            <img
                                src={product.icon}
                                alt={product.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 group-hover:w-8 group-hover:pb-8 transition-all duration-500"
                            />
                            <p className="text-lg sm:text-xl font-bold font-mono opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                {product.name}
                            </p>
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#F5F5F5] bg-opacity-0 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-sm sm:text-base text-gray-600 group-hover:mt-5 transition-all duration-500">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}