import React from 'react';
import PropTypes from 'prop-types';
import Glowing from 'src/components/TextInfo/Glowing';
import { Container, Text, BasicTitle } from './styled';

const TextInfo = ({ className, texts, title, glowing }) => {
  return (
    <Container className={className}>
      {glowing && <Glowing title={title} />}
      {!glowing && <BasicTitle>{title}</BasicTitle>}
      {texts.map((text) => (
        <Text key={text}>{text}</Text>
      ))}
    </Container>
  );
};

TextInfo.propTypes = {
  /**
   * Required title
   */
  title: PropTypes.string.isRequired,
  /**
   * Required text
   */
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Optional glowing text
   */
  glowing: PropTypes.bool,
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

TextInfo.defaultProps = {
  templateColor: 'primary',
  size: 'normal',
};

export default TextInfo;
