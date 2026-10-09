import { PlaceCard, PlaceCardType } from '../types/place-card';

export const mockOffers: PlaceCard[] = [
  {
    id: 'offer-1',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 1200,
    title: 'Уютная квартира в центре города',
    type: PlaceCardType.Apartment,
    rating: 80,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: 'offer-2',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 800,
    title: 'Стильная комната в общежитии',
    type: PlaceCardType.Room,
    rating: 60,
    isPremium: false,
    isBookmarked: true,
  },
  {
    id: 'offer-3',
    img: 'https://images.unsplash.com/photo-1780427670049-43aa7921e3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 2500,
    title: 'Просторная квартира с видом на реку',
    type: PlaceCardType.Apartment,
    rating: 100,
    isPremium: true,
    isBookmarked: true,
  },
  {
    id: 'offer-4',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cost: 600,
    title: 'Комната рядом с университетом',
    type: PlaceCardType.Room,
    rating: 40,
    isPremium: false,
    isBookmarked: false,
  },
];
