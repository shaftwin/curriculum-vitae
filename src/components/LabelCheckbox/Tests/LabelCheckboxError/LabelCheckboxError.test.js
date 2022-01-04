import * as React from 'react';
import { screen } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import LabelCheckbox from '../..';

const feature = loadFeature(
  // eslint-disable-next-line max-len
  'src/components/LabelCheckbox/Tests/LabelCheckboxError/LabelCheckboxError.feature',
);

defineFeature(feature, (test) => {
  let container;

  const givenLabelCheckboxIsRendered = (given, component) => {
    given('LabelCheckbox component is rendered', () => {
      container = render(component).container;
    });
  };

  test('CheckBox throw error without message', ({ given, and }) => {
    givenLabelCheckboxIsRendered(
      given,
      <LabelCheckbox label="testLabel" error={true} />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelCheckboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('labelContainer')).toBeInTheDocument();
      expect(screen.getByTestId('checkboxContainer')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
    });

    and('The error style is applied', () => {
      expect(container).toMatchSnapshot();
    });
  });

  test('CheckBox throw error with message', ({ given, and }) => {
    givenLabelCheckboxIsRendered(
      given,
      <LabelCheckbox
        label="testLabel"
        error={true}
        errorMessage="errorMessage"
      />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelCheckboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('labelContainer')).toBeInTheDocument();
      expect(screen.getByTestId('checkboxContainer')).toBeInTheDocument();
      expect(screen.getByText('errorMessage')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
    });

    and('The error style is applied', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
