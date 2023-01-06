import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../routes';

import { HomeScene, LoginScene } from 'scr/scenes';

const Private = createStackNavigator();
const Public = createStackNavigator();

export const PublicStack = (): JSX.Element => (
  <Public.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Public.Screen name={Routes.LOGIN} component={LoginScene} />
  </Public.Navigator>
);

export const PrivateStack = (): JSX.Element => {
  return (
    <Private.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerBackTitleVisible: false,
      }}
    >
      <Private.Screen
        name={Routes.HOME}
        component={HomeScene}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Private.Navigator>
  );
};
