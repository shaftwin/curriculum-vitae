/* eslint-disable max-len */
import { useTheme } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  ColumnContainer,
  Container,
  CustomJobCard,
  Grid,
  JobModal,
  JobModalContainer,
} from './styled';

const Jobs = () => {
  const theme = useTheme();
  const [displayModal, setDisplayModal] = useState(undefined);
  const [modalColor, setModalColor] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current.contains(e.target)) {
        setDisplayModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

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
      <JobModalContainer ref={ref} displayModal={displayModal}>
        <JobModal
          color={modalColor}
          displayModal={displayModal}
          companyName="Freelancer"
          jobTitle="FullStack Developer"
          jobDescription="Lots of work done"
        />
      </JobModalContainer>
    </Container>
  );
};

Jobs.propTypes = {};

export default Jobs;
