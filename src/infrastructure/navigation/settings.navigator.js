import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SettingsScreen } from '../../features/settings/screens/settings.screens';
import { FavoriteScreen } from '../../features/settings/screens/favorite.screens';
import { CameraScreen } from '../../features/settings/screens/camera.screens';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        screenOptions={{
          cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        screenOptions={{
          cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
        name="Favorites"
        component={FavoriteScreen}
      />
      <SettingsStack.Screen
        screenOptions={{
          cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
        name="Camera"
        component={CameraScreen}
      />
    </SettingsStack.Navigator>
  );
};
