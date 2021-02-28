import React from 'react';
import styled from 'styled-components';

import chromeAppIcon from '@/assets/chrome.webp';
import clubhouseAppIcon from '@/assets/clubhouse.webp';

export const MainSection: React.FC = ({ children }) => {
  return (
    <Main>
      <IllustWrapper>
        <IllustContainer>
          <ChromeAppIcon src={chromeAppIcon} />
          <ClubhouseAppIcon src={clubhouseAppIcon} />
          <DummyTextContainer>
            <DummyTextOne />
            <DummyTextTwo />
          </DummyTextContainer>
        </IllustContainer>
      </IllustWrapper>
      <Content>
        <Title>
          클럽하우스 프로필을
          <br />
          <span>링크 하나로</span>
          <br />
          웹으로 공유하세요 🚀
        </Title>
        <Description>
          닉네임을 말하면서 스스로를 홍보하는 것보다,
          <br />
          <strong>프로필 링크를 주면 팔로우당할 확률이 높다는 것,</strong>
          <br />
          알고 계셨나요!
        </Description>
        {children}
      </Content>
    </Main>
  );
};

const Main = styled.div`
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
  margin-top: 24px;
  max-width: 474px;
  font-size: 22px;
  line-height: 1.4;
`;

const IllustWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const IllustContainer = styled.div`
  position: relative;
`;

const ChromeAppIcon = styled.img`
  width: 246px;
  height: 246px;
  background-color: white;
  box-shadow: 16px 32px 67px -15px rgba(255, 0, 0, 0.14);
  border-radius: 58px;
  position: absolute;
  top: 184px;
  right: 155px;
`;

const ClubhouseAppIcon = styled.img`
  width: 246px;
  height: 246px;
  background-color: #adadad;
  box-shadow: -16px 32px 48px rgba(0, 0, 0, 0.25);
  border-radius: 58px;
  position: absolute;
  top: 0;
  right: 0;
`;

const DummyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 305px;
  right: 0;
`;

const DummyTextOne = styled.div`
  width: 276px;
  height: 42px;
  background: #ffffff;
  box-shadow: -8px 8px 36px rgba(0, 0, 0, 0.14);
  border-radius: 32px;
`;

const DummyTextTwo = styled.div`
  margin-top: 12px;
  width: 178px;
  height: 42px;
  background: #ffffff;
  box-shadow: -8px 8px 36px rgba(0, 0, 0, 0.14);
  border-radius: 32px;
`;
