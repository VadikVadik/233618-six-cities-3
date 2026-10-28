import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Header from '../header/header';
import { AppRoute } from '../../const';
import { Offers } from '../../types/offers';

type AppScreenProps = {
  offers: Offers;
};

function App({ offers }: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={
            <MainScreen
              header={<Header authorizationStatus />}
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.LOGIN}
          element={<LoginScreen header={<Header authorizationStatus />} />}
        />
        <Route
          path={AppRoute.FAVORITES}
          element={
            <PrivateRoute>
              <FavoritesScreen
                header={<Header authorizationStatus />}
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.OFFER}
          element={<OfferScreen header={<Header authorizationStatus />} />}
        />
        <Route path={AppRoute.NOT_FOUND} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
