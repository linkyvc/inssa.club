import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import { AppButton } from '@/components/AppButton';
import { Message, MessageProps } from '@/components/Message';
import { Profile } from '@/components/Profile';
import { ServiceWrapper } from '@/components/ServiceWrapper';
import { ProfileDocument } from '@/types/clubhouse';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useIsMobile } from '@/utils/useIsMobile';

import profile from '../data/profile.json';

type Props = {
  data: ProfileDocument;
};

type Params = ParsedUrlQuery & {
  username: string;
};

const UserProfile = ({ data }: Props) => {
  const [isMobile] = useIsMobile();
  const [isMessageShown, setMessageShown] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageProps>({
    title: '',
  });

  useEffect(() => {
    ReactGA.initialize('G-3JHG3XBMTX');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const onClickAppButton = () => {
    window.location.href = 'https://ios.joinclubhouse.com/@junhoyeo';
  };

  return (
    <>
      <Head>
        <title>{data.profile.name}'s Clubhouse</title>
        <meta
          property="og:title"
          content={`${data.profile.name}'s Clubhouse`}
        />
        <meta
          property="og:url"
          content={`https://inssa.club/${data.profile.username}`}
        />
        <meta property="og:description" content={data.profile.bio} />
        <meta property="og:image" content={data.profile.photo_url} />
      </Head>
      <ServiceWrapper>
        <Wrapper>
          <Profile profile={data.profile} />
          <OpenAppButton
            isMobile={isMobile}
            title="Open app to follow me"
            onClick={onClickAppButton}
          />
        </Wrapper>
        <Message isMessageShown={isMessageShown} {...message} />
      </ServiceWrapper>
    </>
  );
};

export default UserProfile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 52px 16px;
`;

const OpenAppButton = styled(AppButton)`
  margin-top: 32px;
  margin-bottom: 52px;
`;

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context,
) => {
  const username = context.params?.username;
  try {
    const { data } = await axios.get(
      `https://clubhouse.api.inssa.club/profile/${username}`,
    );
    return {
      props: {
        data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
