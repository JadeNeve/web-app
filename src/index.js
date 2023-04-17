import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './App';
import {store, persistedStore} from './utils/store';
import { ThemeProvider, createTheme } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme();

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    </PersistGate>
  </Provider>
);
