import React from 'react';
import styled from 'styled-components';

import clubhouseAppIcon from '@/assets/clubhouse.webp';
import linkyIcon from '@/assets/linky.png';
import { ProductColors } from '@/constants/Colors';

export const MainIllust: React.FC = () => (
  <IllustWrapper>
    <IllustContainer>
      <ClubhouseAppIcon src={clubhouseAppIcon} />
      <DummyTextContainer>
        <DummyTextOne />
        <DummyTextTwo />
      </DummyTextContainer>
      <LinkyIcon src={linkyIcon} />
    </IllustContainer>
  </IllustWrapper>
);

const IllustWrapper = styled.div`
  margin-bottom: 36px;
  position: absolute;
  top: 0;
  right: 0;
  height: 415px;

  /* 85% */
  @media (max-width: 950px) {
    height: 366px;
  }

  @media (max-width: 850px) {
    height: auto;
    position: static;
    margin-top: 48px;
    margin-bottom: 16px;
  }

  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;

const IllustContainer = styled.div`
  position: relative;

  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
`;

const AppIcon = styled.img`
  width: 246px;
  height: 246px;
  border-radius: 58px;

  /* 85% */
  @media (max-width: 950px) {
    width: 210px;
    height: 210px;
    border-radius: 52px;
  }

  /* 80% */
  @media (max-width: 600px) {
    width: 198px;
    height: 198px;
    border-radius: 48px;
  }

  /* 60% */
  @media (max-width: 500px) {
    width: 148px;
    height: 148px;
    border-radius: 52px;
    border-radius: 38px;
  }

  @media (max-width: 385px) {
    zoom: 0.7;
  }
`;

const LinkyIcon = styled(AppIcon)`
  background-color: white;
  box-shadow: 12px 4px 36px rgba(255, 169, 39, 0.24);
  position: absolute;
  top: 151px;
  right: 155px;
  border-radius: 50% !important;

  /* 85% */
  @media (max-width: 950px) {
    top: 156px;
    right: 132px;
  }

  @media (max-width: 850px) {
    position: static;
    margin-right: 16px;
  }

  @media (max-width: 360px) {
    position: static;
    margin-right: 12px;
  }
`;

const ClubhouseAppIcon = styled(AppIcon)`
  background-color: #adadad;
  box-shadow: -16px 32px 48px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 850px) {
    position: static;
  }
`;

const DummyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 333px;
  right: 0;

  /* 85% */
  @media (max-width: 950px) {
    top: 260px;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const DummyTextBase = styled.div`
  height: 42px;
  background: ${ProductColors.white};
  box-shadow: -8px 8px 36px rgba(0, 0, 0, 0.14);
  border-radius: 32px;

  /* 85% */
  @media (max-width: 950px) {
    height: 36px;
  }
`;

const DummyTextOne = styled(DummyTextBase)`
  width: 276px;

  /* 85% */
  @media (max-width: 950px) {
    width: 236px;
  }
`;

const DummyTextTwo = styled(DummyTextBase)`
  margin-top: 12px;
  width: 178px;

  /* 85% */
  @media (max-width: 950px) {
    margin-top: 10px;
    width: 152px;
  }
`;
