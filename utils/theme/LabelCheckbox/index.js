import { global } from '../global';

export const labelCheckbox = {
  iconColor: {
    default: global.colors.white,
    hover: global.colors.hover.white,
    disabled: global.colors.disabledGrey,
    error: global.colors.white,
  },
  textColor: {
    default: global.colors.darkBlue,
    hover: global.colors.hover.darkBlue,
    disabled: global.colors.disabledGrey,
    error: global.colors.darkBlue,
  },
  fontSize: {
    small: global.fontSize[11],
    normal: global.fontSize[13],
  },
  labelMargin: {
    // The margin is the opposite of the labelPosition
    left: '0rem 0.625rem 0rem 0rem',
    right: '0rem 0rem 0rem 0.625rem',
  },
  background: {
    unselected: {
      default: global.colors.white,
      hover: global.colors.white,
      disabled: global.colors.grey,
      error: global.colors.white,
    },
    selected: {
      default: global.colors.green,
      hover: global.colors.hover.green,
      disabled: global.colors.grey,
      error: global.colors.status.error,
    },
  },
  border: {
    unselected: {
      default: `0.063rem solid ${global.colors.mediumGrey}`,
      hover: `0.063rem solid ${global.colors.brownGrey}`,
      error: `0.063rem solid ${global.colors.status.error}`,
    },
  },
  errorMessage: {
    color: global.colors.status.error,
    fontSize: global.fontSize[10],
    fontWeight: global.fontWeight.semiBold,
  },
};
