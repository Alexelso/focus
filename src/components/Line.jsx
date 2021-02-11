import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Line = () => {
  return <StyledLine className="line" />;
};

const StyledLine = styled (motion.div)`
    width: 5%;
    height: 0.3rem;
    background: #23d997;
    margin-top: 1rem;
`;

export default Line;
