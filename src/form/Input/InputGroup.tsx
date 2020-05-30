import styled from 'styled-components';
import React, { ReactChild, HTMLAttributes } from 'react';
import { Label } from '.';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGroup = ({
  input,
  label,
  ...props
}: {
  input: ReactChild;
  label?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <Container {...props}>
      <Label>{label}</Label>
      {input}
    </Container>
  );
};

export default InputGroup;
