import styled from '@emotion/styled';
import Skill from 'src/components/Skill';
import TagCloud from 'src/components/TagCloud';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CustomTagCloud = styled(TagCloud)`
  display: ${({ displayTagCloud }) => displayTagCloud};
  margin-left: 20%;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const CustomSkill = styled(Skill)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
