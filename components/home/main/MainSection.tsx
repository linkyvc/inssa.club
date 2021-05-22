import React from 'react';
import styled, { keyframes } from 'styled-components';

import HandImage from '@/assets/home/hand.png';
import { Strings } from '@/constants/Strings';

export const MainSection: React.FC = ({ children }) => {
  return (
    <Container>
      <Circle>
        <Hand src={HandImage} />
      </Circle>
      <Title>{Strings.main.title()}</Title>
      <Description>{Strings.main.promotion()}</Description>
      <StartButton>Start in 10 seconds</StartButton>
      <StartDescription>
        No login
        <br />
        No dogecoin
        <br />
        No credit card whatsoever
      </StartDescription>
    </Container>
  );
};

const Container = styled.main`
  padding: 64px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.circle`
  width: 248px;
  height: 248px;
  border-radius: 50%;
  background-image: linear-gradient(to top right, #ffa927, #ffd782);
  overflow: hidden;
`;
const HandWaveKeyframes = keyframes`
  ${0}% {
    transform: rotate(-12deg);
    margin-top: 32px;
  }
  ${50}% {
    margin-top: 22px;
  }
  ${100}% {
    transform: rotate(12deg);
    margin-top: 32px;
  }
`;
const Hand = styled.img`
  height: 236px;
  width: 236px;
  object-fit: contain;
  margin-left: 12px;
  margin-top: 32px;

  animation-name: ${HandWaveKeyframes};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transform-origin: 50% 100%;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 12px;
  font-weight: 900;
  font-size: 5.2rem;
  line-height: 110%;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -2.75px;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  font-size: 18.5px;
  line-height: 1.4;
  text-align: center;
`;

const StartButton = styled.button`
  background-color: black;
  color: rgba(255, 255, 255, 0.9);
  padding: 16px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;
const StartDescription = styled.span`
  margin-top: 16px;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
`;
