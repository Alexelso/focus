import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import {motion} from 'framer-motion';
import {aboutPageAnim} from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutUS = () => {
  return (
    <motion.div
      variants={aboutPageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />;
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUS;
