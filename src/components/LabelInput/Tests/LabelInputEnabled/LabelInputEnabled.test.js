import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { defineFeature, loadFeature } from 'jest-cucumber';
import * as React from 'react';
import LabelInput from '../..';
import { render } from '../../../../../configs/jest/testUtils';

const feature = loadFeature(
  'src/components/LabelInput/Tests/LabelInputEnabled/LabelInputEnabled.feature',
);

defineFeature(feature, (test) => {
  let container;

  // TODO: Externalize this method
  const givenLabelInputIsRendered = (given, comp) => {
    given('LabelInput component is rendered', () => {
      container = render(comp).container;
    });
  };

  test('Default LabelInput with some parameters', ({ given, and }) => {
    givenLabelInputIsRendered(
      given,
      <LabelInput label="testLabel" inputValue="testValue" />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByText(/testLabel/)).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorIcon')).not.toBeInTheDocument();
    });

    and('The filled style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    and('The input has the right value', () => {
      expect(screen.getByTestId('input').value).toBe('testValue');
    });
  });

  test('LabelInput should allow to write text', ({
    given,
    when,
    then,
    and,
  }) => {
    const testData = 'new test value';
    givenLabelInputIsRendered(
      given,
      <LabelInput label="testLabel" inputValue="testValue" />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByText(/testLabel/i)).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorIcon')).not.toBeInTheDocument();
    });

    and('The default style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    when('The input is cleared and filled', () => {
      userEvent.clear(screen.getByTestId('input'));
      userEvent.type(screen.getByTestId('input'), testData);
    });

    then('LabelInput value should be XXX', () => {
      expect(screen.getByTestId('input').value).toBe(testData);
    });

    and('The filled style should be applied', () => {
      expect(container).toMatchSnapshot();
    });
  });

  test('LabelInput without params and data', ({ given, then, and }) => {
    givenLabelInputIsRendered(given, <LabelInput />);

    and('Required elements are mounted', () => {
      expect(screen.getByTestId(/LabelInput/i)).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('label')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorIcon')).not.toBeInTheDocument();
    });

    and('The default style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    then('LabelInput value should be empty', () => {
      expect(screen.getByTestId('input').value).toBe('');
    });
  });

  test('LabelInput is hovered', ({ given, when, and, then }) => {
    givenLabelInputIsRendered(given, <LabelInput label="testLabel" />);

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByText(/testLabel/i)).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorIcon')).not.toBeInTheDocument();
    });

    and('The default style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    when('Hover event is fired', () => {
      userEvent.hover(screen.getByTestId('LabelInput'));
    });

    then('The hover style should be applied', () => {
      expect(container).toMatchSnapshot();
    });
  });

  test('LabelInput is focused', ({ given, when, and, then }) => {
    givenLabelInputIsRendered(given, <LabelInput label="testLabel" />);

    and('Required elements are mounted', () => {
      expect(screen.getByTestId('LabelInput')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByText(/testLabel/i)).toBeInTheDocument();
      expect(screen.getByTestId('inputWrapper')).toBeInTheDocument();
    });

    and('Undesirable elements are not mounted', () => {
      expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
      expect(screen.queryByTestId('errorIcon')).not.toBeInTheDocument();
    });

    and('The default style is applied', () => {
      expect(container).toMatchSnapshot();
    });

    when('LabelInput is focused', () => {
      fireEvent.focus(screen.getByTestId('input'));
    });

    then('The focus style should be applied', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
