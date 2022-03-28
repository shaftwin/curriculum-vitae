import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CgMenuGridR } from 'react-icons/cg';
import {
  CloseIconContainer,
  CustomVscChromeClose,
  MenuIcon,
  NavContainer,
  NavigationContainer,
  NavItem,
} from './styled';

function AppNavigationMenu({ setCurrentPage, innerWidth }) {
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
        <CgMenuGridR color={theme.colors.lightGrey} size="3.5em" />
      </MenuIcon>
      <NavigationContainer isMenuOpen={isMenuOpen} innerWidth={innerWidth}>
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
          >
            {t('common:about')}
          </NavItem>
          <NavItem
            onClick={() => {
              setCurrentPage(1);
              setIsMenuOpen(false);
            }}
            color={theme.colors.pink}
            backgroundColor={theme.backgroundColors.pinkAlpha}
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
          >
            {t('common:contact')}
          </NavItem>
        </NavContainer>
      </NavigationContainer>
    </>
  );
}

AppNavigationMenu.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  innerWidth: PropTypes.number.isRequired,
};

export default AppNavigationMenu;
