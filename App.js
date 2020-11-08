import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import configureStore from './configureStore';

const store = configureStore();

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
