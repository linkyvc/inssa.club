import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';

import { MainSection } from '@/components/home/main/MainSection';
import { Message, MessageProps } from '@/components/Message';
import { Navigator } from '@/components/Navigator';
import { Strings } from '@/constants/Strings';

const Home = () => {
  const [isMessageShown] = useState<boolean>(false);
  const [message] = useState<MessageProps>({
    title: '',
  });

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
      <Navigator />
      <Container>
        <MainSection />
        <Message isMessageShown={isMessageShown} {...message} />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
