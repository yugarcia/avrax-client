// Mapa.js
import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import axios from "axios";

const ADDRESS = "8350 NW 52nd Terrace, Doral, FL 33166, EE. UU"; // Dirección seleccionada

const Map = () => {
  const apiKey = "CI22yQEIo7bJAQipncoBCJ7sygEIkqHLAQiGoM0BCOnFzQEIusjNARjAy8wBGKfqzQE="; // Reemplaza con tu clave de API de Google Maps

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const [coordenadas, setCoordenadas] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const obtenerCoordenadas = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            ADDRESS
          )}&key=${apiKey}`
        );

        const resultado = response.data.results[0];
        if (resultado) {
          const { lat, lng } = resultado.geometry.location;
          setCoordenadas({ lat, lng });
        }
      } catch (error) {
        console.error("Error al obtener las coordenadas:", error);
      }
    };

    obtenerCoordenadas();
  }, [ADDRESS, apiKey]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordenadas}
        zoom={15}
      >
        {/* Marcador en el centro del mapa */}
        <Marker position={coordenadas} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
