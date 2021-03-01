import React from 'react';
import styled from 'styled-components';

import { MainIllust } from './MainIllust';

export const MainSection: React.FC = ({ children }) => {
  return (
    <Main>
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
            프로필 링크를 츤츤하게 건네면 팔로우당할 확률이 높다는 것,
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
    </Main>
  );
};

const Main = styled.div`
  margin: 120px 0;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
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
`;

const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  max-width: 474px;
  font-size: 18.5px;
  line-height: 1.4;
`;
