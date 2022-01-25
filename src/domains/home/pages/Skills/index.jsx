/* eslint-disable max-len */
import React from 'react';
import Skill from 'src/components/Skill';
import { Container, CustomTextInfo, SkillsContainer } from './styled';

const Skills = () => {
  return (
    <Container>
      <CustomTextInfo
        title="My,Myself&I"
        texts={[
          'Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.',
          'I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.',
          'I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others).',
          'Visit my LinkedIn profile for more details or just contact me.',
        ]}
      />
      <SkillsContainer>
        <Skill skillName="React" skillLevel={85} color="#08fdd8" />
        <Skill skillName="React Native" skillLevel={90} color="#D26CD5" />
        <Skill skillName="GraphQL" skillLevel={70} />
        <Skill skillName="Jest" skillLevel={70} color="#08fdd8" />
        <Skill
          skillName="React Testing Library"
          skillLevel={80}
          color="#D26CD5"
        />
        <Skill skillName="AWS" skillLevel={45} />
      </SkillsContainer>
    </Container>
  );
};

Skills.propTypes = {};

export default Skills;
