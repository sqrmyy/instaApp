// import React from 'react';
// import { Platform } from 'react-native';
// import {
//   createStackNavigator,
//   createBottomTabNavigator,
// } from 'react-navigation';
// import { Icon } from 'expo';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
// import DetailScreen from './components/DetailScreen';
// import FeedScreen from './components/FeedScreen';
// import ProfileScreen from './components/ProfileScreen';
// import ProfileEditScreen from './components/ProfileEditScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default HomeStack;
