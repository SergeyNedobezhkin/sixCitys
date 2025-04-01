import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { offers, offersCity, reviewsBlock, } from './mocks';
import { city } from './mocks/city';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App offers={offers} city={city} offersCity={offersCity} reviewsBlock={reviewsBlock} />
    </Provider>
     </React.StrictMode>
);
