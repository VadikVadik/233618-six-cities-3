import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offers';

type PlacesListProps = {
  offers: Offer[];
  onOfferHover: (offer: Offer) => void;
};

function PlacesList({ offers, onOfferHover }: PlacesListProps) {
  const mouseEnterHandler = (offer: Offer) => onOfferHover(offer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => mouseEnterHandler(offer)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
