import { Link } from 'react-router-dom';

import type { PlaceCard } from '../../types/place-card';
import { AppRoute } from '../../const';
import OfferCardBody from '../offer-card/offer-card-body';

type PlaceCardProps = PlaceCard & {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function PlaceCard({
  id,
  img,
  cost,
  title,
  type,
  rating,
  isPremium,
  isBookmarked,
  onMouseEnter,
  onMouseLeave,
}: PlaceCardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <OfferCardBody
        isPremium={isPremium}
        rating={rating}
        cost={cost}
        title={title}
        type={type}
        imageLink={
          <Link to={`${AppRoute.Offer}/${id}`}>
            <img
              className="place-card__image"
              src={img}
              width={260}
              height={200}
              alt="Place image"
            />
          </Link>
        }
        bookmarkActive={isBookmarked}
      />
    </article>
  );
}

export default PlaceCard;
