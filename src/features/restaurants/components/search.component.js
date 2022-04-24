import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

const RestaurantSearchView = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RestaurantSearchView>
      <Searchbar
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
