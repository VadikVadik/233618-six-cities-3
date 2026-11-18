import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import cn from 'classnames';

type CityTabsListProps = {
  currentCity: string;
  onTabClick: (event: MouseEvent) => void;
};

function CityTabsList({ currentCity, onTabClick }: CityTabsListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': city === currentCity,
                })}
                to="#"
                onClick={(event) => onTabClick(event)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabsList;
