import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { AppButton } from '@/components/AppButton';
import { Profile } from '@/components/Profile';
import { ServiceWrapper } from '@/components/ServiceWrapper';
import { Strings } from '@/constants/Strings';
import { ProfileDocument } from '@/types/clubhouse';
import { Analytics } from '@/utils/analytics';
import { isBrowser } from '@/utils/browser';
import { useIsMobile } from '@/utils/useIsMobile';

type Props = {
  data: ProfileDocument;
};

type Params = ParsedUrlQuery & {
  username: string;
};

const UserProfile = ({ data }: Props) => {
  const [isMobile] = useIsMobile();

  useEffect(() => {
    if (isBrowser) {
      Analytics.logEvent('view_profile', {
        clubhouse_user_id: data.user_id,
        clubhouse_username: data.username,
      });
    }
  }, []);

  const onClickAppButton = async () => {
    await Analytics.logEvent('click_profile_open_app', {
      clubhouse_user_id: data.user_id,
      clubhouse_username: data.username,
    });
    window.location.href = `https://ios.joinclubhouse.com/@${data.username}`;
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

        <meta
          name="twitter:title"
          content={`${data.profile.name}'s Clubhouse`}
        />
        <meta name="twitter:description" content={data.profile.bio} />
        <meta property="twitter:image" content={data.profile.photo_url} />
        <meta
          property="twitter:url"
          content={`https://inssa.club/${data.profile.username}`}
        />
      </Head>
      <ServiceWrapper>
        <Wrapper>
          <Profile data={data} />
          <OpenAppButton
            isMobile={isMobile}
            title={Strings.profile.openAppToFollowMe}
            onClick={onClickAppButton}
          />
        </Wrapper>
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
