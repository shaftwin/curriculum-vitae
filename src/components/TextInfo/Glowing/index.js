import PropTypes from 'prop-types';
import React from 'react';
import { GlowingContainer, CustomLi, HiddenInput, Letter } from './styled';

const Glowing = ({ title, className }) => {
  return (
    <GlowingContainer className={className}>
      {title.split('').map((letter, idx) => {
        return (
          <CustomLi key={idx}>
            <HiddenInput type="checkbox" />
            <Letter>{letter}</Letter>
          </CustomLi>
        );
      })}
    </GlowingContainer>
  );
};

Glowing.propTypes = {
  /**
   * Required title
   */
  title: PropTypes.string.isRequired,
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

Glowing.defaultProps = {
  templateColor: 'primary',
  size: 'normal',
};

export default Glowing;
