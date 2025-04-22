import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { offersCity, } from './mocks';
import { city } from './mocks/city';
import { store } from './store';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction())



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App city={city} offersCity={offersCity} />
    </Provider>
  </React.StrictMode>
);
