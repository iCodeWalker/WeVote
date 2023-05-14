import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "100%",
};

const MapComponent = (props) => {
  const onMapClicked = (props) => {
    console.log("Clicked");
  };
  return (
    <div className="App">
      <Map
        google={props.google}
        style={style}
        initialCenter={{
          lat: 22.71792,
          lng: 75.8333,
        }}
        zoom={10}
        onClick={onMapClicked}
      ></Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY,
})(MapComponent);
