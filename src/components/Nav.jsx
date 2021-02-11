import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Nav = () => {
  const {pathname} = useLocation ();
  console.log (pathname === '/');

  const [navStyle, setNavStyle] = useState ('rgba(40, 40, 40, 1)');
  useEffect (() => {
    window.addEventListener ('scroll', navOpacity);
  });

  const navOpacity = () => {
    if (window.scrollY > 200) {
      setNavStyle ('rgba(40, 40, 40, 0.5)');
    } else {
      setNavStyle ('rgba(40, 40, 40, 1)');
    }
  };
  return (
    <StyledNav style={{background: `${navStyle}`}}>
      <h1><Link id="logo" to="/">Focus</Link></h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/' ? '115%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/work">2. Our work</Link>
          <Line
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/work' ? '115%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/contact' ? '115%' : '0%'}}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: rgba(40, 40, 40, 1);
  position: sticky;
  top: 0;
  z-index: 2000;
  transition: background 0.6s ease-in-out;
  backdrop-filter: blur(10px);
a{
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    list-style: none;
}
#logo{
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;
    font-weight: lighter;
}
li{
    padding-left: 10rem;
    position: relative;
}
@media(max-width: 1300px){
   flex-direction: column;
   padding: 2rem 1rem;
   ul{
     padding: 2rem;
     width: 100%;
     justify-content: space-around;
     li{ 
       padding: 0;
     }
   }
  }
`;

const Line = styled (motion.div)`
    height: 0.3rem;
    background: #23d997;
    margin-top: 1rem;
`;

export default Nav;
