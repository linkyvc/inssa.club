import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ClubhouseColors } from '@/constants/Colors';
import { promotions } from '@/constants/home/promotion';
import { Strings } from '@/constants/Strings';

export const PromotionSection = () => {
  const router = useRouter();
  const onClickScreen = (username: string) => router.push(`/${username}`);

  return (
    <Container>
      <Title>{Strings.promotion.profileLikeThis}</Title>
      <ScreenList>
        {promotions.map(({ username, screenImage }) => (
          <Screen src={screenImage} onClick={() => onClickScreen(username)} />
        ))}
      </ScreenList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 128px;

  @media (max-width: 1100px) {
    margin: 0 auto;
    width: calc(100% - 60px);
  }

  @media (max-width: 850px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 24px;
  font-family: 'Nunito', 'TmoneyRoundWindRegular', sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 120%;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 36px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const ScreenList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Screen = styled.img`
  width: 30%;
  height: auto;
  border-radius: 24px;
  border: 1px solid ${ClubhouseColors.border_ivory};
  background-color: ${ClubhouseColors.placeholder_ivory};
  box-shadow: 0 2.8px 2.2px rgba(163, 151, 106, 0.042),
    0 6.7px 5.3px rgba(163, 151, 106, 0.061),
    0 12.5px 10px rgba(163, 151, 106, 0.075),
    0 22.3px 17.9px rgba(163, 151, 106, 0.089),
    0 41.8px 33.4px rgba(163, 151, 106, 0.108),
    0 100px 80px rgba(163, 151, 106, 0.15);
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:nth-child(2) {
    z-index: 9;
    transform: scale(1.06);
  }

  &:hover {
    box-shadow: 0 1.5px 2.2px rgba(163, 151, 106, 0.042),
      0 3.7px 5.3px rgba(163, 151, 106, 0.061),
      0 6.9px 10px rgba(163, 151, 106, 0.075),
      0 12.3px 17.9px rgba(163, 151, 106, 0.089),
      0 23px 33.4px rgba(163, 151, 106, 0.108),
      0 55px 80px rgba(163, 151, 106, 0.15);
    transform: scale(1.08);
    z-index: 12;
    transform: scale(1.2);
  }
`;
