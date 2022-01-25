 import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MyMap() {
  const position = [40.63, -74.024];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={10}
      style={{ height: "700px", width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
  );
}

export default MyMap;