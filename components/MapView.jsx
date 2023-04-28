import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { MapPinIcon } from "@heroicons/react/24/solid";
const MapView = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  console.log(location.long);
  return (
    <div className="h-full">
      <Map
        initialViewState={{
          longitude: center.longitude,
          latitude: center.latitude,
          zoom: 14,
        }}
        style={{ height: "100%" }}
        mapStyle="mapbox://styles/xavierpro99/clgz9c04d00hh01pg4tk9g0iy"
        mapboxAccessToken={process.env.mapbox_key}
      >
        {/* location pointer */}
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker longitude={result.long} latitude={result.lat}>
              <MapPinIcon className="w-6 h-6 text-red-600  cursor-pointer animate-bounce" />
            </Marker>
          </div>
        ))}
      </Map>
    </div>
  );
};

export default MapView;
