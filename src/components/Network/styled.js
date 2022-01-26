import styled from '@emotion/styled';

export const Link = styled.a`
  display: flex;
  width: 32px;
  height: 32px;
  color: #909096;
  transition: color 0.3s ease-in;
  text-decoration: none;
  &:hover {
    color: #08fdd8;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
