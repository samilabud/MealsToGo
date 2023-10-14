import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, DefaultTheme } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { Search } from '../components/search.component';
import { FadeInView } from '../../../components/animations/fade.animation';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 10 },
})``;
const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const OwnActivityIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favorites } = useContext(FavoritesContext);
  const { error: errorLocation } = useContext(LocationContext);
  const hasError = !!error || !!errorLocation;

  return (
    <SafeArea>
      <Search
        isFavoriteToggled={isToggled}
        onFavoriteToggle={() => setIsToggled(!isToggled)}
      />
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">
            ERROR: {error ? error.toUpperCase() : ''}
            {errorLocation ? errorLocation.toUpperCase() : ''}
          </Text>
        </Spacer>
      )}
      {isToggled && !hasError && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading && !hasError && (
        <LoadingView>
          <OwnActivityIndicator
            animating={true}
            color={DefaultTheme.colors.secondary}
            size={50}
          />
        </LoadingView>
      )}
      {!isLoading && !hasError && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetailScreen', {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
