import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      <Link>The Linkkky team</Link>
      <Divider />
      <Link>Waitlist</Link>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: 64px;
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    margin-top: 32px;
  }
`;

const Link = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  transition: color 0.2s ease-in-out;

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.65);
  }
`;

const Divider = styled.div`
  height: 14px;
  width: 2px;
  margin-right: 16px;
  background-color: rgba(0, 0, 0, 0.4);
`;
