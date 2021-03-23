import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Footer } from '@/components/home/main/Footer';
import { MainSection } from '@/components/home/main/MainSection';
import { Input } from '@/components/Input';
import { Strings } from '@/constants/Strings';
import { ProfileDocument } from '@/types/clubhouse';

const Home = () => {
  const router = useRouter();
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

  const onClickEnter = async () => {
    let clubhouse_user_id = undefined;
    try {
      const { data } = await axios.get<ProfileDocument>(
        `https://clubhouse.api.inssa.club/profile/${username}`,
      );
      clubhouse_user_id = data.user_id;
    } catch {
      alert('No user');
      return;
    }

    if (email && clubhouse_user_id !== undefined) {
      try {
        await axios.post('https://waitlist.api.inssa.club/interest', {
          clubhouse_user_id,
          email,
        });
        alert('Subscription Complete');
      } catch {
        alert('Error');
      }
    }
    router.push(`/${username}`);
  };

  return (
    <Container>
      <MainSection>
        <MainForm>
          <MainInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={Strings.main.usernamePlaceholder}
          />
          {isEmailInputShown && (
            <MainInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={Strings.main.emailPlaceholder}
              type="email"
            />
          )}
          <MainButton onClick={onClickEnter}>
            {Strings.main.buttonText}
          </MainButton>
          {isCheckboxShown && (
            <MainCheckbox
              value={isEmailInputShown}
              onChange={setEmailInputShown}
            >
              {Strings.main.checkboxText()}
            </MainCheckbox>
          )}
        </MainForm>
        <Footer />
      </MainSection>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
