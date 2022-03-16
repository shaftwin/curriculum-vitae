/* eslint-disable max-len */
import React, { useState } from 'react';
import { Container, Grid, CustomJobCard } from './styled';

const Jobs = () => {
  const [shouldExpand, setShouldExpand] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [shouldHide, setShouldHide] = useState([false, false, false, false]);

  const reset = () => {
    setShouldExpand([false, false, false, false]);
    setShouldHide([false, false, false, false]);
  };

  return (
    <Container>
      <Grid>
        <CustomJobCard
          onClick={() => {
            if (shouldExpand[0]) return reset();
            setShouldExpand([
              !shouldExpand[0],
              shouldExpand[1],
              shouldExpand[2],
              shouldExpand[3],
            ]);
            setShouldHide([false, true, true, true]);
            return null;
          }}
          color="#8BF896"
          companyName="Tekyn"
          jobTitle="Lead Developer"
          jobDescription="Lots of work done"
          shouldExpand={shouldExpand[0]}
          shouldHide={shouldHide[0]}
        />
        <CustomJobCard
          onClick={() => {
            if (shouldExpand[1]) return reset();
            setShouldExpand([
              shouldExpand[0],
              !shouldExpand[1],
              shouldExpand[2],
              shouldExpand[3],
            ]);
            setShouldHide([true, false, true, true]);
            return null;
          }}
          color="#e4ee89"
          companyName="TrackTL"
          jobTitle="Frontend Developer"
          jobDescription="Lots of work done"
          shouldExpand={shouldExpand[1]}
          shouldHide={shouldHide[1]}
        />
        <CustomJobCard
          onClick={() => {
            if (shouldExpand[2]) return reset();
            setShouldExpand([
              shouldExpand[0],
              shouldExpand[1],
              !shouldExpand[2],
              shouldExpand[3],
            ]);
            setShouldHide([true, true, false, true]);
            return null;
          }}
          color="#FFA500"
          companyName="Sparted"
          jobTitle="FullStack Developer"
          jobDescription="Lots of work done"
          shouldExpand={shouldExpand[2]}
          shouldHide={shouldHide[2]}
        />
        <CustomJobCard
          onClick={() => {
            if (shouldExpand[3]) return reset();
            setShouldExpand([
              shouldExpand[0],
              shouldExpand[1],
              shouldExpand[2],
              !shouldExpand[3],
            ]);
            setShouldHide([true, true, true, false]);
            return null;
          }}
          color="#FF2253"
          companyName="Freelancer"
          jobTitle="FullStack Developer"
          jobDescription="Lots of work done"
          shouldExpand={shouldExpand[3]}
          shouldHide={shouldHide[3]}
        />
      </Grid>
    </Container>
  );
};

Jobs.propTypes = {};

export default Jobs;
