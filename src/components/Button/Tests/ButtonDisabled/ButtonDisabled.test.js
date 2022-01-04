import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import Button from '../..';

const feature = loadFeature(
  'src/components/Button/Tests/ButtonDisabled/ButtonDisabled.feature',
);

defineFeature(feature, (test) => {
  const onClick = jest.fn();

  test('Button clicked should not fire callBack method', ({
    given,
    when,
    then,
  }) => {
    let container;
    let button;
    given('Button is disabled', () => {
      container = render(
        <Button label="testLabel" disabled={true} onClick={onClick} />,
      ).container;
      expect(container).toMatchSnapshot();
      button = screen.getByText('testLabel');
    });

    when('Button is clicked', () => {
      fireEvent.click(button);
    });

    then('Button callback should not be called', () => {
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
