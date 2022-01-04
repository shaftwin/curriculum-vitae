import * as React from 'react';
import { screen } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import LabelInput from '../..';

const feature = loadFeature(
  'src/components/LabelInput/Tests/LabelInputOnError/LabelInputOnError.feature',
);

defineFeature(feature, (test) => {
  let container;

  // TODO: Externalize this method
  const givenLabelInputIsRendered = (given, comp) => {
    given('LabelInput component is rendered', () => {
      container = render(comp).container;
    });
  };

  test('Default LabelInput on error without message', ({ given, and }) => {
    givenLabelInputIsRendered(
      given,
      <LabelInput
        label="testLabel"
        inputValue="testValue"
        inputState="error"
      />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByText(/testLabel/i)).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
      expect(screen.getByTestId('errorIcon')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
    });

    and('LabelInput should have the error style', () => {
      expect(container).toMatchSnapshot();
    });
  });

  test('LabelInput throw error with message', ({ given, and }) => {
    givenLabelInputIsRendered(
      given,
      <LabelInput
        label="testLabel"
        inputValue="testValue"
        inputState="error"
        errorMessage="errorMessage"
      />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByText(/testLabel/i)).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
      expect(screen.getByTestId('errorIcon')).toBeInTheDocument();
      expect(screen.getByText('errorMessage')).toBeInTheDocument();
    });

    and('LabelInput should have the error style', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
