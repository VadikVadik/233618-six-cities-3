import CityTabsList from '../../components/city-tabs-list/city-tabs-list';
import CitiesPlacesSection from '../../components/cities-places-section/cities-places-section';
import CitiesNoPlacesSection from '../../components/cities-no-places-section/cities-no-places-section';
import { Offer } from '../../types/offers';
import { MouseEvent, useState } from 'react';
import cn from 'classnames';

type MainScreenProprs = {
  header: JSX.Element;
  offers: Offer[];
};

function MainScreen({ header, offers }: MainScreenProprs) {
  const [currentCity, setCurrentCity] = useState('Amsterdam');
  const [selectedOffer, setSelectedOffer] = useState({});

  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === currentCity,
  );

  const handleOffersItemHover = (offer: Offer) => setSelectedOffer(offer);

  const handleCityTabClick = (event: MouseEvent) => {
    const city = event.currentTarget.textContent;

    if (city) {
      setCurrentCity(city);
    }
  };

  return (
    <div className="page page--gray page--main">
      {header}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabsList
          currentCity={currentCity}
          onTabClick={handleCityTabClick}
        />
        <div className="cities">
          <div
            className={cn('cities__places-container', 'container', {
              'cities__places-container--empty': !currentCityOffers.length,
            })}
          >
            {currentCityOffers.length ? (
              <CitiesPlacesSection
                offers={currentCityOffers}
                city={currentCity}
                onOfferHover={handleOffersItemHover}
                selectedOffer={selectedOffer}
              />
            ) : (
              <CitiesNoPlacesSection city={currentCity} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
