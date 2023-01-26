import React, { useState, useEffect } from "react";
import { Map as ReactMapGL, Marker, Popup } from "react-map-gl";
import { searchResults } from "../../searchResults";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // the center of the map
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  useEffect(() => {}, [selectedLocation]);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dirtyduck999/cldc2ybhj002601qrjwigek9v"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.img}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long && (
            <Popup
              latitude={result.lat}
              longitude={result.long}
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
