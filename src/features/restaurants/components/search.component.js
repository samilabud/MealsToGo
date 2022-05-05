import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

const RestaurantSearchView = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const Search = ({ isFavoriteToggled, onFavoriteToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <RestaurantSearchView>
      <Searchbar
        icon={isFavoriteToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoriteToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </RestaurantSearchView>
  );
};
