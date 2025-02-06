"use client"

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';

export default function Home() {


  return (
    <div className="min-h-screen relative bg-[#F5F5F5]">

      <Navbar />

      <Hero />

      <ProductsGrid />

      <TeamSection />

      <ContactForm />

    </div>
  );
}
