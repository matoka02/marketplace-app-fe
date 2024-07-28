import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import { store } from './redux';
import './localization/i18n';
import { Root } from './Root';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <Provider store={store}>
      <Root />
    </Provider>
  </Auth0Provider>,
);
