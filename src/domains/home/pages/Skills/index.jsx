/* eslint-disable max-len */
import { useTheme } from '@emotion/react';
import React from 'react';
import TextInfo from 'src/components/TextInfo';
import { Container, SkillsContainer, CustomSkill } from './styled';

const Skills = () => {
  const theme = useTheme();

  return (
    <Container>
      <SkillsContainer>
        <CustomSkill
          skillName="NodeJS"
          skillLevel={95}
          color={theme.colors.turquoise}
        />
        <CustomSkill
          skillName="TypeScript"
          skillLevel={50}
          color={theme.colors.pink}
        />
        <CustomSkill skillName="Python" skillLevel={65} />
        <CustomSkill
          skillName="React / React Native"
          skillLevel={95}
          color={theme.colors.turquoise}
        />
        <CustomSkill
          skillName="MongoDB / RethinkDB"
          skillLevel={65}
          color={theme.colors.pink}
        />
        <CustomSkill skillName="GraphQL" skillLevel={80} />
        <CustomSkill
          skillName="Jest / React Testing Library / Gherkin"
          skillLevel={85}
          color={theme.colors.turquoise}
        />
        <CustomSkill
          skillName="AWS"
          skillLevel={65}
          color={theme.colors.pink}
        />
        <CustomSkill skillName="Docker" skillLevel={65} />
        <CustomSkill
          skillName="Figma"
          skillLevel={85}
          color={theme.colors.turquoise}
        />
      </SkillsContainer>
      <TextInfo
        title="Skills"
        glowing
        texts={[
          'Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.',
          'I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.',
          'I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others).',
        ]}
      />
    </Container>
  );
};

Skills.propTypes = {};

export default Skills;
