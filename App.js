import React from 'react';
import { Provider } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
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
