import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { MainSection } from '@/components/home/main/MainSection';
import { Input } from '@/components/Input';

const Home = () => {
  return (
    <Container>
      <MainSection>
        <MainForm>
          <MainInput placeholder="클럽하우스 사용자 이름을 입력하세요" />
          <MainInput placeholder="이메일을 입력하세요" />
          <MainButton>프로필 생성하기</MainButton>
          <MainCheckbox>
            쉿! 🤫
            <br />
            저희는 몰래 링키라고 하는 새로운 프로필 서비스를 준비하고 있어요.
            <br />
            <strong>링키가 출시되자마자 먼저 초대장을 받고 싶다면 체크!</strong>
          </MainCheckbox>
        </MainForm>
      </MainSection>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
`;

const MainForm = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const MainInput = styled(Input)`
  margin-top: 4px;
`;

const MainButton = styled(Button)`
  margin-top: 8px;
`;

const MainCheckbox = styled(Checkbox)`
  margin-top: 8px;
`;
