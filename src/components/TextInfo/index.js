import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Glowing from 'src/components/TextInfo/Glowing';
import { wordsShaker } from 'utils/methods/getRandomLetter';
import {
  BasicTitle,
  Container,
  Text,
  TextAnimation,
  TextsContainer,
  TitleContaine,
  // AbsoluteTitle,
} from './styled';

const TextInfo = ({
  className,
  texts,
  text,
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
  }, [shaked, text, title]);

  return (
    <Container className={className}>
      {/* <AbsoluteTitle>About</AbsoluteTitle> */}
      <TitleContaine>
        {glowing && <Glowing title={title} />}
        {!glowing && (
          <BasicTitle spawnAnimation={spawnAnimation}>
            {shaked ? shakedTitle : title}
          </BasicTitle>
        )}
      </TitleContaine>
      <TextsContainer>
        <TextAnimation spawnAnimation={spawnAnimation}>
          {texts && texts.map((txt) => <Text key={txt}>{txt}</Text>)}
          <Text>{text}</Text>
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
   * Optional custom style
   */
  className: PropTypes.string,
};

TextInfo.defaultProps = {
  templateColor: 'primary',
  size: 'normal',
};

export default TextInfo;
