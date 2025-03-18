import { useRef, useEffect } from 'react';
import leaflet, { layerGroup, Marker, } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../utils/const';
import useMap from '../../hooks/useMap';
import { CityTypes, } from '../../../types/city.types';
import { OfferPreview, } from '../../../types/offers.types';

type MapProps = {
  city: CityTypes,
  offers: OfferPreview[],
  specialOfferId: any,

}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, offers, specialOfferId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const pointMaps = offer.location;

        pointMaps.forEach((pointMap) => {
          const marker = new Marker({
            lat: pointMap.latitude,
            lng: pointMap.longitude
          });

          marker
            .setIcon(
              specialOfferId && specialOfferId === offer.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);
        });
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);
  return (
    <section style={{ height: '100%', width: '100%', position: 'relative' }} className="cities__map map" ref={mapRef} />
  );
}

export default Map;
