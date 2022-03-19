import PropTypes from 'prop-types';
import React from 'react';
import theme from 'utils/theme';
import { Container, Level, Progress, SkillName } from './styled';

const Skill = ({ className, skillName, skillLevel, color }) => {
  return (
    <Container className={className}>
      <SkillName>{skillName}</SkillName>
      <Progress>
        <Level skillLevel={skillLevel} color={color} />
      </Progress>
    </Container>
  );
};

Skill.propTypes = {
  /**
   * Required skill name
   */
  skillName: PropTypes.string.isRequired,
  /**
   * Required skill level
   */
  skillLevel: PropTypes.number.isRequired,
  /**
   * Optional skill color
   */
  color: PropTypes.string,
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

Skill.defaultProps = {
  className: null,
  color: theme.colors.red,
};

export default Skill;
