import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const FloatingText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[30]};
  color: ${({ theme }) => theme.fontColors.secondary};
  margin: 10px;
`;

export const FloatingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  transform: translate3d(-50%, -50%, 0) scale(1);
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColors.blackAlpha};
    border: 1px solid ${({ theme }) => theme.colors.white};
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    opacity: 1 !important;
    z-index: 1 !important;
  }
`;
