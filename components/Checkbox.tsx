import React from 'react';
import styled, { css } from 'styled-components';

interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <Container onClick={() => onChange(!value)} {...props}>
      <Square selected={value}>
        <Checkmark />
      </Square>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

interface SquareProps {
  selected?: boolean;
}

const Square = styled.div<SquareProps>`
  margin-top: 1px;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 3px solid #f4f4f4;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ selected }) =>
    selected &&
    css`
      border: 3px solid #ffe066;
      background-color: #f59f00;
    `};
`;

const Checkmark = styled.div`
  display: inline-block;
  margin-bottom: 3px;

  &:after {
    content: '';
    display: block;
    width: 4px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Text = styled.span`
  flex: 1;
  font-size: 16.5px;
  font-weight: 500;
  line-height: 1.4;
  color: #575c61;
`;
