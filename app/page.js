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