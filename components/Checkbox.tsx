import React from 'react';
import styled from 'styled-components';

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
      <Square selected={value} />
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
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #f4f4f4;
  background-color: #ffffff;
`;

const Text = styled.span`
  flex: 1;
  font-size: 16.5px;
  font-weight: 500;
  line-height: 1.4;
  color: #575c61;
`;
