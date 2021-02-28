import React from 'react';
import styled from 'styled-components';

import { MainSection } from '@/components/home/main/MainSection';

const Home = () => {
  return (
    <Container>
      <MainSection></MainSection>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
`;
