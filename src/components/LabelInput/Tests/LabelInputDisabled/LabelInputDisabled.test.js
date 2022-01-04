import * as React from 'react';
import { screen } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import LabelInput from '../..';

const feature = loadFeature(
  // eslint-disable-next-line max-len
  'src/components/LabelInput/Tests/LabelInputDisabled/LabelInputDisabled.feature',
);

const cursor = (element) => window.getComputedStyle(element).cursor;

defineFeature(feature, (test) => {
  let container;

  // TODO: Externalize this method
  const givenLabelInputIsRendered = (given, comp) => {
    given('LabelInput component is rendered', () => {
      container = render(comp).container;
    });
  };

  test('Disabled LabelInput should not allow to fill text', ({
    given,
    and,
  }) => {
    givenLabelInputIsRendered(given, <LabelInput inputState="disabled" />);

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorIcon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('label')).not.toBeInTheDocument();
    });

    and('The disable style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    and('LabelInput is disable', () => {
      expect(screen.getByTestId('input')).toBeDisabled();
    });

    and('The value of the cursor should be not allowed', () => {
      expect(cursor(screen.getByTestId('inputWrapper'))).toBe('not-allowed');
    });
  });

  test('Disabled LabelInput with value in props', ({ given, and }) => {
    const inputData = 'disabledInputValue';

    givenLabelInputIsRendered(
      given,
      <LabelInput
        label="disabledInput"
        inputValue={inputData}
        inputState="disabled"
      />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
      expect(screen.getByText(/disabledInput/i)).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorIcon')).not.toBeInTheDocument();
    });

    and('The disable style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    and('LabelInput value should be equal to XXX', () => {
      expect(screen.getByTestId('input').value).toBe(inputData);
    });
  });
});
