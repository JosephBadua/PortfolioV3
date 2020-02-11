import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import "../../src/index.css"

const GoogleMaps = () => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: 34.052235, lng: -118.243683 },
  map,
  title: 'Hello World!'
  });
  return marker;
 };

 return (
  <Fragment>
   <div className="google-maps">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAObjwKwsn3gcQs7QxH8OGwqjK4erKJMCA" }}
      defaultCenter={{ lat: 34.052235, lng: -118.243683 }}
      defaultZoom={11}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
  </Fragment>
 );
};

export default GoogleMaps;
 