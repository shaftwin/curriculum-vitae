/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Container,
  Grid,
  CustomJobCard,
  JobModal,
  ColumnContainer,
} from './styled';

const Jobs = () => {
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
              setModalColor('#8BF896');
            }}
            color="#8BF896"
            companyName="Tekyn"
            jobTitle="Lead Developer"
            jobDescription="Lots of work done"
          />
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor('#e4ee89');
            }}
            color="#e4ee89"
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
              setModalColor('#FFA500');
            }}
            color="#FFA500"
            companyName="Sparted"
            jobTitle="FullStack Developer"
            jobDescription="Lots of work done"
          />
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor('#FF2253');
            }}
            color="#FF2253"
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
