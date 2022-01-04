import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import LabelCheckbox from '../..';

const feature = loadFeature(
  // eslint-disable-next-line max-len
  'src/components/LabelCheckbox/Tests/LabelCheckboxEnabled/LabelCheckboxEnabled.feature',
);

defineFeature(feature, (test) => {
  let container;

  // TODO: Externalize this method
  const givenLabelCheckboxIsRendered = (given, component) => {
    given('LabelCheckbox component is rendered', () => {
      container = render(component).container;
    });
  };

  test('LabelCheckBox should allow to check', ({ given, and, when, then }) => {
    givenLabelCheckboxIsRendered(given, <LabelCheckbox label="testLabel" />);

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelCheckboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('labelContainer')).toBeInTheDocument();
      expect(screen.getByTestId('checkboxContainer')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
    });

    and('The default style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    when('Click event is fired', () => {
      userEvent.click(screen.getByTestId('hiddenCheckbox'));
    });

    then('LabelCheckBox should be checked', () => {
      expect(screen.getByTestId('checkboxIcon')).toBeInTheDocument();
    });

    when('Click event is fired again', () => {
      userEvent.click(screen.getByTestId('hiddenCheckbox'));
    });

    then('LabelCheckBox should be unchecked', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
    });
  });

  test('CheckBox label can be a custom component', ({ given, and }) => {
    givenLabelCheckboxIsRendered(
      given,
      <LabelCheckbox label={<a href="#">testLink</a>} />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelCheckboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('checkboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('labelContainer')).toBeInTheDocument();
      expect(screen.getByText('testLink')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
    });

    and('The default style is applied', () => {
      expect(container).toMatchSnapshot();
    });
  });

  test('LabelCheckBox is hovered', ({ given, and, when, then }) => {
    givenLabelCheckboxIsRendered(given, <LabelCheckbox label="testLabel" />);

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelCheckboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('checkboxContainer')).toBeInTheDocument();
      expect(screen.getByTestId('labelContainer')).toBeInTheDocument();
      expect(screen.getByText('testLabel')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('checkboxIcon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
    });

    and('The default style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    when('Hover event is fired', () => {
      userEvent.hover(screen.getByTestId('LabelCheckboxContainer'));
    });

    then('The hover style should be applied', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
