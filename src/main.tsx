import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { FormContextProvider } from '~/store/FormContext';
import { PageContextProvider } from '~/store/PageContext';
import { SnackbarProvider } from 'notistack';
import { UserContextProvider } from '~/store/UserContext';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={5}>
      <UserContextProvider>
        <PageContextProvider>
          <FormContextProvider>
            <App />
          </FormContextProvider>
        </PageContextProvider>
      </UserContextProvider>
    </SnackbarProvider>
  </React.StrictMode>,
);
