import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <div className="container">
          <h1>404 Not Found</h1>
          <Link className="locations__item-link" to="/">
            Back to main screen
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
