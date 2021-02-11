import React from 'react';
import home1 from '../img/home1.png';
import {About, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          We have a bunch of professionals with amazing skills ready to materialize any photography or videograpy ideas you might have
          {' '}
        </motion.p>
        <motion.button variants={fade}>
          Contact us
        </motion.button>
      </Description>
      <Wave />
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

const Styledh2 = styled (motion.h2)`

`;

export default AboutSection;
