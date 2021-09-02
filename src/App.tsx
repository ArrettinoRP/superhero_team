import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './redux/reducers';
import {Navigation} from './navigation';

const store = createStore(rootReducer);

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
