import axios from 'axios';
import { GetServerSideProps } from 'next';
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
    setMessageShown(false);
    if (!isMobile) {
      setTimeout(() => {
        setMessage({
          title: '🥲 This only works in iOS devices for now!',
          error: true,
        });
        setMessageShown(true);
        setTimeout(() => setMessageShown(false), 2500);
      }, 100);
      return;
    }

    copyToClipboard(profile.username);
    setTimeout(() => {
      setMessage({
        title: '✅ Copied my username to your clipboard!',
      });
      setMessageShown(true);
    }, 100);
    setTimeout(() => {
      window.location.href = 'clubhouse://';
    }, 500);
  };

  return (
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
