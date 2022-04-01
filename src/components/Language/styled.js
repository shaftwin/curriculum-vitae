import styled from '@emotion/styled';

export const LanguageContainer = styled.div`
  width: 100px;
`;

export const Lang = styled.span`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.turquoise : theme.colors.lightGrey};
  &:hover {
    color: ${({ theme }) => theme.colors.turquoise};
  }
`;

export const Divider = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 10px;
`;
