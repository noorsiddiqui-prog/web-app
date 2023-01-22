import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import parksData from "../../../Data/skateboard-parks.json";
import mapStyles from '../../../styles/mapStyles'

const Map = () => {
  console.log("data", parksData);

  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        // defaultCenter={{lat : 25.395969, lng: 68.357773}}
        defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
        // defaultOptions={{styles: mapStyles}}       // it requires billing procedure 
      >
        {parksData?.features?.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0],
            }}
            onClick={() => setSelectedPark(park)}
            icon={{
                url: './assets/images/icons2.png',
                scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))}

        {selectedPark && (
          <InfoWindow
            position={{
              lat: selectedPark.geometry.coordinates[1],
              lng: selectedPark.geometry.coordinates[0],
            }}
            onCloseClick={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
