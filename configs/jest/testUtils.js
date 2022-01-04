// import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import React from 'react';
import { theme } from '../../utils/theme/theme';

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
