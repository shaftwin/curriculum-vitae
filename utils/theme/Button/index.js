import { global } from '../global';

export const button = {
  background: {
    primary: {
      default: {
        fill: global.colors.green,
        stroke: global.colors.white,
        text: global.colors.white,
      },
      hover: {
        fill: global.colors.hover.green,
        stroke: global.colors.white,
        text: global.colors.white,
      },
      disabled: {
        fill: global.colors.grey,
        stroke: global.colors.white,
        text: global.colors.white,
      },
    },
    secondary: {
      default: {
        fill: global.colors.lightGreen,
        stroke: global.colors.white,
        text: global.colors.white,
      },
      hover: {
        fill: global.colors.hover.lightGreen,
        stroke: global.colors.white,
        text: global.colors.white,
      },
      disabled: {
        fill: global.colors.grey,
        stroke: global.colors.white,
        text: global.colors.white,
      },
    },
    tertiary: {
      default: {
        fill: global.colors.darkBlue,
        stroke: global.colors.white,
      },
      hover: {
        fill: global.colors.hover.green,
        stroke: global.colors.white,
      },
      disabled: {
        fill: global.colors.grey,
        stroke: global.colors.white,
      },
    },
    white: {
      default: {
        fill: global.colors.white,
        stroke: global.colors.green,
        text: global.colors.green,
      },
      hover: {
        fill: global.colors.lightGreen,
        stroke: global.colors.green,
        text: global.colors.green,
      },
    },
  },
  textColor: {
    primary: {
      default: global.colors.darkBlue,
      hover: global.colors.darkBlue,
      disabled: global.colors.disabledGrey,
    },
    secondary: {
      default: global.colors.darkBlue,
      hover: global.colors.darkBlue,
      disabled: global.colors.disabledGrey,
    },
    tertiary: {
      default: global.colors.white,
      hover: global.colors.white,
      disabled: global.colors.disabledGrey,
    },
    white: {
      default: global.colors.darkBlue,
      hover: global.colors.hover.darkBlue,
      disabled: global.colors.brownGrey,
    },
  },
  // We use the border only when the type is stroke
  borderColor: {
    primary: {
      default: global.colors.green,
      hover: global.colors.hover.green,
      disabled: global.colors.grey,
    },
    secondary: {
      default: global.colors.lightGreen,
      hover: global.colors.hover.lightGreen,
      disabled: global.colors.grey,
    },
    tertiary: {
      default: global.colors.darkBlue,
      hover: global.colors.hover.green,
      disabled: global.colors.grey,
    },
    white: {
      default: global.colors.white,
      hover: global.colors.lightGreen,
      disabled: global.colors.grey,
    },
  },
  fontSize: {
    extraSmall: global.fontSize[10],
    small: global.fontSize[12],
    medium: global.fontSize[13],
  },
};
