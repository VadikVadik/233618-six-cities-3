import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offers';
import { SRC_MARKER_DEFAULT, SRC_MARKER_CURRENT } from '../../const';

type mapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | Record<string, never>;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: SRC_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: SRC_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

function Map({ city, offers, selectedOffer }: mapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer === selectedOffer ? currentCustomIcon : defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
