import React from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from 'react-native';

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <Text>
        Restaurant Details - {restaurant.name} - {restaurant.address}
      </Text>
    </SafeArea>
  );
};
