import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {waveAnim} from '../animation';

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={waveAnim}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#1bd38c"
        strokeOpacity="0.5"
        strokeWidth="10"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
position: absolute;
left: 0;
z-index: 1;
pointer-events: none;
@media(max-width: 1500px){
  top: 30%;
}
`;
export default Wave;
