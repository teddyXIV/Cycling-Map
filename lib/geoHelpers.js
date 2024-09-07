// const latLonToTileCoords = (lat, lon, zoom) => {
//   const tileCount = Math.pow(2, zoom);
//   const x = Math.floor((lon + 180) / 360) * tileCount;
//   const y = Math.floor(
//     ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) * tileCount
//   );
//   return { x, y, zoom };
// }

// const getElevation = async (lat, lon, zoom, accessToken) => {
//   const { x, y } = latLonToTileCoords(lat, lon, zoom);
//   const tileUrl = `https://api.mapbox.com/v4/mapbox.terrain-rgb/${zoom}/${x}/${y}.pngraw?access_token=${accessToken}`;

//   // Fetch the terrain RGB tile
//   const response = await fetch(tileUrl);
//   const blob = await response.blob();
//   const imageBitmap = await createImageBitmap(blob);

//   // Create an off-screen canvas to extract pixel data
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');
//   canvas.width = imageBitmap.width;
//   canvas.height = imageBitmap.height;
//   ctx.drawImage(imageBitmap, 0, 0);

//   // Find the exact pixel for the lat/lon
//   const pixelX = Math.floor((lon - Math.floor(lon)) * 256);
//   const pixelY = Math.floor((lat - Math.floor(lat)) * 256);

//   // Get RGB values of the pixel
//   const pixelData = ctx.getImageData(pixelX, pixelY, 1, 1).data;
//   const [r, g, b] = [pixelData[0], pixelData[1], pixelData[2]];

//   // Convert RGB to elevation
//   const elevation = -10000 + ((r * 256 * 256 + g * 256 + b) * 0.1);
//   return elevation;
// }


// export { latLonToTileCoords, getElevation };

import RNFS from 'react-native-fs';
import Canvas from 'react-native-canvas';

const latLonToTileCoords = (lat, lon, zoom) => {
  const tileCount = Math.pow(2, zoom);
  const x = Math.floor((lon + 180) / 360 * tileCount);
  const y = Math.floor((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2 * tileCount);
  return { x, y, zoom };
}

const getElevation = async (lat, lon, zoom, accessToken) => {
  const { x, y } = latLonToTileCoords(lat, lon, zoom);
  const tileUrl = `https://api.mapbox.com/v4/mapbox.terrain-rgb/${zoom}/${x}/${y}.pngraw?access_token=${accessToken}`;

  console.log(tileUrl)

  try {
    // Fetch the terrain RGB tile
    const filePath = `${RNFS.CachesDirectoryPath}/tile.png`;
    await RNFS.downloadFile({ fromUrl: tileUrl, toFile: filePath }).promise;

    // Create a Canvas instance
    const canvas = new Canvas();
    const ctx = canvas.getContext('2d');

    if (canvas) {
      console.log('canvas exists')
    }

    // Load the image into the canvas
    const image = new Image(canvas.height, canvas.width)

    console.log("image should have been create now")

    image.src = filePath;

    // Wait for the image to load
    image.onload = () => {
      console.log("image loaded")
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // Find the exact pixel for the lat/lon
      const pixelX = Math.floor((lon - Math.floor(lon)) * 256);
      const pixelY = Math.floor((lat - Math.floor(lat)) * 256);

      // Get RGB values of the pixel
      const pixelData = ctx.getImageData(pixelX, pixelY, 1, 1).data;
      const [r, g, b] = [pixelData[0], pixelData[1], pixelData[2]];

      // Convert RGB to elevation
      const elevation = -10000 + ((r * 256 * 256 + g * 256 + b) * 0.1);
      return elevation;
    }
  } catch (error) {
    console.error("Error getting elevation from geoHelper:", error);
    throw error;
  }
}

export { latLonToTileCoords, getElevation };
