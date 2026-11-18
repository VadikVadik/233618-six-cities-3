enum AppRoute {
  ROOT = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id',
  NOT_FOUND = '*',
}

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const SRC_MARKER_DEFAULT = '../img/pin.svg';

const SRC_MARKER_CURRENT = '../img/pin-active.svg';

export { AppRoute, CITIES, SRC_MARKER_CURRENT, SRC_MARKER_DEFAULT };
