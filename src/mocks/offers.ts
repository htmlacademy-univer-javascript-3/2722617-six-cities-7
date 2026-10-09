import { PlaceCard, PlaceCardType, Rating } from '../types/place-card';

export const mockOffers: PlaceCard[] = [
  {
    id: 'offer-1',
    img: 'https://example.com/images/apartment-1.jpg',
    cost: 1200,
    title: 'Уютная квартира в центре города',
    type: PlaceCardType.Apartment,
    rating: 80,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: 'offer-2',
    img: 'https://example.com/images/room-1.jpg',
    cost: 800,
    title: 'Стильная комната в общежитии',
    type: PlaceCardType.Room,
    rating: 60,
    isPremium: false,
    isBookmarked: true,
  },
  {
    id: 'offer-3',
    img: 'https://example.com/images/apartment-2.jpg',
    cost: 2500,
    title: 'Просторная квартира с видом на реку',
    type: PlaceCardType.Apartment,
    rating: 100,
    isPremium: true,
    isBookmarked: true,
  },
  {
    id: 'offer-4',
    img: 'https://example.com/images/room-2.jpg',
    cost: 600,
    title: 'Комната рядом с университетом',
    type: PlaceCardType.Room,
    rating: 40,
    isPremium: false,
    isBookmarked: false,
  },
];
