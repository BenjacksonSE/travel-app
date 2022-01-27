 import { useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup, withLeaflet } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
// import PrintControlDefault from 'react-leaflet-easyprint';
// const PrintControl = withLeaflet(PrintControlDefault);

function MyMap({mapID}) {
  const _created = (e) => handleCreate(e)
  const position = [40.63, -74.024];
  const [events, setEvents] = useState(null)

  function handleCreate(e) {
    console.log(e.layer._latlng.lat)
    console.log(e.layer._latlng.lng)
    console.log(mapID)
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: e.layer._latlng.lat,
        long: e.layer._latlng.lng,
        mymap_id: mapID
      }),
    }).then((r) => {
      if (r.ok) {
        console.log(r);
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  useEffect(() => {
    fetch(`/events`)
      .then((r) => r.json())
      .catch((e) => console.log(e))
      .then((events) => {
          setEvents(events)
          console.log(events)
        })}
  , []);
  
  // work around broken icons when using webpack, see https://github.com/PaulLeCam/react-leaflet/issues/255
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png',
  });

  return (
    <>
    <div style={{height: "90px"}}></div>
    <MapContainer
      className="map"
      center={position}
      zoom={10}
      style={{ height: "700px", width: "100%" }}
    >
      <FeatureGroup>
        <EditControl position="topright" onCreated={_created} draw={{rectangle: false, circle: false, circlemarker: false, polygon: false}}/>
      </FeatureGroup>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events && events.map(marker=>(
        <Marker key={marker.id} position={[marker.lat, marker.long]}>
        </Marker>
      ))}
      {/* <PrintControl ref={PrintControlDefault} position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} />
      <PrintControl position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Export as PNG" exportOnly /> */}
    </MapContainer>
    </>
  );
}

export default MyMap;