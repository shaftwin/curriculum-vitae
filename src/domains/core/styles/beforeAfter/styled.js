import styled from '@emotion/styled';

const beforeAfter = styled.div`
  position: relative;
  &:before {
    font-family: 'La Belle Aurore', cursive;
    content: '<h2>';
    color: ${({ theme }) => theme.fontColors.tag};
    font-size: ${({ theme }) => theme.fontSize[18]};
    position: absolute;
  }
  &:after {
    font-family: 'La Belle Aurore', cursive;
    content: '</h2>';
    color: ${({ theme }) => theme.fontColors.tag};
    font-size: ${({ theme }) => theme.fontSize[18]};
    position: absolute;
  }
`;

export default beforeAfter;
