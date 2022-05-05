import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Favorite } from '../../../components/favorites/favorite.component';
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  RatingOpenContainer,
  Rating,
  OpenNow,
  RestaurantIcon,
} from './restaurant-info-card-styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
    placeId = 1,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <RestaurantCard elevation={50}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Address>{address}</Address>
        <RatingOpenContainer>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                width="20"
                height="20"
                xml={star}
              />
            ))}
          </Rating>
          <OpenNow>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml width="20" height="20" xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <RestaurantIcon source={{ uri: icon }} />
            </Spacer>
          </OpenNow>
        </RatingOpenContainer>
      </Info>
    </RestaurantCard>
  );
};
