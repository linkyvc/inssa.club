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
      <Title>{Strings.promotion.profileLikeThis()}</Title>
      <ScreenList>
        {promotions.map(({ username, screenImage }) => (
          <Screen
            key={username}
            src={screenImage}
            onClick={() => onClickScreen(username)}
          />
        ))}
      </ScreenList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 12px;
  font-weight: 900;
  font-size: 4.2rem;
  line-height: 110%;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -2.75px;
`;

const ScreenList = styled.div`
  margin-top: 16px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Screen = styled.img`
  width: 30%;
  border-radius: 8px;
  border: 2px solid ${ClubhouseColors.border_ivory};
  background-color: ${ClubhouseColors.placeholder_ivory};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-right: 8px;
`;
