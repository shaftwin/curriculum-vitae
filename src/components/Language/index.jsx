import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Lang, LanguageContainer } from './styled';

const Language = ({ className }) => {
  const { i18n } = useTranslation();

  return (
    <LanguageContainer className={className}>
      <Lang
        isSelected={i18n.language === 'fr'}
        onClick={() => i18n.changeLanguage('fr')}
      >
        Fr
      </Lang>
      <Divider>/</Divider>
      <Lang
        isSelected={i18n.language === 'en'}
        onClick={() => i18n.changeLanguage('en')}
      >
        En
      </Lang>
    </LanguageContainer>
  );
};

Language.propTypes = {
  className: PropTypes.string,
};

Language.defaultProps = {
  className: null,
};

export default Language;
