import React from 'react';
import styled from 'styled-components';

import { Strings } from '@/constants/Strings';

import { MainIllust } from './MainIllust';

export const MainSection: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <MainIllust />
        <Content>
          <Title>{Strings.main.title()}</Title>
          <Description>{Strings.main.promotion()}</Description>
          <Description>{Strings.main.alreadyHere()}</Description>
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Container = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    margin: 0 auto;
    width: calc(100% - 60px);
  }

  @media (max-width: 850px) {
    margin: 0 auto;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  max-width: 500px;

  @media (max-width: 850px) {
    position: unset;
    margin-top: 36px;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 12px;
  font-family: 'Nunito', 'TmoneyRoundWindExtraBold', sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 120%;

  & > span {
    background-color: rgba(251, 205, 28, 0.65);
  }

  @media (max-width: 1100px) {
    font-size: 48px;
  }

  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  font-size: 18.5px;
  line-height: 1.4;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
