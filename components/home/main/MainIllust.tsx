import React from 'react';
import styled from 'styled-components';

import chromeAppIcon from '@/assets/chrome.webp';
import clubhouseAppIcon from '@/assets/clubhouse.webp';

export const MainIllust: React.FC = () => (
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
);

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
