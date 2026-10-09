import { PlaceCard, PlaceCardType } from '../types/place-card';

export const mockOffers: PlaceCard[] = [
  {
    id: 'offer-1',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: PlaceCardType.Apartment,
    rating: 80,
    isPremium: true,
    isBookmarked: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.354367000000004,
        longitude: 4.677621999999999,
        zoom: 13,
      },
    },
  },
  {
    id: 'offer-2',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 80,
    title: 'Wood and stone place',
    type: PlaceCardType.Room,
    rating: 60,
    isPremium: false,
    isBookmarked: true,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361000000005,
        longitude: 6.959974,
        zoom: 13,
      },
    },
  },
  {
    id: 'offer-3',
    img: 'https://images.unsplash.com/photo-1780427670049-43aa7921e3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 250,
    title: 'Canal view parka. Antwerp',
    type: PlaceCardType.Apartment,
    rating: 100,
    isPremium: true,
    isBookmarked: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.367252299999995,
        longitude: 4.903096,
        zoom: 12,
      },
    },
  },
  {
    id: 'offer-4',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 600,
    title: 'The house among olive ',
    type: PlaceCardType.Room,
    rating: 40,
    isPremium: false,
    isBookmarked: false,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
  },
];
