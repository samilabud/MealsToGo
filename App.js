import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TAB_ICON_FOCUSED = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const TAB_ICON_OUTLINE = {
  Restaurants: 'restaurant-outline',
  Map: 'map-outline',
  Settings: 'settings-outline',
};

const tabBarIcon =
  (routeName) =>
  ({ focused, size, color }) => {
    const iconName = focused
      ? TAB_ICON_FOCUSED[routeName]
      : TAB_ICON_OUTLINE[routeName];
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const screenOptions = ({ route }) => {
  return {
    tabBarIcon: tabBarIcon(route.name),
  };
};

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={SettingsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
