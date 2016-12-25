import React, { PropTypes } from 'react'
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const app = (props) => {
  return (
    <Provider store={createStore(reducers)}>
      <Header text="Redux App" />
      <View />
    </Provider>
  );
};

export default app;
