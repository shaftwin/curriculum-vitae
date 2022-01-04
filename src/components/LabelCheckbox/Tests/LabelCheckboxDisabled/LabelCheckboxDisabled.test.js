import * as React from 'react';
import { screen } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import userEvent from '@testing-library/user-event';
import { render } from '../../../../../configs/jest/testUtils';
import LabelCheckbox from '../..';

const feature = loadFeature(
  // eslint-disable-next-line max-len
  'src/components/LabelCheckbox/Tests/LabelCheckboxDisabled/LabelCheckboxDisabled.feature',
);

defineFeature(feature, (test) => {
  let container;

  const givenLabelCheckboxIsRendered = (given, component) => {
    given('LabelCheckbox component is rendered', () => {
      container = render(component).container;
    });
  };

  test('Disabled LabelCheckbox should not allow to check', ({
    given,
    and,
    when,
    then,
  }) => {
    givenLabelCheckboxIsRendered(
      given,
      <LabelCheckbox disabled label="testLabel" />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelCheckboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('checkboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('labelContainer')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
    });

    and('LabelCheckbox has the disabled style', () => {
      expect(container).toMatchSnapshot();
    });

    when('Click event is fired on Checkbox', () => {
      userEvent.click(screen.getByTestId('hiddenCheckbox'));
    });

    then('The checkbox is still not checked', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
    });
  });

  test('Disabled LabelCheckbox with value set to true', ({ given, and }) => {
    givenLabelCheckboxIsRendered(
      given,
      <LabelCheckbox disabled value={true} label="testLabel" />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelCheckboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('checkboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('labelContainer')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
    });

    and('LabelCheckbox has the disabled style', () => {
      expect(container).toMatchSnapshot();
    });

    and('Checkbox is checked', () => {
      expect(screen.getByTestId('checkboxIcon')).toBeInTheDocument();
    });
  });
});
