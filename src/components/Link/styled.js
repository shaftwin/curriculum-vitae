import styled from '@emotion/styled';

export const Container = styled.a`
  text-decoration: none;
  color: ${({ theme, templateColor }) =>
    theme.link.textColor[templateColor].default};
  font-size: ${({ theme, size }) => theme.link.fontSize[size]};
  font-weight: ${({ theme, size }) => theme.link.fontWeight[size]};

  &:hover {
    color: ${({ theme, templateColor }) =>
      theme.link.textColor[templateColor].hover};
  }

  &:visited: {
    color: ${({ theme, templateColor }) =>
      theme.link.textColor[templateColor].visited};
  }
`;
