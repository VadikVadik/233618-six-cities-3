import FavoritePlaceCard from '../../components/favorite-place-card/favorite-place-card';
import { Offers } from '../../types/offers';

type FavoritesScreenProprs = {
  header: JSX.Element;
  offers: Offers;
};

function FavoritesScreen({ header, offers }: FavoritesScreenProprs) {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const cities = [...new Set(favoritesOffers.map((offer) => offer.city.name))];
  return (
    <div className="page">
      {header}

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li
                  key={crypto.randomUUID()}
                  className="favorites__locations-items"
                >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesOffers.map((offer) =>
                      offer.city.name === city ? (
                        <FavoritePlaceCard key={offer.id} offer={offer} />
                      ) : null,
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
