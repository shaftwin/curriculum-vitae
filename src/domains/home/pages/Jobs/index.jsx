/* eslint-disable max-len */
import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import {
  Container,
  Grid,
  CustomJobCard,
  JobModal,
  ColumnContainer,
} from './styled';

const Jobs = () => {
  const theme = useTheme();
  const [displayModal, setDisplayModal] = useState(undefined);
  const [modalColor, setModalColor] = useState(null);

  return (
    <Container>
      <Grid>
        <ColumnContainer>
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.green);
            }}
            color={theme.colors.green}
            companyName="Tekyn"
            jobTitle="Lead Developer"
            jobDescription="Lots of work done"
          />
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.yellow);
            }}
            color={theme.colors.yellow}
            companyName="TrackTL"
            jobTitle="Frontend Developer"
            jobDescription="Lots of work done"
          />
        </ColumnContainer>
        <ColumnContainer>
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.orange);
            }}
            color={theme.colors.orange}
            companyName="Sparted"
            jobTitle="FullStack Developer"
            jobDescription="Lots of work done"
          />
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.red);
            }}
            color={theme.colors.red}
            companyName="Freelancer"
            jobTitle="FullStack Developer"
            jobDescription="Lots of work done"
          />
        </ColumnContainer>
      </Grid>
      <JobModal
        onClick={() => setDisplayModal(false)}
        color={modalColor}
        displayModal={displayModal}
        companyName="Freelancer"
        jobTitle="FullStack Developer"
        jobDescription="Lots of work done"
      />
    </Container>
  );
};

Jobs.propTypes = {};

export default Jobs;
