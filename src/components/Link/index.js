import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

const Link = ({ className, text, link, templateColor, size, ...props }) => {
  return (
    <Container
      className={className}
      href={link}
      templateColor={templateColor}
      size={size}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {text}
    </Container>
  );
};

Link.propTypes = {
  /**
   * Required text
   */
  text: PropTypes.string.isRequired,
  /**
   * Required link
   */
  link: PropTypes.string.isRequired,
  /**
   * Optional template color
   */
  templateColor: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /**
   * Optional size
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'normal']),
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

Link.defaultProps = {
  templateColor: 'primary',
  size: 'normal',
};

export default Link;
