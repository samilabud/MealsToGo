import { mocks, mockImages } from './mocks';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  const results = new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('No mocks');
    }
    resolve(mock);
  });
  return results;
};

export const restaurantsTransform = ({ results = [] }) => {
  const mapResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      address: restaurant.vicinity,
    };
  });
  return camelize(mapResults);
};
