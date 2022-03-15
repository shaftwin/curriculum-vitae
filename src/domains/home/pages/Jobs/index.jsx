/* eslint-disable max-len */
import React from 'react';
import { Container, Grid, CustomJobCard } from './styled';

const Jobs = () => {
  return (
    <Container>
      <Grid>
        <CustomJobCard
          color="#8BF896"
          companyName="Tekyn"
          jobTitle="Lead Developer"
          jobDescription="Lots of work done"
        />
        <CustomJobCard
          color="#e4ee89"
          companyName="TrackTL"
          jobTitle="Frontend Developer"
          jobDescription="Lots of work done"
        />
        <CustomJobCard
          color="#FFA500"
          companyName="Sparted"
          jobTitle="FullStack Developer"
          jobDescription="Lots of work done"
        />
        <CustomJobCard
          color="#FF2253"
          companyName="Freelancer"
          jobTitle="FullStack Developer"
          jobDescription="Lots of work done"
        />
      </Grid>
    </Container>
  );
};

Jobs.propTypes = {};

export default Jobs;
