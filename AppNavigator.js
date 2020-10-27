// import React from 'react';
// import { Platform } from 'react-native';
// import { Icon } from 'expo';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './containers/HomeScreen';
// import DetailScreen from './components/DetailScreen';
import FeedScreen from './containers/FeedScreen';
import ProfileScreen from './containers/ProfileScreen';
import ProfileEditScreen from './containers/ProfileEditScreen';

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

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Edit: {
      screen: ProfileEditScreen,
    },
  },
  {
    initialRouteName: 'Profile',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Feed: FeedStack,
    Profile: ProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
);

export default TabNavigator;
