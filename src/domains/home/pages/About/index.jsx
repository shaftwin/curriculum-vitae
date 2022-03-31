/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import TECH_WORDS from 'src/components/TagCloud/mocks/words.mock';
import { Container, CustomTagCloud, CustomTextInfo } from './styled';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <CustomTextInfo
        spawnAnimation
        title={t('common:my.myself.i')}
        texts={[
          t('common:about.1'),
          t('common:about.2'),
          t('common:about.3'),
          t('common:about.4'),
        ]}
      />
      <CustomTagCloud words={TECH_WORDS} />
    </Container>
  );
};

About.propTypes = {};

export default About;
