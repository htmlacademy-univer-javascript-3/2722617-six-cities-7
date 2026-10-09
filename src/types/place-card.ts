export type Rating = 0 | 20 | 40 | 60 | 80 | 100;

export type PlaceCard = {
  img: string;
  cost: number;
  title: string;
  type: PlaceCardType;
  rating: Rating;
  isPremium: boolean;
  isBookmarked: boolean;
};

export enum PlaceCardType {
  Apartment = 'Apartment',
  Room = 'Room',
}
