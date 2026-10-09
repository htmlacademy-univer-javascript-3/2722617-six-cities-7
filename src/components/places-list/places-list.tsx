import { useState } from 'react';

import type { PlaceCard } from '../../types/place-card';
import PlaceCardComponent from '../place-card/place-card';

type PlacesListProps = {
  offers: PlaceCard[];
};

function PlacesList({ offers }: PlacesListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<PlaceCard | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCardComponent
          key={offer.id}
          {...offer}
          onMouseEnter={() => setActiveOffer(offer)}
          onMouseLeave={() => setActiveOffer(null)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
