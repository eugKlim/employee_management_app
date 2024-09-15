import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';

import { Provider } from 'react-redux';
import Store from './Components/Store.tsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
