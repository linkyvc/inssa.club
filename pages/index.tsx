import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { MainSection } from '@/components/home/main/MainSection';
import { Input } from '@/components/Input';

const Home = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isEmailInputShown, setEmailInputShown] = useState<boolean>(false);
  const [isCheckboxShown, setCheckboxShown] = useState<boolean>(false);

  // 초기 로딩 시에만 체크박스 숨기기
  useEffect(() => {
    if (isEmailInputShown) {
      return;
    }
    if (!!username) {
      setCheckboxShown(true);
    }
  }, [username]);

  // 사용자가 체크를 해제하면 입력했던 이메일을 초기화
  useEffect(() => {
    if (!isEmailInputShown) {
      setEmail('');
    }
  }, [isEmailInputShown]);

  return (
    <Container>
      <MainSection>
        <MainForm>
          <MainInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="클럽하우스 사용자 이름을 입력하세요"
          />
          {isEmailInputShown && (
            <MainInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
            />
          )}
          <MainButton>프로필 생성하기</MainButton>
          {isCheckboxShown && (
            <MainCheckbox
              value={isEmailInputShown}
              onChange={setEmailInputShown}
            >
              쉿! 🤫
              <br />
              저희는 몰래 링키라고 하는 새로운 프로필 서비스를 준비하고 있어요.
              <br />
              <strong>
                링키가 출시되자마자 먼저 초대장을 받고 싶다면 체크!
              </strong>
            </MainCheckbox>
          )}
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
