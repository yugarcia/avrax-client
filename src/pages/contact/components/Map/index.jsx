// Mapa.js
import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoBox,
} from "@react-google-maps/api";

const ADDRESS = "8350 NW 52nd Terrace Suite 301";
const FULL_ADDRESS = "8350 NW 52nd Terrace, Doral, FL 33166, EE. UU.";
const API_KEY = "AIzaSyAJzlBrwsEh4L1YYNEfZ40FLGAEXCXiYuQ"; // Reemplaza con tu clave de API de Google Maps

const Map = () => {
  const [open, setOpen] = useState(true);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const coordenadas = useMemo(() => ({ lat: 25.819487, lng: -80.332749 }), []);

  const infoBoxOptions = {
    closeBoxURL: "", // Si no deseas un botón de cierre, puedes dejarlo en blanco

    boxStyle: {
      width: "280px",
      height: "100px",
    },
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordenadas}
        zoom={15}
        InfoBox={InfoBox}
      >
        {/* Marcador en el centro del mapa */}
        <MarkerF position={coordenadas} onClick={() => setOpen(true)} />
        {open && (
          <InfoBox position={coordenadas} options={infoBoxOptions}>
            <div style={{ backgroundColor: "white" }}>
              <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                <b>Avrax Windows</b>
              </div>
              <div style={{ fontSize: 14, fontColor: `#08233B` }}>
                {ADDRESS}
              </div>
              <div style={{ fontSize: 10, fontColor: `#08233B` }}>
                {FULL_ADDRESS}
              </div>
            </div>
          </InfoBox>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
