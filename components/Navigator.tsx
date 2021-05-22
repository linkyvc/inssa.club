import React from 'react';
import styled from 'styled-components';

const LinkToLinky = 'https://linky.vc';

export const Navigator = () => {
  return (
    <Wrapper>
      <Container>
        <a href={LinkToLinky} target="_blank">
          <Linky>Linky™</Linky>
        </a>
        <a href={LinkToLinky} target="_blank">
          <ActionContainer>
            <ActionText>
              Personal profile on the Web, and{' '}
              <strong>Damn this thing rocks!</strong>
            </ActionText>
            <TriangleRightIcon />
          </ActionContainer>
        </a>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffbd57;
  padding: 12px 0;
`;

const Container = styled.nav`
  margin: 0 auto;
  padding: 0 20px;
  padding-right: 14px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Linky = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ActionText = styled.span`
  font-size: 1.05rem;
  margin-top: 2px;
  font-weight: 300;
`;
const TriangleRightIcon = styled.img.attrs({
  src: 'images/triangle-right.svg',
})``;
