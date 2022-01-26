/* eslint-disable max-len */
import React from 'react';
import TextInfo from 'src/components/TextInfo';
import { Container, SkillsContainer, CustomSkill } from './styled';

const Skills = () => {
  return (
    <Container>
      <SkillsContainer>
        <CustomSkill skillName="NodeJS" skillLevel={95} color="#08fdd8" />
        <CustomSkill skillName="TypeScript" skillLevel={50} color="#D26CD5" />
        <CustomSkill skillName="Python" skillLevel={65} />
        <CustomSkill
          skillName="React / React Native"
          skillLevel={95}
          color="#08fdd8"
        />
        <CustomSkill
          skillName="MongoDB / RethinkDB"
          skillLevel={65}
          color="#D26CD5"
        />
        <CustomSkill skillName="GraphQL" skillLevel={80} />
        <CustomSkill
          skillName="Jest / React Testing Library / Gherkin"
          skillLevel={85}
          color="#08fdd8"
        />
        <CustomSkill skillName="AWS" skillLevel={65} color="#D26CD5" />
        <CustomSkill skillName="Docker" skillLevel={65} />
        <CustomSkill skillName="Figma" skillLevel={85} color="#08fdd8" />
      </SkillsContainer>
      <TextInfo
        title="Skills"
        texts={[
          'Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.',
          'I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.',
          'I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others).',
          'Visit my LinkedIn profile for more details or just contact me.',
        ]}
      />
    </Container>
  );
};

Skills.propTypes = {};

export default Skills;
