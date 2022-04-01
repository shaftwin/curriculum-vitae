import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColors.dark};
  background-image: ${({ currentPage, innerWidth }) => {
    if (currentPage !== -1) return 'unset';

    return innerWidth >= 1200
      ? "url('/assets/svg/Background.svg')"
      : "url('/assets/svg/Robot.svg')";
  }};
  background-repeat: no-repeat;
  background-position: center;
`;
