import styled from '@emotion/styled';

export const Link = styled.a`
  display: flex;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.fontColors.terciary};
  transition: color 0.3s ease-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.fontColors.secondary};
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
