import React, {useEffect} from 'react';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
  sliderContainer,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  fadeSections,
} from '../animation';
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  const [element, controls] = useScroll ();
  const [element2, controls2] = useScroll ();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{background: '#fff'}}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Boxer</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/the-boxer">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element}
        variants={fadeSections}
        initial="hidden"
        animate={controls}
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fadeSections}
        initial="hidden"
        animate={controls2}
      >
        <h2>The Lover</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/the-lover">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="good times" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled (motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
  padding: 1rem 0rem
}
@media(max-width: 1300px){
   padding: 2rem 2rem;
  }
`;

const Movie = styled (motion.div)`
  padding-bottom: 10rem;
  .line{
  height: 0.5rem;
  background: #23d997;
  margin-bottom: 3rem;
}
img{
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
`;

const Hide = styled.div`
overflow: hidden;
`;

const Frame1 = styled (motion.div)`
position: fixed;
left: 0;
top: 0;
background: #fffebf;
width: 100%;
height: 100vh;
z-index: 2;
`;

const Frame2 = styled (Frame1)`
background: #ff8efb;
`;

const Frame3 = styled (Frame1)`
background: #8ed2ff;
`;

const Frame4 = styled (Frame1)`
background: #23d997;
`;

export default OurWork;
