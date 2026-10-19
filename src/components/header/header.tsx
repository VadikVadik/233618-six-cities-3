import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';
import { useLocation } from 'react-router-dom';

type HeaderProps = {
  authorizationStatus: boolean;
};

function Header({ authorizationStatus }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {useLocation().pathname !== '/login' && (
            <HeaderNavigation authorizationStatus={authorizationStatus} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
