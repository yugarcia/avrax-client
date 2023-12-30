const axios = require("axios");

// Configura las credenciales de DigitalOcean Spaces
const accessKey = "DO007ZT7BV393PRN4BU4";
const secretKey = "BL/pIfNuwUeu7ob7gbzJys6kXELEi6Go0zYV5+t3Ijg";
const spaceName = "avrax";
const region = "nyc3";
const folderPath = "Residential";

//https://avrax.nyc3.digitaloceanspaces.com/Residential/image2/foto4.jpg
// Función para obtener las imágenes de una carpeta en Spaces
export const getImage = async () => {
  try {
    // Realiza una solicitud a la API de Spaces para listar objetos en la carpeta
    const response = await fetch(
      `https://${spaceName}.${region}.digitaloceanspaces.com/${folderPath}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessKey}:${secretKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();

    // Construye las URL de las imágenes
    const images = data.map(
      (obj) =>
        `https://${spaceName}.${region}.digitaloceanspaces.com/${obj.name}`
    );

    return images
      .then((img) => console.log("Imágenes en la carpeta:", img))
      .catch((error) => console.error("Error:", error));
  } catch (error) {
    console.error("Error al obtener las imágenes:", error);
    return [];
  }
};

export const useImage = () => {
  return getImage();
};
