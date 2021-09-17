import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './navigation';
import {store, persistor} from './redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {initLanguage} from './translations/initLanguage';

export const App: React.FC = () => {
  initLanguage();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};
