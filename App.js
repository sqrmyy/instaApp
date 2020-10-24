import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    //AppContainerでラップ
    return <AppContainer />;
  }
}

export default App;
