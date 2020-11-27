import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <Hide>
          <h2>We work to make</h2>
        </Hide>
        <Hide>
          <h2>your <span>dreams</span> come</h2>
        </Hide>
        <Hide>
          <h2>true</h2>
        </Hide>
        <p>
          Contact us for any photography or videography ideas that you have we have a bunch of professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
