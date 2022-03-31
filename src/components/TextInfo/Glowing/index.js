import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GlowingContainer, CustomSpan, HiddenInput, Letter } from './styled';

const Glowing = ({ title, className }) => {
  const [checked, setChecked] = useState(() =>
    title.split('').map((letter, idx) => !(idx % 2)),
  );

  const updateGlowing = (idx) => {
    const newArr = [...checked];
    newArr[idx] = !checked[idx];
    setChecked(newArr);
  };

  return (
    <GlowingContainer className={className}>
      {title.split('').map((letter, idx) => {
        return (
          <CustomSpan key={idx}>
            <HiddenInput
              onChange={() => updateGlowing(idx)}
              checked={checked[idx]}
              type="checkbox"
            />
            <Letter>{letter}</Letter>
          </CustomSpan>
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
