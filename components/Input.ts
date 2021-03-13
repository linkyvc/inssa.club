import styled from 'styled-components';

import { ProductColors } from '@/constants/Colors';

export const Input = styled.input`
  font-size: 18.5px;
  font-weight: 500;
  padding: 16px 20px;
  border: 3px solid ${ProductColors.border_gray};
  border-radius: 8px;
  background: ${ProductColors.white};

  &::placeholder {
    color: ${ProductColors.placeholder};
    font-weight: 400;
  }
`;
