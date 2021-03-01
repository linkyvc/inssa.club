import React from 'react';
import styled from 'styled-components';

import { MainIllust } from './MainIllust';

export const MainSection: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <MainIllust />
        <Content>
          <Title>
            클럽하우스 프로필을
            <br />
            <span>링크 하나로</span>
            <br />
            웹으로 공유하세요 🚀
          </Title>
          <Description>
            닉네임을 외치면서 스스로를 홍보하는 것보다,
            <br />
            <strong>
              프로필 링크를 츤츤하게 건네면{' '}
              <span style={{ display: 'inline-block' }}>
                팔로우당할 확률이 높다는 것,
              </span>
            </strong>
            <br />
            알고 계셨나요!
          </Description>
          <Description>
            사실 여러분의 프로필은 이미 여기 있어요.
            <br />
            사용자 이름만 입력하면 바로 볼 수 있죠!
          </Description>
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
  margin: 120px 0;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    margin: 120px auto;
    width: calc(100% - 60px);
  }

  @media (max-width: 850px) {
    margin: 0px auto;
    flex-direction: column-reverse;
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
    margin-bottom: 24px;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 56px;
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
