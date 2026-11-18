import { Fragment } from 'react';
import { Offer } from '../../types/offers';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';

type CitiesPlacesSectionProps = {
  offers: Offer[];
  city: string;
  onOfferHover: (offer: Offer) => void;
  selectedOffer: Offer | Record<string, never>;
};

function CitiesPlacesSection({
  offers,
  city,
  onOfferHover,
  selectedOffer,
}: CitiesPlacesSectionProps) {
  return (
    <Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {city}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom">
            <li className="places__option places__option--active" tabIndex={0}>
              Popular
            </li>
            <li className="places__option" tabIndex={0}>
              Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
              Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
              Top rated first
            </li>
          </ul>
        </form>
        <PlacesList offers={offers} onOfferHover={onOfferHover} />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={offers[0].city}
            offers={offers}
            selectedOffer={selectedOffer}
          />
        </section>
      </div>
    </Fragment>
  );
}

export default CitiesPlacesSection;
