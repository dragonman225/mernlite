import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './container/Root';

const rootElement = document.getElementById('root');

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement,
  );
};

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./container/Root', () => {
    const newApp = require('./container/Root').default;
    renderApp(newApp);
  });
}
