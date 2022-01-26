import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 415px;
  display: flex;
  flex-direction: column;
`;

export const BasicTitle = styled.h2`
  color: #08fdd8;
  font-size: 4.4rem;
`;

export const Text = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Open Sans', cursive;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
