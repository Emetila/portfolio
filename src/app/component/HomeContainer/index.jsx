import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {ReactComponent as Image} from '../../asset/Images/img1.svg';
import style from './style.module.css'

export const HomeBody = () => {
  return (<div className={style.bdy}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 10 }}>
        <div className={style.bodybox}>
        <Image className={style.image} />
        <div className={style.titlebox}>
          <h1>Web, UI/UX Designer & Developer</h1>
          <p>I'm delighted you're here. Dive into my love for Product, UI/UX,  Web Design and development as 
            you explore my work. Please feel free to reach out if you have any inquiries or suggestions for a 
            collaborative project. I'm grateful you took the time to stop by.</p>
        </div>
        </div>
      </motion.h1>
    {/* </HomeContainer> */}
    </div>
  );
};


// const HomeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #0C1A1A;
// `;
