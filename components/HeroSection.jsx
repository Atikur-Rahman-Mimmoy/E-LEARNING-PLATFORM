

import React from 'react';
import Button from '@mui/material/Button';

const HeroSection = () => {
  return (
    <div className="text-center py-20 bg-primary text-white">
      <h1 className="text-5xl font-serif mb-4">Welcome to Our E-Learning Platform</h1>
      <p className="text-xl font-sans mb-8">Learn from the best courses online.</p>
      <Button variant="contained" color="secondary">Get Started</Button>
    </div>
  );
};

export default HeroSection;
