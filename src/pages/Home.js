import React from 'react';

import Hero from '../sections/Hero';
import FeaturedServices from '../sections/FeaturedServices';
import FAQ from '../sections/FAQ';
import Services from '../sections/Services';
import Facts from '../sections/Facts';
import HowItWorks from '../sections/HowItWorks';
import About from '../sections/About';
import Pricing from '../sections/Pricing';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <FAQ />
      <Services />
      <Facts />
      <HowItWorks />
      <About />
      <Pricing />
    </div>
  );
};

export default Home;
