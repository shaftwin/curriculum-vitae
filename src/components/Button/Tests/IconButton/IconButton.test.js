import * as React from 'react';
import { screen } from '@testing-library/react';

import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import Filter from '../../../../../assets/svg/filter';
import Button from '../..';

const feature = loadFeature(
  'src/components/Button/Tests/IconButton/IconButton.feature',
);

const flexDirection = (element) =>
  window.getComputedStyle(element).flexDirection;

defineFeature(feature, (test) => {
  test('IconButton has icon and the icon is at the left by default', ({
    given,
    then,
    and,
  }) => {
    let container;
    let icon;
    let button;
    given('Using the default iconLocation', () => {
      container = render(
        <Button label="testLabel" disabled={true} icon={<Filter />} />,
      ).container;
      icon = screen.queryByTestId(/iconContainer/i);
      button = screen.getByText('testLabel');
      expect(container).toMatchSnapshot();
    });

    then('The icon should exist', () => {
      expect(icon).not.toBeNull();
    });

    and('The icon should be at the left', () => {
      expect(flexDirection(button)).toBe('row');
    });
  });

  test('IconButton has icon at the right', ({ given, then, and }) => {
    let container;
    let icon;
    let button;
    given('iconLocation set to right', () => {
      container = render(
        <Button
          label="testLabel"
          iconPosition="right"
          disabled={true}
          icon={<Filter />}
        />,
      ).container;
      icon = screen.queryByTestId(/iconContainer/i);
      button = screen.getByText('testLabel');
      expect(container).toMatchSnapshot();
    });

    then('The icon should exist', () => {
      expect(icon).not.toBeNull();
    });

    and('The icon is at should be at the right', () => {
      expect(flexDirection(button)).toBe('row-reverse');
    });
  });
});
