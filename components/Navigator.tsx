import React from 'react';
import styled from 'styled-components';

export const Navigator = () => {
  return (
    <Wrapper>
      <Container>
        <Linky>Linky™</Linky>
        <Action>
          Personal profile on the Web, and{' '}
          <strong>Damn this thing rocks!</strong>
        </Action>
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

const Action = styled.span`
  font-size: 1.05rem;
  font-weight: 300;
`;
