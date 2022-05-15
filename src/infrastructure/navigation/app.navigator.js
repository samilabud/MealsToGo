import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from './restaurants.navigator';
import { SafeArea } from '../../components/utility/safe-area.component';
import { MapScreen } from '../../features/map/screen/map.screen';

const Tab = createBottomTabNavigator();

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
    headerShown: false,
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default AppNavigator;
