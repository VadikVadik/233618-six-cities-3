import PlaceCard from '../place-card/place-card';
import { Offers, Offer } from '../../types/offers';
import { useState } from 'react';

type PlacesListProps = {
  offers: Offers;
};

function PlacesList({ offers }: PlacesListProps) {
  const [activeCard, setActiveCard] = useState({});
  const mouseOverHandler = (offer: Offer) => setActiveCard(offer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseOver={() => mouseOverHandler(offer)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
