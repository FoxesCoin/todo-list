import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'app/app';

import { PERSISTOR, REDUX_STORE } from 'services/store';
import { GlobalStyles } from 'styles/global';

import { RWrapper } from 'types/react';

import 'styles/reset.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

const Wrapper: RWrapper = ({ children }) => {
  if (process.env.NODE_ENV === 'production') {
    return <>{children}</>;
  }

  return <React.StrictMode>{children}</React.StrictMode>;
};

root.render(
  <Wrapper>
    <Provider store={REDUX_STORE}>
      <PersistGate loading={null} persistor={PERSISTOR}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </Wrapper>
);
