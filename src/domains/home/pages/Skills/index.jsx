/* eslint-disable max-len */
import { useTheme } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TextInfo from 'src/components/TextInfo';
import { Container, SkillsContainer, CustomSkill } from './styled';

const Skills = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
          t('common:skills.1'),
          t('common:skills.2'),
          t('common:skills.3'),
        ]}
      />
    </Container>
  );
};

Skills.propTypes = {};

export default Skills;
