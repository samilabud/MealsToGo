import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from './restaurants.navigator';
import { SafeArea } from '../../components/utility/safe-area.component';
import { MapScreen } from '../../features/map/screen/map.screen';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';

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

const Settings = () => {
  const { logOut } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Logout" onPress={() => logOut()} />
    </SafeArea>
  );
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);

export default AppNavigator;
