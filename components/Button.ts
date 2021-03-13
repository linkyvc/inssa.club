import styled from 'styled-components';

import { ProductColors } from '@/constants/Colors';

export const Button = styled.button`
  font-size: 18.5px;
  font-weight: bold;
  padding: 16px 20px;
  border: 3px solid ${ProductColors.border_yellow};
  border-radius: 8px;
  background: ${ProductColors.button_yellow};
  color: ${ProductColors.text_yellow};
  cursor: pointer;
`;
