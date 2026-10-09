import type { PlaceCard } from '../../types/place-card';
import PlaceCardComponent from '../place-card/place-card';

type PlacesListProps = {
  offers: PlaceCard[];
};

function PlacesList({ offers }: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCardComponent key={offer.id} {...offer} />
      ))}
    </div>
  );
}

export default PlacesList;
