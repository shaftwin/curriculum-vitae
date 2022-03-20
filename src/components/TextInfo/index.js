import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { wordsShaker } from 'utils/methods/getRandomLetter';
import {
  BasicTitle,
  Container,
  Divider,
  GlowingTitle,
  Text,
  TextAnimation,
  TextsContainer,
  TitleContaine,
} from './styled';

const TextInfo = ({
  className,
  texts,
  title,
  glowing,
  shaked,
  spawnAnimation,
}) => {
  const [shakedTitle, setShakedTitle] = useState(title);

  useEffect(() => {
    if (shaked && title) {
      wordsShaker(title, setShakedTitle);
    }
  }, [shaked, title]);

  return (
    <Container className={className}>
      <TitleContaine glowing={glowing}>
        {glowing && (
          <GlowingTitle spawnAnimation={spawnAnimation} title={title} />
        )}
        {!glowing && (
          <BasicTitle spawnAnimation={spawnAnimation}>
            {shaked ? shakedTitle : title}
          </BasicTitle>
        )}
      </TitleContaine>
      <Divider />
      <TextsContainer>
        <TextAnimation spawnAnimation={spawnAnimation}>
          {texts && texts.map((txt) => <Text key={txt}>{txt}</Text>)}
        </TextAnimation>
      </TextsContainer>
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
   * Optional spawnAnimation text animation bool
   */
  spawnAnimation: PropTypes.bool,
  /**
   * Optional shaked text animation bool
   */
  shaked: PropTypes.bool,
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

TextInfo.defaultProps = {
  className: null,
  shaked: false,
  spawnAnimation: false,
  glowing: false,
};

export default TextInfo;
