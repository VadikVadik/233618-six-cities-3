import { Offer } from '../types/offers';

const offers: Offer[] = [
  {
    id: '7a1bd8bd-14e4-4aca-a04c-8b98b0c873b1',
    title: 'House in countryside',
    type: 'house',
    price: 695,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.4,
  },
  {
    id: '52f3c7c1-c9eb-4339-8834-d21b644931e6',
    title: 'The house among olive ',
    type: 'apartment',
    price: 252,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.1,
  },
  {
    id: '8f463d9c-6ef2-410d-bd3a-2c73835609db',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 359,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.4,
  },
  {
    id: '88372400-2ad9-4940-88fd-19be1c658bfc',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 493,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
  },
];

export { offers };
