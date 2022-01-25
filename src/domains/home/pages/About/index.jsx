/* eslint-disable max-len */
import React from 'react';
import { Container, CustomTagCloud, CustomTextInfo } from './styled';

const About = () => {
  return (
    <Container>
      <CustomTextInfo
        title="My, Myself & I"
        texts={[
          'I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.',
          'Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,',
          'Interested in the entire frontend spectrum and working on ambitious projects with positive people.',
        ]}
      />
      <CustomTagCloud displayTagCloud={true} />
    </Container>
  );
};

About.propTypes = {};

export default About;
