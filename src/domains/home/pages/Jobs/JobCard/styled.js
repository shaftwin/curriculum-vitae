import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ borderColor }) => borderColor};
  padding: 2rem 2rem 1.5rem;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColors.dark};
`;

export const CompanyName = styled.h3`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSize[13]};
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const JobTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[27]};
  letter-spacing: 0px;
  color: ${({ theme }) => theme.fontColors.primary};
  font-weight: 400;
  line-height: 35px;
  text-decoration: none;
`;

export const JobDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.fontColors.terciary};
  line-height: 24px;
  margin-bottom: 20px;
  margin-top: 15px;
`;
