import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Footer } from '@/components/home/main/Footer';
import { MainSection } from '@/components/home/main/MainSection';
import { Input } from '@/components/Input';
import { Message, MessageProps } from '@/components/Message';
import { Strings } from '@/constants/Strings';
import { ProfileDocument } from '@/types/clubhouse';
import { Analytics } from '@/utils/analytics';
import { isBrowser } from '@/utils/browser';

const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isEmailInputShown, setEmailInputShown] = useState<boolean>(false);
  const [isCheckboxShown, setCheckboxShown] = useState<boolean>(false);

  const [isMessageShown, setMessageShown] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageProps>({
    title: '',
  });

  useEffect(() => {
    if (isBrowser) {
      Analytics.logEvent('view_landing');
    }
  }, []);

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
    let clubhouse_username = undefined;

    try {
      const { data } = await axios.get<ProfileDocument>(
        `https://clubhouse.api.inssa.club/profile/${username}`,
      );
      clubhouse_user_id = data.user_id;
      clubhouse_username = data.username;
    } catch (err) {
      console.log(err.response.status);
      setMessage({
        title: '😭 해당 이름의 사용자를 찾을 수 없습니다!',
        error: true,
      });
      setMessageShown(true);
      setTimeout(() => setMessageShown(false), 3000);
      return;
    }

    if (email && clubhouse_user_id !== undefined) {
      try {
        await axios.post('https://waitlist.api.inssa.club/interest', {
          clubhouse_user_id,
          email,
        });
      } catch (err) {
        const axiosErr: AxiosError<{ error_type: string }> = err;
        console.log(axiosErr.response);
        if (axiosErr.response.data?.error_type === 'DuplicateEmailError') {
          setMessage({
            title: '✅ 이미 등록되어 있어요! 안심해도 좋아요.',
          });
          setMessageShown(true);
          setTimeout(() => {
            setMessageShown(false);
            router.push(`/${username}`);
          }, 1500);
          return;
        }
        setMessage({
          title: '🤕 서버에 문제가 발생했습니다. 잠시 뒤 시도해 주세요.',
          error: true,
        });
        setMessageShown(true);
        setTimeout(() => setMessageShown(false), 3000);
        return;
      }

      Analytics.logEvent('click_create_profile', {
        clubhouse_user_id,
        clubhouse_username,
        email,
      });

      setMessage({
        title: '✅ 고마워요! 서비스가 완성되면 초대장과 함께 꼭 알려드릴게요.',
      });
      setMessageShown(true);
      setTimeout(() => {
        setMessageShown(false);
        router.push(`/${username}`);
      }, 1500);
      return;
    }

    await Analytics.logEvent('click_create_profile', {
      clubhouse_user_id,
      clubhouse_username,
    });

    // 이메일을 입력하지 않았을 경우
    router.push(`/${username}`);
  };

  return (
    <>
      <Head>
        {/* 서버 렌더링 시(링크 공유 시점)에는 언어와 관계없이 영어로 표시 */}
        <title>{Strings.project.title}</title>

        <meta property="og:title" content={Strings.project.title} />
        <meta property="og:description" content={Strings.project.description} />
        <meta property="og:url" content="https://inssa.club/" />

        <meta name="twitter:title" content={Strings.project.title} />
        <meta
          name="twitter:description"
          content={Strings.project.description}
        />
        <meta property="twitter:url" content="https://inssa.club/" />
      </Head>
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
        <Message isMessageShown={isMessageShown} {...message} />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  margin: 64px auto 0;
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
