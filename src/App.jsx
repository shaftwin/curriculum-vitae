// import { getLCP, getFID, getCLS } from 'web-vitals';
// import ReactGA from 'react-ga';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from '../utils/theme/theme';
import graphqlAppClient from '../configs/graphql';
import { AuthProvider } from '../services/context/auth/auth';
import { initSentry } from '../services/logs/sentry';
import UnauthenticatedRoutes from '../services/router/UnauthenticatedRoutes';
import { initTranslation } from '../services/translation/i18n';

const App = () => {
  initSentry();
  initTranslation();

  return (
    <ApolloProvider client={graphqlAppClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <UnauthenticatedRoutes />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

// ReactGA.initialize('UA-283600114-01');
// ReactGA.pageview(window.location.pathname + window.location.search);

// function sendToGoogleAnalytics({ name, delta, value, id }) {
// Assumes the global `gtag()` function exists, see:
// https://developers.google.com/analytics/devguides/collection/ga4
// ReactGA.gtag('event', name, {
// Built-in params:
// value: delta, // Use `delta` so the value can be summed.
// Custom params:
// metric_id: id, // Needed to aggregate events.
// metric_value: value, // Optional.
// metric_delta: delta, // Optional.

// OPTIONAL: any additional params or debug info here.
// See: https://web.dev/debug-web-vitals-in-the-field/
// metric_rating: 'good' | 'ni' | 'poor',
// debug_info: '...',
// ...
// });
// }

// getCLS(sendToGoogleAnalytics);
// getFID(sendToGoogleAnalytics);
// getLCP(sendToGoogleAnalytics);

App.propTypes = {};

export default App;
