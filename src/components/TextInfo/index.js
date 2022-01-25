import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Text,
  Letter,
  HiddenInput,
  CustomLi,
} from './styled';

const TextInfo = ({ className, texts, title }) => {
  return (
    <Container className={className}>
      <Title>
        {title.split('').map((letter, idx) => {
          return (
            <CustomLi key={idx}>
              <HiddenInput type="checkbox" />
              <Letter>{letter}</Letter>
            </CustomLi>
          );
        })}
      </Title>
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
   * Optional custom style
   */
  className: PropTypes.string,
};

TextInfo.defaultProps = {
  templateColor: 'primary',
  size: 'normal',
};

export default TextInfo;
