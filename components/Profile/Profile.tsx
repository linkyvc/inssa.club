import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

import { Clubhouse } from '@/types/clubhouse';

interface ProfileProps {
  profile: Clubhouse.Profile;
  onClickInstagram: () => void;
  onClickTwitter: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
  profile,
  onClickInstagram,
  onClickTwitter,
}) => {
  const formattedJoinedDate = moment(new Date(profile.time_created)) //
    .format('MMM DD, yyyy');

  return (
    <>
      <Avatar src={profile.photo_url} />
      <Name>{profile.name}</Name>
      <Username>{`@${profile.username}`}</Username>
      <FollowRow>
        <Followers>
          {profile.num_followers}
          <FollowPrefix>followers</FollowPrefix>
        </Followers>
        <Following>
          {profile.num_following}
          <FollowPrefix>following</FollowPrefix>
        </Following>
      </FollowRow>
      <Bio>{profile.bio}</Bio>
      <SocialRow>
        {profile.instagram && (
          <Social onClick={onClickInstagram}>
            <InstagramLogo />
            <span>{profile.instagram}</span>
          </Social>
        )}
        {profile.twitter && (
          <Social onClick={onClickTwitter}>
            <TwitterLogo />
            <span>{profile.twitter}</span>
          </Social>
        )}
      </SocialRow>
      <NorminationContainer>
        <NorminationProfile src={profile.invited_by_user_profile.photo_url} />
        <NorminationInformation>
          <JoinedAt>{`Joined ${formattedJoinedDate}`}</JoinedAt>
          <NorminationText>
            Norminated by{' '}
            <Norminator>{profile.invited_by_user_profile.name}</Norminator>
          </NorminationText>
        </NorminationInformation>
      </NorminationContainer>
    </>
  );
};

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 36px;
  cursor: pointer;
`;

const Name = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const Username = styled.h2`
  margin-top: 15px;
  font-size: 0.95rem;
  font-weight: normal;
`;

const FollowRow = styled.div`
  margin-top: 27px;
`;

const Followers = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Following = styled(Followers)`
  margin-left: 36px;
`;

const FollowPrefix = styled.span`
  font-size: 1rem;
  margin-left: 4px;
  font-weight: 300;
`;

const Bio = styled.p`
  margin-top: 34px;
  white-space: pre-line;
  font-size: 1.02rem;
  font-weight: 300;
  line-height: 1.45;
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
`;

const Social = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 0.95rem;
    line-height: 1;
    margin-left: 4px;
  }

  &:first-child {
    margin-right: 16px;
  }
`;

const SocialLogo = styled.img`
  width: 16px;
  height: 16px;
`;

const InstagramLogo = styled(SocialLogo).attrs({
  src: 'images/instagram.svg',
})``;

const TwitterLogo = styled(SocialLogo).attrs({
  src: 'images/twitter.svg',
})``;

const NorminationContainer = styled.div`
  margin-top: 45px;
  display: flex;
`;

const NorminationProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 16px;
`;

const NorminationInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const JoinedAt = styled.span`
  font-size: 0.92rem;
  font-weight: 300;
`;

const NorminationText = styled(JoinedAt)`
  margin-top: 4px;
`;

const Norminator = styled.strong`
  font-weight: 600;
`;
