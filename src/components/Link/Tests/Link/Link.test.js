import * as React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '../../../../../configs/jest/testUtils';
import Link from '../..';

const feature = loadFeature('src/components/Link/Tests/Link/Link.feature');

defineFeature(feature, (test) => {
  let container;

  // TODO: Externalize this method
  const givenLinkIsRendered = (given, comp) => {
    given('Link is mounted', () => {
      container = render(comp).container;
    });
  };

  test('Default link', ({ given, then, and }) => {
    givenLinkIsRendered(
      given,
      <Link text="testLink" link="https://www.google.com/" />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByText(/testLink/i)).toBeInTheDocument();
    });

    then('Link should have the default style', () => {
      expect(container).toMatchSnapshot();
    });
  });

  test('Link hovered', ({ given, when, then, and }) => {
    givenLinkIsRendered(
      given,
      <Link text="testLink" link="https://www.google.com/" />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByText(/testLink/i)).toBeInTheDocument();
    });

    when('Link is hovered', () => {
      userEvent.hover(screen.queryByText(/testLink/i));
    });

    then('Link should have the hover style', () => {
      expect(container).toMatchSnapshot();
    });
  });

  test('Link clicked', ({ given, when, then, and }) => {
    givenLinkIsRendered(
      given,
      <Link text="testLink" link="https://www.google.com/" />,
    );

    and('Required elements are mounted', () => {
      expect(screen.getByText(/testLink/i)).toBeInTheDocument();
    });

    when('Click event is fired', () => {
      userEvent.click(screen.getByText(/testLink/i));
    });

    then('Link should have the visited style', () => {
      expect(container).toMatchSnapshot();
    });

    and('The user should be redirected to the right page', () => {
      waitForElementToBeRemoved(screen.queryByText(/testLink/i))
        .then(() => {
          expect(screen.queryByText(/testLink/i)).not.toBeInTheDocument();
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('User not redirected');
        });
    });
  });
});
