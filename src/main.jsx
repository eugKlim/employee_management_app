import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './scss/index.scss';

import { SearchProvider } from './Components/Search/Search-Context';
import { StatusProvider } from './Components/Status-Panel/StatusContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StatusProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </StatusProvider>
  </React.StrictMode>
);
