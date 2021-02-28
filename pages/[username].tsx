import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import { AppButton } from '@/components/AppButton';
import { Message, MessageProps } from '@/components/Message';
import { Profile } from '@/components/Profile';
import { ServiceWrapper } from '@/components/ServiceWrapper';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { openURL } from '@/utils/openURL';
import { useIsMobile } from '@/utils/useIsMobile';

import profile from '../data/profile.json';

interface Social {
  name: string;
  url: string;
  key: 'instagram' | 'twitter';
}

const UserProfile = () => {
  const [isMobile] = useIsMobile();
  const [isMessageShown, setMessageShown] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageProps>({
    title: '',
  });

  useEffect(() => {
    ReactGA.initialize('G-3JHG3XBMTX');
    ReactGA.pageview(window.location.pathname + window.location.search);

    setTimeout(() => {
      setMessage({
        title: '👋 Junho Yeo invited you to view his GitHub profile',
        onClickLater: () => setMessageShown(false),
        onClickOkay: () => {
          openURL('https://github.com/junhoyeo');
          setMessageShown(false);
        },
      });
      setMessageShown(true);
    }, 500);
  }, []);

  const onClickSocial = ({ name, url, key }: Social) => {
    setMessageShown(false);
    setTimeout(() => {
      setMessage({
        title: `👋 Thanks for clicking my ${name}!`,
      });
      setMessageShown(true);
      setTimeout(() => {
        openURL(`${url}/${profile[key]}`);
        setMessageShown(false);
      }, 2500);
    }, 100);
  };

  const onClickInstagram = () =>
    onClickSocial({
      name: 'Instagram',
      url: 'https://instagram.com',
      key: 'instagram',
    });

  const onClickTwitter = () =>
    onClickSocial({
      name: 'Twitter',
      url: 'https://twitter.com',
      key: 'twitter',
    });

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
        <Profile
          profile={profile}
          onClickInstagram={onClickInstagram}
          onClickTwitter={onClickTwitter}
        />
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
