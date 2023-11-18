import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './Components/App';
import { GlobalStyle } from './GlobalStyle';
import { store, persistor } from 'Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/goit-react-hw-08-phonebok">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <GlobalStyle />
          <App />
        </div>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);