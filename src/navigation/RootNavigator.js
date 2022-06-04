// src/navigation/RootNavigator.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import BioAuthScreen from '../screens/BioAuthScreen';
import BgTimerScreen from '../screens/BgTimer';

import { ActivityIndicator, Linking } from 'react-native';

const RootStack = createNativeStackNavigator();

const linking = {
    prefixes: ['peoplesapp://'],
    config: {
        screens: {
          Menu: {
            path: 'menu'
          },
          Home: {
            path: 'home'
          },
          Details: {
            path: 'details/:personId'
          },
          BioAuth: {
            path: 'bioauth'
          },
          BgTimer: {
            path: 'bgtimer'
          }
        }
      },
    getInitialURL: async () => {
      let url = await Linking.getInitialURL();
      console.log('Linking->InitialURL->%s', url);
    }
};

const RootNavigator = () => {
  return (
    <NavigationContainer
        linking={ linking }
        fallback={ <ActivityIndicator color="blue" size="large" /> }
        >
      <RootStack.Navigator>
        <RootStack.Screen name="Menu" component={ MenuScreen } />
        <RootStack.Screen name="Home" component={ HomeScreen } />
        <RootStack.Screen name="Details" component={ DetailsScreen } />
        <RootStack.Screen name="BioAuth" component={ BioAuthScreen } />
        <RootStack.Screen name="BgTimer" component={ BgTimerScreen } />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;