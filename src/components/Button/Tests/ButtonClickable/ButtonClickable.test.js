import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import Button from '../..';

const feature = loadFeature(
  'src/components/Button/Tests/ButtonClickable/ButtonClickable.feature',
);

defineFeature(feature, (test) => {
  const onClick = jest.fn();

  test('Button clicked should fire the callBack method', ({
    given,
    when,
    then,
  }) => {
    let container;
    let button;
    given('Button is clickable', () => {
      container = render(
        <Button label="testLabel" onClick={onClick} />,
      ).container;
      expect(container).toMatchSnapshot();
      button = screen.getByText('testLabel');
    });

    when('Button is clicked', () => {
      fireEvent.click(button);
    });

    then('Button callback should be called once', () => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
