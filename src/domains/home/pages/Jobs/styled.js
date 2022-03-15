import styled from '@emotion/styled';
import JobCard from 'src/domains/home/pages/Jobs/JobCard';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CustomJobCard = styled(JobCard)`
  width: 43%;
  margin-bottom: 4rem;
  :last-child {
    margin-bottom: 0rem;
  }
  :nth-last-child(2) {
    margin-bottom: 0rem;
  }
`;
