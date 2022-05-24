import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
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

  return (
    <SafeArea>
      <Search
        isFavoriteToggled={isToggled}
        onFavoriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading ? (
        <LoadingView>
          <OwnActivityIndicator
            animating={true}
            color={Colors.black}
            size={50}
          />
        </LoadingView>
      ) : (
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
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
