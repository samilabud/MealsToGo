import React, { useContext } from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { FlatList, TouchableOpacity } from 'react-native';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

const AvatarContainer = styled.View`
  align-items: center;
`;
const FavoriteList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 10 },
})``;
const NoFavoritesArea = styled.View`
  align-items: center;
  margin-top: ${(props) => props.theme.space[4]};
`;

export const FavoriteScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="account-star" backgroundColor="#ffde28" />
        <Spacer position="top" size="large">
          <Text variant="label">Favorites</Text>
        </Spacer>
      </AvatarContainer>
      {favorites.length ? (
        <FavoriteList
          data={favorites}
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
      ) : (
        <NoFavoritesArea>
          <Text variant="label">No favorites yet</Text>
        </NoFavoritesArea>
      )}
    </SafeArea>
  );
};
