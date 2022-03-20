/* eslint-disable max-len */
import React from 'react';
import { Container, CustomTagCloud, CustomTextInfo } from './styled';

const About = () => {
  return (
    <Container>
      <CustomTextInfo
        spawnAnimation
        title="My, Myself & I"
        texts={[
          "I'm a web / mobile developer who move and work all around the world. For now I'm locate in French Alps",
          'Independant and very meticulous, I like working on ambitious and respectful projects. Fan of outdour activities, especially snowboard, kite-surf, wakeboard and hiking.',
          "I fuel a strong passion for my work, thinking that we can improve the futur with it. Learning lover, I've also gave my time to share my knowledges to those who were curious enough.",
          "I'm convinced of the open source benefit and I'm tring to play my part to this endless process.",
        ]}
      />
      <CustomTagCloud />
    </Container>
  );
};

About.propTypes = {};

export default About;
