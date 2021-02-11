import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';
import {Hide} from '../styles';

const ContactUs = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide style={{height: 'auto'}}>
          <motion.h2>
            Get in Touch.
          </motion.h2>
        </Hide>
      </Title>
      <Hide style={{height: 'auto'}}>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Send us a Message</h2>
        </Social>
      </Hide>
      <Hide style={{height: 'auto'}}>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Send an email</h2>
        </Social>
      </Hide>
      <Hide style={{height: 'auto'}}>
        <Social variants={titleAnim}>
          <Circle />
          <h2>social media</h2>
        </Social>
      </Hide>
    </ContactStyled>
  );
};

const ContactStyled = styled (motion.div)`
  padding: 5rem 10rem;
  color: #fff;
  min-height: 90vh;
  background: #1b1b1b;
  @media(max-width: 1500px){
   padding: 2rem;
   margin-top: 5rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color:#585656;
  background: #1b1b1b;
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background:#585656;
`;

const Social = styled (motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  h2{
    margin-left: 2rem;
  }
  @media(max-width: 1500px){
    h2{
      font-size: 1.8rem;
    }
  }
`;

export default ContactUs;
