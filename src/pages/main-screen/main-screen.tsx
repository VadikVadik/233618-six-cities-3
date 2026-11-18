import PlacesList from '../../components/places-list/places-list';
import CityTabsList from '../../components/city-tabs-list/city-tabs-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offers';
import { MouseEvent, useState } from 'react';

type MainScreenProprs = {
  header: JSX.Element;
  offers: Offer[];
};

function MainScreen({ header, offers }: MainScreenProprs) {
  const [currentCity, setCurrentCity] = useState('Amsterdam');
  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === currentCity,
  );

  const handleCityTabClick = (event: MouseEvent) =>
    setCurrentCity(event.currentTarget.textContent);

  return (
    <div className="page page--gray page--main">
      {header}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabsList
          currentCity={currentCity}
          tabClickHandler={handleCityTabClick}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentCityOffers.length} places to stay in {currentCity}
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
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
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
              <PlacesList offers={currentCityOffers} />
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
