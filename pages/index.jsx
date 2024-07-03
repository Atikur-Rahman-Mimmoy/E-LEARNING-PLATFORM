import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Features />
      <Testimonials />
    </MainLayout>
  );
};

export default HomePage;
