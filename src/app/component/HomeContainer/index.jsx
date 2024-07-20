import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeBody = () => {
  return (<div>
    <HomeContainer>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 10 }}>
        Welcome to My Portfolio
      </motion.h1>
    </HomeContainer>
    <p>I'm so happy you're here. Explore my love for Product, UI/UX and Web Design as you journey through my 
    work. Please get in touch if you have any inquiries or suggestions for a collaborative project. I'm 
    grateful you stopped by!</p>
    </div>
  );
};


const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;
