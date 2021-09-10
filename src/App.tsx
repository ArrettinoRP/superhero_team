import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './navigation';
import {store, persistor} from './redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};
