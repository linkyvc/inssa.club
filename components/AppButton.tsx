import React from 'react';
import styled, { css } from 'styled-components';

import { ClubhouseColors } from '@/constants/Colors';

interface AppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  isMobile: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  isMobile,
  ...props
}) => {
  return (
    <>
      <Button isMobile={isMobile} {...props}>
        {title}
      </Button>
    </>
  );
};

interface ButtonProps {
  isMobile: boolean;
}

const Button = styled.button<ButtonProps>`
  margin: 0 auto;
  padding: 8px 20px;
  width: fit-content;
  cursor: pointer;
  background-color: ${ClubhouseColors.button_ivory};
  border-radius: 9999px;
  color: ${ClubhouseColors.text_ivory};
  font-size: 16px;
  font-weight: 700;

  ${({ isMobile }) =>
    isMobile &&
    css`
      background-color: ${ClubhouseColors.background_green};
      color: white;
    `};
`;
