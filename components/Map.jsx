import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Mapbox, { MapView, Camera, LocationPuck, VectorSource, LineLayer, RasterSource, RasterLayer } from '@rnmapbox/maps'
import requestLocationPermission from '../lib/locationPermission';
import * as Location from 'expo-location';
import { latLonToTileCoords, getElevation } from '../lib/geoHelpers';

// requestLocationPermission();

const accessToken = 'pk.eyJ1IjoidGVkZHl4aXYiLCJhIjoiY20wbXprbGN3MDg3OTJrcTVncmtjNXZqcCJ9.SP-I5hVGlU6nRoDSyXX3hQ';
Mapbox.setAccessToken(accessToken)



const Map = async () => {
  const [location, setLocation] = useState(null);
  // const status = await requestLocationPermission();

  // const getUserLongLat = async () => {
  //   if (status !== 'granted') {
  //     console.log("location permission denied")
  //     return;
  //   }

  //   let currentLocation = await Location.getCurrentPositionAsync({});
  //   setLocation({
  //     latitude: currentLocation.coords.latitude,
  //     longitude: currentLocation.coords.longitude
  //   });
  // }

  // useEffect(() => {
  //   // (async () => {
  //   //   let status = await requestLocationPermission();
  //   //   if (status !== 'granted') {
  //   //     console.log("location permission denied")
  //   //     return;
  //   //   }

  //   //   let currentLocation = await Location.getCurrentPositionAsync({});
  //   //   setLocation({
  //   //     latitude: currentLocation.coords.latitude,
  //   //     longitude: currentLocation.coords.longitude
  //   //   });
  //   // })();

  //   getUserLongLat();
  // }, []);

  // const userElevation = await getElevation(location.latitude, location.longitude, 8, accessToken);
  // console.log("Elevation: ", userElevation)

  return (
    <MapView style={{ flex: 1 }} styleUrl="mapbox://styles/mapbox/satellite-v9" projection="globe">
      {/* <Camera
        followUserLocation={true}
        followZoomLevel={8} /> */}
      {/* <RasterSource
        id="terrainRaster"
        tileUrlTemplates={[
          `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=${accessToken}`,
        ]}
        tileSize={256}
      >
        <RasterLayer id="terrainRasterLayer" sourceID="terrainRaster" />
      </RasterSource> */}
      {/* <VectorSource id="terrainSource" url="mapbox://mapbox.mapbox-terrain-v2">
        <LineLayer
          id="contourLayer"
          sourceID="terrainSource"
          style={{
            lineColor: "#ff0000",
            lineWidth: 1
          }} />
      </VectorSource> */}
      {/* <LocationPuck puckBearingEnabled={true} puckBearing='heading' pulsing={{ isEnabled: true }} /> */}
    </MapView>
  )
}

export default Map