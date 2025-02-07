"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Creative Digital Marketing Agency in Athens, Georgia | Athens Creative Co</title>
        <meta name="description" content="Athens Creative Co provides creative marketing and AI-driven digital solutions to businesses in Athens, Georgia, and surrounding areas. Specializing in SEO, social media, and web design." />
        <meta name="keywords" content="Marketing Agency Athens Georgia, Creative Marketing Athens, Digital Marketing Georgia, Local Marketing Athens, SEO Athens Georgia, Social Media Athens" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Creative Digital Marketing Agency in Athens, Georgia | Athens Creative Co" />
        <meta property="og:description" content="Athens Creative Co provides creative marketing and AI-driven digital solutions to businesses in Athens, Georgia, and surrounding areas. Specializing in SEO, social media, and web design." />
        <meta property="og:image" content="https://athenscreativeco.com/favicon.ico" />
        <meta property="og:url" content="https://athenscreativeco.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative Digital Marketing Agency in Athens, Georgia | Athens Creative Co" />
        <meta name="twitter:description" content="Athens Creative Co provides creative marketing and AI-driven digital solutions to businesses in Athens, Georgia, and surrounding areas. Specializing in SEO, social media, and web design." />
        <meta name="twitter:image" content="https://athenscreativeco.com/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://athenscreativeco.com" />

        {/* Favicon for Tab Icon */}
        <link rel="icon" href="https://athenscreativeco.com/favicon.ico" />

        {/* Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Athens Creative Co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Athens",
                "addressRegion": "GA",
                "postalCode": "30601"
              },
              "url": "https://athenscreativeco.com",
              "telephone": "+1-706-343-7446",
              "description": "Athens Creative Co provides creative marketing and AI-driven digital solutions to businesses in Athens, Watkinsville, and surrounding areas. Specializing in SEO, social media, and web design.",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.951935",
                "longitude": "-83.357567"
              },
              "openingHours": "24/7",
              "areaServed": ["Athens", "Watkinsville", "Surrounding Areas"]
            })
          }}
        />
      </Head>

      <div className="min-h-screen relative">
        <Navbar />
        <Hero />
        <ProductsGrid />
        <TeamSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}