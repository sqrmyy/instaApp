// import React from 'react';
// import { Platform } from 'react-native';
// import { Icon } from 'expo';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './components/HomeScreen';
// import DetailScreen from './components/DetailScreen';
import FeedScreen from './components/FeedScreen';
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

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
    },
  },
  {
    initialRouteName: 'Feed',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Feed: FeedStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
);

export default TabNavigator;
