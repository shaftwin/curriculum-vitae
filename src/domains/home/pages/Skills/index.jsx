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
          'Since beginning my journey as a developer nearly 10 years ago, I’ve worked for different startups as employee or freelancer.',
          "I felt in love with NodeJS universe, I'm now able to buid small and large projects with high quality, including frontend and backend parts. I'm doing my best to respect the client needs and to provide the best user experience in my developed products.",
          "I used to manage developers as a team lead, organizing and prioritizing work to respect deadlines. I'm really concerned about best practices that I'm trying to apply and improve every day.",
        ]}
      />
    </Container>
  );
};

Skills.propTypes = {};

export default Skills;
