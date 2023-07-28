import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormContextProvider } from '~/store/FormContext';
import { PageContextProvider } from '~/store/PageContext';

import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </PageContextProvider>
  </React.StrictMode>,
);
