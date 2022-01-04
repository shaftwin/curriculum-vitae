import { global } from '../global';

export const link = {
  textColor: {
    primary: {
      default: global.colors.green,
      hover: global.colors.hover.green,
      visited: global.colors.mediumGrey,
    },
    secondary: {
      default: global.colors.darkBlue,
      hover: global.colors.hover.green,
      visited: global.colors.mediumGrey,
    },
    white: {
      default: global.colors.white,
      hover: global.colors.hover.green,
      visited: global.colors.disabledGrey,
    },
  },
  fontSize: {
    extraSmall: global.fontSize[11],
    small: global.fontSize[12],
    normal: global.fontSize[13],
  },
  fontWeight: {
    extraSmall: global.fontWeight.semiBold,
    small: global.fontWeight.semiBold,
    normal: global.fontWeight.bold,
  },
};
