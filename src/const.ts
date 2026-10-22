const Setting = {
  TOTAL_PLACES_COUNT: 312,
};

enum AppRoute {
  ROOT = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id',
  NOT_FOUND = '*',
}

export { Setting, AppRoute };
