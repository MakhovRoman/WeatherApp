import '@styles/globales.scss';

import { App } from '@components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { createStore } from './store/store';

const store = createStore();

export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
