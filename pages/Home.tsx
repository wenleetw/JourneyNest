import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Destinations />
      <Features />
      <HowItWorks />
      <Testimonials />
    </main>
  );
};

export default Home;

