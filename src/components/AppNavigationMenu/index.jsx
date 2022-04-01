import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CgMenuGridR } from 'react-icons/cg';
import {
  AbsoluteLanguage,
  CloseIconContainer,
  CustomVscChromeClose,
  MenuIcon,
  NavContainer,
  NavigationContainer,
  NavItem,
} from './styled';

function AppNavigationMenu({ currentPage, setCurrentPage }) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(undefined);

  return (
    <>
      <MenuIcon
        isMenuOpen={isMenuOpen}
        onClick={() =>
          setIsMenuOpen(isMenuOpen === undefined || isMenuOpen === false)
        }
      >
        <CgMenuGridR size="3.5em" />
      </MenuIcon>
      <NavigationContainer isMenuOpen={isMenuOpen}>
        <CloseIconContainer onClick={() => setIsMenuOpen(false)}>
          <CustomVscChromeClose size="3.5em" />
        </CloseIconContainer>
        <NavContainer>
          <NavItem
            onClick={() => {
              setCurrentPage(0);
              setIsMenuOpen(false);
            }}
            color={theme.colors.lightBlue}
            backgroundColor={theme.backgroundColors.lightBlueAlpha}
            isCurrentPage={currentPage === 0}
          >
            {t('common:my.myself.i')}
          </NavItem>
          <NavItem
            onClick={() => {
              setCurrentPage(1);
              setIsMenuOpen(false);
            }}
            color={theme.colors.pink}
            backgroundColor={theme.backgroundColors.pinkAlpha}
            isCurrentPage={currentPage === 1}
          >
            {t('common:skill', { count: 2 })}
          </NavItem>
          <NavItem
            onClick={() => {
              setCurrentPage(2);
              setIsMenuOpen(false);
            }}
            color={theme.colors.turquoise}
            backgroundColor={theme.backgroundColors.turquoiseAlpha}
            isCurrentPage={currentPage === 2}
          >
            {t('common:job', { count: 2 })}
          </NavItem>
          <NavItem
            onClick={() => {
              setCurrentPage(3);
              setIsMenuOpen(false);
            }}
            color={theme.colors.blue}
            backgroundColor={theme.backgroundColors.blueAlpha}
            isCurrentPage={currentPage === 3}
          >
            {t('common:contact')}
          </NavItem>
        </NavContainer>
        <AbsoluteLanguage />
      </NavigationContainer>
    </>
  );
}

AppNavigationMenu.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default AppNavigationMenu;
